import { useMemo, useState } from "react";
import Switch from "react-switch";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { FaGraduationCap } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import "react-vertical-timeline-component/style.min.css";
import "./styles/Skills.css";

const Skills = (): JSX.Element => {
    const [checked, setChecked] = useState(false);

    const Formation = useMemo(() => (
        <div className="formation">
            <h1>Formação acadêmica</h1>

            <VerticalTimeline lineColor="#2b0040" layout="1-column-left">
                <VerticalTimelineElement
                    className="vertical-timeline-element--formation"
                    iconStyle={{ background:"#2b0040", color:"#cbbcff" }}
                    contentStyle={{ background:"#15171C", color:"white" }}
                    icon={<FaGraduationCap />}
                    date="2017 - 2019">
                        <h1>Ensino Médio</h1>
                        <h3>E.e.b. Profª Jandira D'Avila</h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--formation"
                    iconStyle={{ background:"#2b0040", color:"#cbbcff" }}
                    contentStyle={{ background:"#15171C", color:"white" }}
                    icon={<FaGraduationCap />}
                    date="2020 - 2024">
                        <h1>Bacharel em Engenharia de Software</h1>
                        <h3>Universidade da Região de Joinville - UNIVILLE, Joinville - Santa Catarina</h3>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    ), []);

    const Experience = useMemo(() => (
        <div className="experience">
            <h1>Experiência profissional</h1>

            <VerticalTimeline lineColor="#2b0040" layout="1-column-left">
                <VerticalTimelineElement
                    className="vertical-timeline-element--experience"
                    iconStyle={{ background:"#2b0040", color:"#cbbcff" }}
                    contentStyle={{ background:"#15171C", color:"white" }}
                    icon={<MdWork />}
                    date="2022 - 2023">
                        <h1>Fullstack Software Developer</h1>
                        <h3>SoftExpert - Software for Excellence, Joinville - Santa Catarina</h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--experience"
                    iconStyle={{ background:"#2b0040", color:"#cbbcff" }}
                    contentStyle={{ background:"#15171C", color:"white" }}
                    icon={<MdWork />}
                    date="2024 - Currently">
                        <h1>Software Engineer</h1>
                        <h3>SoftExpert - Software for Excellence, Joinville - Santa Catarina</h3>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    ), []);

    return (
        <div className="skills" id="skills">
            <div className="switch-container">
                <Switch
                    onChange={setChecked}
                    checked={checked}
                    onColor="#2b0040"
                    offColor="#cbbcff"
                    onHandleColor="#cbbcff"
                    offHandleColor="#2b0040"
                    checkedIcon={<div className="switch-icon">< MdWork color="#cbbcff" /></div>}
                    uncheckedIcon={<div className="switch-icon"><FaGraduationCap color="#2b0040" /></div>}
                />
            </div>

            <div className="skills-container">
                {(checked ? Experience : Formation)}
            </div>
        </div>
    );
};

export default Skills;