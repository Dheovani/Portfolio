import { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { MdOutlineMenu } from "react-icons/md";
import Select from "./utils/Select";
import "./styles/Navnar.css";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const toogleOpen = useCallback(setOpen.bind(null, !open), [open, setOpen]);

    const closeMenu = useCallback(setOpen.bind(null, false), [setOpen]);

    return (
        <nav className="navbar">
            <h1 className="navbar-main">
                <NavLink onClick={closeMenu} style={({isActive}) => ({ color: isActive && !open ? "#bb86fc" : "#e0d8ff" })} to="/">
                    <FormattedMessage id="navbar.portfolio" />
                </NavLink>
            </h1>

            <div className="options">
                <NavLink onClick={closeMenu} to="/about"><FormattedMessage id="navbar.about" /></NavLink>
                <NavLink onClick={closeMenu} to="/skills"><FormattedMessage id="navbar.skills" /></NavLink>
                <NavLink onClick={closeMenu} to="/contact"><FormattedMessage id="navbar.contact" /></NavLink>
                <NavLink onClick={closeMenu} to="/projects"><FormattedMessage id="navbar.projects" /></NavLink>
                <NavLink onClick={closeMenu} to="/certifications"><FormattedMessage id="navbar.certifications" /></NavLink>

                <Select id="langs" options={[
                    { value: "en", title: "Inglês" },
                    { value: "pt", title: "Português" },
                    { value: "es", title: "Espanhol" }
                ]} />
            </div>

            {!open && (
                <div className="mobile-menu">
                    <button onClick={toogleOpen}><MdOutlineMenu size="1.5rem" /></button>
                </div>
            )}

            {open && (
                <div className="mobile-options">
                    <div className="menu-container">
                        <div className="mobile-menu">
                            <button onClick={toogleOpen}><MdOutlineMenu color={open ? "#bb86fc" : "#e0d8ff"} size="1.5rem" /></button>
                        </div>
                    </div>
                    <div className="menu-options">
                        <NavLink onClick={closeMenu} to="/about"><FormattedMessage id="navbar.about" /></NavLink>
                        <NavLink onClick={closeMenu} to="/skills"><FormattedMessage id="navbar.skills" /></NavLink>
                        <NavLink onClick={closeMenu} to="/contact"><FormattedMessage id="navbar.contact" /></NavLink>
                        <NavLink onClick={closeMenu} to="/projects"><FormattedMessage id="navbar.projects" /></NavLink>
                        <NavLink onClick={closeMenu} to="/certifications"><FormattedMessage id="navbar.certifications" /></NavLink>
                    </div>
                    <div className="mobile-language">
                        <Select id="langs" options={[
                            { value: "en", title: "Inglês" },
                            { value: "pt", title: "Português" },
                            { value: "es", title: "Espanhol" }
                        ]} />
                    </div>
                </div>
            )}
        </nav>
    );
};