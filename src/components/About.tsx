import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import "./styles/About.css";
import { useCallback, useMemo, useState } from "react";

const CollapsibleSection = ({ title, content }: { title: string, content: React.ReactNode }) => {
    const [collapsed, setCollapsed] = useState(false);

    const toogleCollapsed = useCallback(() => setCollapsed(!collapsed), [collapsed, setCollapsed]);

    const Icon = useMemo(() => collapsed ? <MdKeyboardArrowDown color="#fff" size={24} /> : <MdKeyboardArrowRight color="#fff" size={24} />, [collapsed]);

    return (
        <div className="collapsible-container" onClick={toogleCollapsed}>
            <button>{title}{Icon}</button>
            <div className="paragraphs collapsible">
                <p>{collapsed && content}</p>
            </div>
        </div>
    );
};

const About = (): JSX.Element => (
    <div className="about-me" id="about-me">
        <h1>Sobre mim</h1>

        <CollapsibleSection title="Introdução" content={
            <p>
                Olá, meu nome é Dheovani Xavier da Cruz! Sou um entusiasta da tecnologia, apaixonado por tudo que envolve inovação e desenvolvimento.
                Sou um desenvolvedor backend, especializado em criar soluções e sistemas eficientes para diversos projetos.
                Desde jovem, meu interesse pela tecnologia despertou, e desde então tenho me dedicado a aprimorar minhas habilidades nessa área em constante evolução.
                Sou fascinado pela forma como a tecnologia molda o mundo ao nosso redor, facilitando a comunicação, automatizando tarefas e criando novas oportunidades
                No geral, sou uma pessoa comprometida em aprender e crescer constantemente, tanto pessoal quanto profissionalmente.
                Acredito que o conhecimento é uma ferramenta poderosa e estou sempre em busca de novas oportunidades para aprimorar minhas habilidades técnicas e
                explorar novas áreas de interesse.
            </p>
        } />

        <CollapsibleSection title="Linguagens" content={
            <p>
                Sou fluente em português e inglês, o que me permite comunicar com clareza e trabalhar em projetos internacionais.
                Tenho nível intermediário em espanhol, conseguindo compreender e interagir bem nesse idioma.
                Atualmente, estou aprendendo latim por interesse pessoal e para expandir meu entendimento sobre a origem e estrutura das línguas latinas.
            </p>
        } />

        <CollapsibleSection title="Tecnologias" content={
            <p>
                Possuo experiência profissional com diversas tecnologias voltadas ao desenvolvimento de sistemas e integração de serviços.
                Trabalho com PHP, Java e JavaScript, utilizando frameworks como Spring Boot, React e a versão antiga do Angular.
                Tenho sólido conhecimento em bancos de dados SQL, incluindo Oracle, PostgreSQL e Microsoft SQL Server,
                além de experiência com controle de versão utilizando Git e GitLab.
                Também atuo em ambientes com pipelines de integração contínua através do Jenkins e outras tecnologias.
                <br /><br />
                No âmbito acadêmico, desenvolvi projetos utilizando C e C++, explorando bibliotecas como OpenGL e SFML para criação de aplicações gráficas e jogos.
                Além disso, possuo experiência com Python e ambiente Linux, onde aprofundei meus conhecimentos em desenvolvimento, depuração e automação de tarefas.
            </p>
        } />

        <CollapsibleSection title="Filosofia profissional" content={
            <p>
                Tenho interesse em atuar no desenvolvimento de soluções escaláveis e eficientes, especialmente em ambientes que valorizem boas práticas,
                aprendizado contínuo e inovação tecnológica. Acredito que o aprendizado é um processo contínuo. Gosto de explorar novas linguagens,
                frameworks e ferramentas que me desafiem e ampliem minha visão sobre o desenvolvimento de software. Sou uma pessoa detalhista e comprometida
                com a qualidade do sistema. Gosto de trabalhar em equipe, compartilhar conhecimento e buscar constantemente novas formas de otimizar processos.
            </p>
        } />
    </div>
);

export default About;