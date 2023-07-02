import profilePic from "../assets/pic.jpg";
import { Lamp } from "./Lamp";
import "./styles/Start.css";

export const Start = (): JSX.Element => {
    return (
        <>
            <div className="start" id="start">
                <div className="image-container">
                    <img src={profilePic} alt="profile_pic" />
                </div>
                <div className="intro">
                    Olá, <br />
                    <span className="name">Meu nome é Dheovani ✌️</span> <br />
                    <span className="job">
                        Sou um desenvolvedor de software fullstack
                        <br />
                        apaixonado por tecnologia e por aprender.
                        <br /><br />
                    </span>
                    Seja bem vindo!
                    <br /><br /><br />
                </div>
            </div>

            <Lamp />
            
            <div className="second-layer" id="second-layer"></div>
            <div className="third-layer" id="third-layer"></div>
        </>
    );
};