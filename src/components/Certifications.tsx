import { useEffect, useState } from "react";
import { Certificates } from "./certifications/Certificates";
import { Modal } from "./certifications/Modal";
import "./styles/Certifications.css";

interface Image {
    image: string;
    alt: string;
};

export const Certifications = (): JSX.Element => {
    const [index, setIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage, setItemsPerPage] = useState<number>(2);
    const [clickedImage, setClickedImage] = useState<Image | null>(null);

    const updateItemsPerPage = (): void => {
        const itemsPerPage: number = window.innerWidth < 1360 ? 3 : 4;
        setItemsPerPage(itemsPerPage);
    };

    useEffect(() => {
        updateItemsPerPage();

        window.addEventListener("resize", updateItemsPerPage);
    }, []);

    const calculatePageNumbers = (): Array<number> => {
        const totalPages = Math.ceil(Certificates.length / itemsPerPage);
        
        return Array.from({ length: totalPages }, (_, index) => index + 1);
    };

    const getCurrentItems = (): Array<Image> => {
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;

        return Certificates.slice(indexOfFirstItem, indexOfLastItem);
    };

    const handlePageChange = (event: any): void => {
        setCurrentPage(Number(event.target.id));
    };

    const handleClick = (img: Image, index: number): void => {
        setIndex(index);
        setClickedImage(img);
    };

    const handleRotationRight = (): void => {
        const totalLength: number = Certificates.length;

        if (index + 1 >= totalLength) {
            setIndex(0);

            const nextImg = Certificates[0];
            setClickedImage(nextImg);
            return;
        }

        const nextIndex = index + 1;
        const nextImg = Certificates[nextIndex];

        setClickedImage(nextImg);
        setIndex(nextIndex);
    };

    const handleRotationLeft = (): void => {
        const totalLength: number = Certificates.length;

        if (index === 0) {
            setIndex(totalLength - 1);

            const nextImg = Certificates[totalLength - 1];
            setClickedImage(nextImg);
            return;
        }

        const nextIndex = index - 1;
        const nextImg = Certificates[nextIndex];

        setClickedImage(nextImg);
        setIndex(nextIndex);
    };

    const renderCards = (): JSX.Element => (
        <>
            {
                getCurrentItems().map((img: Image, index: number) => (
                    <img
                        key={index}
                        src={img.image}
                        alt={img.alt}
                        onClick={() => handleClick(img, index)}
                    />
                ))
            }
            {
                clickedImage &&
                <Modal
                    clickedImg={clickedImage}
                    handleRotationLeft={() => handleRotationLeft()}
                    handleRotationRight={() => handleRotationRight()}
                    setClickedImage={(img: Image | null) => setClickedImage(img)}
                />
            }
        </>
    );

    const renderPagination = (): JSX.Element => (
        <div className="certificates-pagination">
            <ul className="cert-pagination">
                {
                    calculatePageNumbers().map((number) => (
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
        </div>
    );

    return (
        <div className="certifications" id="certifications">
            <picture className="wrapper">
                <h1>Certificados</h1>
                {renderCards()}
            </picture>

            { renderPagination() }
        </div>
    );
};
