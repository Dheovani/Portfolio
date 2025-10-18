import { FormattedMessage } from "react-intl";
import pic from "../assets/pic.jpg";
import "./styles/Home.css";

const Home = (): JSX.Element => (
    <div className="home" id="home">
        <div className="home-container">
            <div className="home-text">
                <p>
                    <FormattedMessage id="home.greeting" values={{
                        b: (chunks: React.ReactNode) => <b>{chunks}</b>
                    }} />
                </p>
                <p>
                    <FormattedMessage id="home.description" values={{
                        b: (chunks: React.ReactNode) => <b>{chunks}</b>,
                        br: () => <br />
                    }} />
                </p>
            </div>

            <div className="home-image">
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