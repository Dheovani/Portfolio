import { useState, useEffect, useMemo, useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import Pagination from './utils/Pagination';
import Loading from './utils/Loading';
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

const Card = ({ id, name, desc, children }: CardProps): JSX.Element => (
    <div className="card" id={String(id)}>
        <h3>{name}</h3>
        <p>{desc}</p>
        {children}
    </div>
);

const Projects = (): JSX.Element => {
    const [loading, setLoading] = useState(false);
    const [repositories, setRepositories] = useState<Array<Repository>>([]);

    const updateRepositories = useCallback((): void => {
        setLoading(true);

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
            setLoading(false);
        });
    }, [setRepositories, setLoading]);

    useEffect(() => updateRepositories(), [updateRepositories]);

    const RepositoryCards = useMemo(() => repositories.map((rep, index) => (
        <Card id={rep.id} name={rep.name} key={index} desc={rep.description}>
            <a className="card-anchor" href={rep.html_url} target="_blank" rel="noreferrer">
                <FormattedMessage id="projects.access" />
            </a>
        </Card>
    )), [repositories]);

    return loading ? <Loading /> : <Pagination id="projects" title="projects.title" items={RepositoryCards} />;
};

export default Projects;