import { useState } from "react";
import { Icons } from "./lamp/Icons";

const setDarkModeProperties = (): void => {
    const header = document.querySelector('header');
    const start = document.getElementById('start');
    const secondLayer = document.getElementById('second-layer');
    const thirdLayer = document.getElementById('third-layer');

    document.body.style.setProperty('--pseudo-bodybg', 'rgba(0, 0, 0, 0.9)');
    header?.style.setProperty('--pseudo-headerbg', '#000');
    start?.style.setProperty('--pseudo-startbg', 'rgba(0, 0, 0, 0.6)');
    secondLayer?.style.setProperty('--pseudo-startsl', 'rgba(0, 0, 0, 0.4)');
    thirdLayer?.style.setProperty('--pseudo-starttl', 'rgba(0, 0, 0, 0.1)');
};

const setLightModeProperties = (): void => {
    const header = document.querySelector('header');
    const start = document.getElementById('start');
    const secondLayer = document.getElementById('second-layer');
    const thirdLayer = document.getElementById('third-layer');

    document.body.style.setProperty('--pseudo-bodybg', '#2F76DC');
    header?.style.setProperty('--pseudo-headerbg', '#10458F');
    start?.style.setProperty('--pseudo-startbg', '#104594');
    secondLayer?.style.setProperty('--pseudo-startsl', '#2F58E0');
    thirdLayer?.style.setProperty('--pseudo-starttl', '#2F6DE0');
};

interface Icon {
    image: string;
    alt: string;
};

export const Lamp = (): JSX.Element => {
    const lamp = Icons[0],
        lampOff = Icons[1];

    const [icon, setIcon] = useState<Icon>(lamp);
    const [darkMode, setDarkMode] = useState(false);
    const [mouseOver, setMouseOver] = useState(false);
    const [tempIcon, setTempIcon] = useState<Icon>(lampOff);

    const handleClick = (): void => {
        if (!darkMode) {
            setIcon(lampOff);
            setDarkModeProperties();
        } else {
            setIcon(lamp);
            setLightModeProperties();
        }

        setDarkMode(!darkMode);
    };

    const onMouseOver = (): void => {
        setMouseOver(true);

        if (!darkMode) {
            setTempIcon(lampOff);
        } else {
            setTempIcon(lamp);
        }
    };

    return (
        <div className="lamp">
            <img src={mouseOver ? tempIcon.image : icon.image} alt="lamp"
                style={{cursor: "pointer"}}
                onClick={() => handleClick()}
                onMouseOut={() => setMouseOver(false)}
                onMouseOver={() => onMouseOver()} />
        </div>
    );
};