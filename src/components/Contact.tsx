import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiGmail, SiMicrosoftoutlook } from "react-icons/si";
import "./styles/Contact.css";

interface CardProps {
    href: string;
    children?: React.ReactNode;
};

const Card = ({href, children}: CardProps): JSX.Element => (
    <a className="contact-card" href={href} target="_blank" rel="nofollow">
        <span>{ children }</span>
    </a>
);

const Contact = (): JSX.Element => (
    <div className="contacts">
        <h1>Contatos</h1>

        <h3>Sigam-me nas redes sociais</h3>
        <div className="contacts-container">
            <Card href="https://www.linkedin.com/in/dheovani-xavier-da-cruz/">LinkedIn <FaLinkedin /></Card>
            <Card href="https://github.com/dheovani">Github <FaGithub /></Card>
            <Card href="https://www.instagram.com/dheovani.xavier/">Instagram <FaInstagram /></Card>
        </div>

        <h3>Envie-me um e-mail</h3>
        <div className="contacts-container">
            <Card href="mailto:dheovani_xavier@outlook.com">Outlook <SiMicrosoftoutlook /></Card>
            <Card href="mailto:ag.dhoxdc@gmail.com">Gmail <SiGmail /></Card>
         </div>
    </div>
);

export default Contact;