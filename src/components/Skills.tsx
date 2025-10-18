import { useMemo, useState } from "react";
import { FormattedMessage } from "react-intl";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { FaGraduationCap } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import Switch from "react-switch";

import "react-vertical-timeline-component/style.min.css";
import "./styles/Skills.css";

const Skills = (): JSX.Element => {
    const [checked, setChecked] = useState(false);

    const Formation = useMemo(() => (
        <div className="formation">
            <h1><FormattedMessage id="skills.formation.title" /></h1>

            <VerticalTimeline lineColor="#2b0040" layout="1-column-left">
                <VerticalTimelineElement
                    className="vertical-timeline-element--formation"
                    iconStyle={{ background:"#2b0040", color:"#cbbcff" }}
                    contentStyle={{ background:"#15171C", color:"white" }}
                    icon={<FaGraduationCap />}
                    date="2017 - 2019">
                        <FormattedMessage id="skills.formation.school" values={{
                            h1: (chunks: React.ReactNode) => <h1>{chunks}</h1>,
                            h3: (chunks: React.ReactNode) => <h3>{chunks}</h3>
                        }} />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--formation"
                    iconStyle={{ background:"#2b0040", color:"#cbbcff" }}
                    contentStyle={{ background:"#15171C", color:"white" }}
                    icon={<FaGraduationCap />}
                    date="2020 - 2024">
                        <FormattedMessage id="skills.formation.bachelor" values={{
                            h1: (chunks: React.ReactNode) => <h1>{chunks}</h1>,
                            h3: (chunks: React.ReactNode) => <h3>{chunks}</h3>
                        }} />
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    ), []);

    const Experience = useMemo(() => (
        <div className="experience">
            <h1><FormattedMessage id="skills.experience.title" /></h1>

            <VerticalTimeline lineColor="#2b0040" layout="1-column-left">
                <VerticalTimelineElement
                    className="vertical-timeline-element--experience"
                    iconStyle={{ background:"#2b0040", color:"#cbbcff" }}
                    contentStyle={{ background:"#15171C", color:"white" }}
                    icon={<MdWork />}
                    date="2022 - 2023">
                        <FormattedMessage id="skills.experience.dev" values={{
                            h1: (chunks: React.ReactNode) => <h1>{chunks}</h1>,
                            h3: (chunks: React.ReactNode) => <h3>{chunks}</h3>
                        }} />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--experience"
                    iconStyle={{ background:"#2b0040", color:"#cbbcff" }}
                    contentStyle={{ background:"#15171C", color:"white" }}
                    icon={<MdWork />}
                    date="2024 - Currently">
                        <FormattedMessage id="skills.experience.engineer" values={{
                            h1: (chunks: React.ReactNode) => <h1>{chunks}</h1>,
                            h3: (chunks: React.ReactNode) => <h3>{chunks}</h3>
                        }} />
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