import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import Select from "./utils/Select";

const Navbar = (): JSX.Element => (
    <nav className="navbar">
        <h1 className="navbar-main">
            <NavLink to="/portfolio"><FormattedMessage id="navbar.portfolio" /></NavLink>
        </h1>

        <div className="options">
            <NavLink to="/about">
                <FormattedMessage id="navbar.about" />
            </NavLink>

            <NavLink to="/skills">
                <FormattedMessage id="navbar.skills" />
            </NavLink>

            <NavLink to="/contact">
                <FormattedMessage id="navbar.contact" />
            </NavLink>

            <NavLink to="/projects">
                <FormattedMessage id="navbar.projects" />
            </NavLink>

            <NavLink to="/certifications">
                <FormattedMessage id="navbar.certifications" />
            </NavLink>

            <Select id="langs" options={[
                { value: "en", title: "Inglês" },
                { value: "pt", title: "Português" },
                { value: "es", title: "Espanhol" }
            ]} />
        </div>
    </nav>
);

export default Navbar;