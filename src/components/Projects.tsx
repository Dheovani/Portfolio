import { useState, useEffect } from 'react';
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

export const Projects = (): JSX.Element => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage, setItemsPerPage] = useState<number>(2);
    const [repositories, setRepositories] = useState<Array<Repository>>([]);

    const updateRepositories = async (): Promise<void> => {
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
    };

    const updateItemsPerPage = (): void => {
        const itemsPerPage: number = window.innerWidth < 1360 ? 2 : 3;
        setItemsPerPage(itemsPerPage);
    };

    useEffect(() => {
        updateRepositories();
        updateItemsPerPage();

        window.addEventListener("resize", updateItemsPerPage);
    }, []);

    const handlePageChange = (event: any): void => {
        setCurrentPage(Number(event.target.id));
    };

    const calculatePageNumbers = (): Array<number> => {
        const totalPages = Math.ceil(repositories.length / itemsPerPage);
        
        return Array.from({ length: totalPages }, (_, index) => index + 1);
    };
    
    const getCurrentItems = (): Array<Repository> => {
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;

        return repositories.slice(indexOfFirstItem, indexOfLastItem);
    };

    const renderCards = (): JSX.Element => {
        const currentItems = getCurrentItems();

        return (
            <div className="cards">
                {
                    currentItems.map((rep, index) => {
                        return (
                            <Card id={rep.id} name={rep.name} key={index} desc={rep.description}>
                                <a className="card-anchor" href={rep.html_url} target="_blank" rel="noreferrer">
                                    Acessar repositório
                                </a>
                            </Card>
                        );
                    })
                }
            </div>
        );
    };

    const renderPagination = (): JSX.Element => {
        const pageNumbers = calculatePageNumbers();

        return (
            <ul className="pagination">
                {
                    pageNumbers.map((number) => (
                        <li
                            key={number}
                            id={String(number)}
                            onClick={handlePageChange}
                            className={currentPage === number ? "active" : ""}>
                            {number}
                        </li>
                    ))
                }
            </ul>
        );
    };

    return (
        <div className="projects" id='projects'>
            <h1>Projetos do Github</h1>
            <div className="my-projects">{ renderCards() }</div>
            <div className="projects-pagination">{ renderPagination() }</div>
        </div>
    );
};