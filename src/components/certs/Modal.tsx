import { MouseEvent, useCallback } from "react";

interface Props {
    clickedImg: {image: string, alt: string},
    handleRotationRight: () => void,
    handleRotationLeft: () => void,
    setClickedImage: (img: {image: string, alt: string} | null) => void
};

const Modal = ({ clickedImg, handleRotationLeft, handleRotationRight, setClickedImage }: Props) => {
    const handleClick = useCallback((e: MouseEvent<HTMLButtonElement|HTMLDivElement>) => {
        if ((e.target as HTMLElement).classList.contains("dismiss")) {
            setClickedImage(null);
        }
    }, [setClickedImage]);

    window.addEventListener('keydown', (e: KeyboardEvent) => {
        switch (e.key) {
        case "ArrowLeft":
            handleRotationLeft();
            break;
        case "ArrowRight":
            handleRotationRight();
            break;
        case "Escape":
            setClickedImage(null);
            break;
        default:
            break;
        }
    });

    return (
        <div className="carousel-overlay dismiss" onClick={handleClick}>
            <div className="carousel-content">
                <button className="carousel-close dismiss" onClick={handleClick}>×</button>

                <div className="carousel-wrapper">
                    <button className="carousel-arrow left" onClick={handleRotationLeft} aria-label="Previous">❮</button>
                    <img className="carousel-img" src={clickedImg.image} alt={clickedImg.alt}  />
                    <button className="carousel-arrow right" onClick={handleRotationRight} aria-label="Next">❯</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;