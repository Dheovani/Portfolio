import { useState } from "react";
import { Certificates } from "./certifications/Certificates";
import { Modal } from "./certifications/Modal";
import "./styles/Certifications.css";

interface Image {
    image: string;
    alt: string;
};

export const Certifications = (): JSX.Element => {
    const [index, setIndex] = useState(0);
    const [clickedImage, setClickedImage] = useState<Image | null>(null);

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

    const renderCards = (): JSX.Element => {
        return (
            <>
                {
                    Certificates.map((img: Image, index: number) => (
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
    };

    return (
        <div className="certifications" id="certifications">
            <picture className="wrapper">
                <h1>Certifications</h1>
                {renderCards()}
            </picture>
        </div>
    );
};
