interface Props {
    clickedImg: {image: string, alt: string},
    handleRotationRight: () => void,
    handleRotationLeft: () => void,
    setClickedImage: (img: {image: string, alt: string} | null) => void
};

export const Modal = (props: Props) => {
    const handleClick = (e: any): void => {
        if (e.target.classList.contains("dismiss")) {
            props.setClickedImage(null);
        }
    };

    return (
        <div className="overlay dismiss" onClick={handleClick}>
            <img src={props.clickedImg.image} alt="clicked" />
            <span className="dismiss" onClick={handleClick}>X</span>
            <div onClick={() => props.handleRotationLeft()} className="overlay-arrows left">⬅️</div>
            <div onClick={() => props.handleRotationRight()} className="overlay-arrows right">➡️</div>
        </div>
    );
};
