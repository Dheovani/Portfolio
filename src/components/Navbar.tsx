import { Link, NavLink } from "react-router-dom";

const Navbar = (): JSX.Element => (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
        <h1 className="text-xl font-bold">
            <Link to="/">Início</Link>
        </h1>

        <div className="space-x-4">
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-yellow-400" : "hover:text-gray-300"}>
                Sobre
            </NavLink>

            <NavLink to="/skills" className={({ isActive }) => isActive ? "text-yellow-400" : "hover:text-gray-300"}>
                Formação
            </NavLink>

            <NavLink to="/contact" className={({ isActive }) => isActive ? "text-yellow-400" : "hover:text-gray-300"}>
                Contato
            </NavLink>

            <NavLink to="/projects" className={({ isActive }) => isActive ? "text-yellow-400" : "hover:text-gray-300"}>
                Projetos
            </NavLink>

            <NavLink to="/certifications" className={({ isActive }) => isActive ? "text-yellow-400" : "hover:text-gray-300"}>
                Certificados
            </NavLink>
        </div>
    </nav>
);

export default Navbar;