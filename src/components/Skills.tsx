import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import "./styles/Skills.css";

export const Skills = (): JSX.Element => {
    const Formation = () => {
        return (
            <div className="formation">
                <h1>Formação acadêmica</h1>
    
                <VerticalTimeline lineColor="000" layout="1-column-left">
                    <VerticalTimelineElement
                        className="vertical-timeline-element--formation"
                        iconStyle={{background:"#000", color:"#fff"}}
                        contentStyle={{background:"#15171C", color:"white"}}
                        icon={<FaGraduationCap />}
                        date="2017 - 2019">
                            <h1>Ensino Médio</h1>
                            <h3>E.e.b. Profª Jandira D'Avila</h3>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--formation"
                        iconStyle={{background:"#000", color:"#fff"}}
                        contentStyle={{background:"#15171C", color:"white"}}
                        icon={<FaGraduationCap />}
                        date="2020 - Currently">
                            <h1>Bacharel em Engenharia de Software</h1>
                            <h3>Universidade da Região de Joinville - UNIVILLE, Joinville - Santa Catarina</h3>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        );
    };

    const Experience = (): JSX.Element => {
        return (
            <div className="experience">
                <h1>Experiência profissional</h1>
    
                <VerticalTimeline lineColor="#000" layout="1-column-left">
                    <VerticalTimelineElement
                        className="vertical-timeline-element--experience"
                        iconStyle={{background:"#000", color:"#fff"}}
                        contentStyle={{background:"#15171C", color:"white"}}
                        icon={<MdWork />}
                        date="2022 - Currently">
                            <h1>Fullstack Software Developer</h1>
                            <h3>SoftExpert - Software for Excellence, Joinville - Santa Catarina</h3>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        );
    };

    return (
        <div className="skills" id="skills">
            <Formation />
            <Experience />
        </div>
    );
};