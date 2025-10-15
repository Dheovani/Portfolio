import { useState, useEffect, useMemo, useCallback } from 'react';
import Pagination from './Pagination';
import "./styles/Projects.css";

interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
};

interface CardProps {
    id: number;
    name: string;
    desc: string;
    children: JSX.Element;
};

const Card = (props: CardProps): JSX.Element => (
    <div className="card" id={String(props.id)}>
        <h3>{ props.name }</h3>
        <p>{ props.desc }</p>
        { props.children }
    </div>
);

const Projects = (): JSX.Element => {
    const [repositories, setRepositories] = useState<Array<Repository>>([]);

    const updateRepositories = useCallback((): void => {
        const promise = new Promise((resolve) => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", "https://api.github.com/users/dheovani/repos");

            xhr.responseType = 'json';
            xhr.onload = () => resolve(xhr.response);

            xhr.send();
        });

        promise.then(response => {
            const repos: Array<Repository> = response as Array<Repository>;
            setRepositories(repos);
        });
    }, [setRepositories]);

    useEffect(() => updateRepositories(), [updateRepositories]);

    const RepositoryCards = useMemo(() => repositories.map((rep, index) => (
        <Card id={rep.id} name={rep.name} key={index} desc={rep.description}>
            <a className="card-anchor" href={rep.html_url} target="_blank" rel="noreferrer">
                Acessar repositório
            </a>
        </Card>
    )), [repositories]);

    return <Pagination id="projects" title="Projetos do Github" items={RepositoryCards} />;
};

export default Projects;