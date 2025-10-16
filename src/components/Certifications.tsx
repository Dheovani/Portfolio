import { useCallback, useMemo, useState } from "react";
import { Certificates } from "./certs/Certificates";
import Pagination from "./utils/Pagination";
import Modal from "./certs/Modal";
import "./styles/Certifications.css";

interface Image {
    image: string;
    alt: string;
};

const Certifications = (): JSX.Element => {
    const [index, setIndex] = useState(0);
    const [clickedImage, setClickedImage] = useState<Image | null>(null);

    const handleClick = useCallback((img: Image, index: number): void => {
        setIndex(index);
        setClickedImage(img);
    }, [setIndex, setClickedImage]);

    const handleRotationRight = useCallback((): void => {
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
    }, [index, setIndex, setClickedImage]);

    const handleRotationLeft = useCallback((): void => {
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
    }, [index, setIndex, setClickedImage]);

    const Certifications = useMemo(() => Certificates.map((img: Image, index: number) => (
        <img key={index} src={img.image} alt={img.alt} onClick={() => handleClick(img, index)} />
    )), [handleClick]);

    return (
        <div className="certifications" id="certifications">
            <picture className="wrapper">
                <Pagination id="certs" title="Certificados" enforceRows={1} items={Certifications} />
                {clickedImage && (
                    <Modal
                        clickedImg={clickedImage}
                        handleRotationLeft={handleRotationLeft}
                        handleRotationRight={handleRotationRight}
                        setClickedImage={(img: Image | null) => setClickedImage(img)}
                    />
                )}
            </picture>
        </div>
    );
};

export default Certifications;