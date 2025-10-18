import pic from "../assets/pic.jpg";
import "./styles/Home.css";

const Home = (): JSX.Element => (
    <div className="home" id="home">
        <div className="about-container">
            <div className="about-text">
                <p>Olá, eu sou <b>Dheovani Xavier</b> 👋</p>
                <p>
                    Desenvolvedor full-stack especializado em arquiteturas baseadas em microsserviços.<br />
                    Apaixonado por tecnologia, inovação e aprendizado contínuo.<br />
                    Sou desenvolvedor backend com experiência em <b>PHP, Java e JavaScript</b>,<br />
                    além de sólidos conhecimentos em bancos de dados SQL e arquiteturas de microsserviços.<br />
                    Busco sempre aprimorar minhas habilidades e contribuir com soluções de alto impacto.
                </p>
            </div>

            <div className="about-image">
                <img src={pic} alt="my-pic" />
            </div>
        </div>
        <footer>
            <div className="tech-stack">
                <img src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white&color=111928&labelColor=632ce4" />
                <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=openjdk&logoColor=white&color=111928&labelColor=632ce4" />
                <img src="https://img.shields.io/badge/TypeScript-F7DF1E?style=for-the-badge&logo=typescript&logoColor=white&color=111928&labelColor=632ce4" />
                <img src="https://img.shields.io/badge/C++-%2300599C?style=for-the-badge&logo=cplusplus&logoColor=white&color=111928&labelColor=632ce4" />
                <img src="https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white&color=111928&labelColor=632ce4" />
                <img src="https://img.shields.io/badge/Python-F05032?style=for-the-badge&logo=python&logoColor=white&color=111928&labelColor=632ce4" />
                <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white&color=111928&labelColor=632ce4" />
            </div>
        </footer>
    </div>
);

export default Home;