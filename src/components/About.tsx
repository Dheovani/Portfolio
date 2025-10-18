import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { useCallback, useMemo, useState } from "react";
import { FormattedMessage } from "react-intl";
import "./styles/About.css";

const CollapsibleSection = ({ title, content }: { title: string, content: React.ReactNode }): JSX.Element => {
    const [collapsed, setCollapsed] = useState(false);

    const toogleCollapsed = useCallback(() => setCollapsed(!collapsed), [collapsed, setCollapsed]);

    const Icon = useMemo(() => collapsed ? <MdKeyboardArrowDown color="#fff" size={24} /> : <MdKeyboardArrowRight color="#fff" size={24} />, [collapsed]);

    return (
        <div className="collapsible-container" onClick={toogleCollapsed}>
            <button><FormattedMessage id={title} />{Icon}</button>
            <div className="paragraphs collapsible">
                <p>{collapsed && content}</p>
            </div>
        </div>
    );
};

const About = (): JSX.Element => (
    <div className="about-me" id="about-me">
        <h1><FormattedMessage id="about.title" /></h1>
        <CollapsibleSection title="about.title.intro" content={<p><FormattedMessage id="about.intro" /></p>} />
        <CollapsibleSection title="about.title.languages" content={<p><FormattedMessage id="about.languages" /></p>} />
        <CollapsibleSection title="about.title.techs" content={<p><FormattedMessage id="about.techs" values={{ br: () => <br /> }} /></p>} />
        <CollapsibleSection title="about.title.pro_view" content={<p><FormattedMessage id="about.pro_view" /></p>} />
    </div>
);

export default About;