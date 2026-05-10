import React, { useEffect, useMemo, useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import SwitchModule from "react-switch";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

import { experience, formation, type TimelineItem } from "../data/timeline";
import type { Locale } from "../data/locales";

import "react-vertical-timeline-component/style.min.css";

const Switch = ((SwitchModule as unknown as { default?: typeof SwitchModule }).default ?? SwitchModule) as typeof SwitchModule;

interface Props {
  messages: Record<string, string>;
}

const localeMessages = () => {
  if (typeof window === "undefined") {
    return { pt: {} as Record<string, string>, en: {}, es: {} };
  }

  const payload = window.PORTFOLIO_MESSAGES as Record<Locale, Record<string, string>> | undefined;
  return payload ?? { pt: {} as Record<string, string>, en: {}, es: {} };
};

const getStoredLocale = (): Locale => {
  if (typeof window === "undefined") return "pt";

  const locale = window.localStorage.getItem("locale");
  return locale === "en" || locale === "es" || locale === "pt" ? locale : "pt";
};

const renderItems = (items: TimelineItem[], type: "formation" | "experience", locale: Locale) => {
  const Icon = type === "formation" ? FaGraduationCap : MdWork;

  return items.map((item) => (
    <VerticalTimelineElement
      key={`${type}-${item.date}-${item.title.pt}`}
      className={`vertical-timeline-element--${type}`}
      contentStyle={{ background: "var(--panel)", color: "var(--text)", border: "1px solid var(--border)" }}
      contentArrowStyle={{ borderRight: "7px solid var(--panel)" }}
      date={item.date}
      icon={<Icon />}
      iconStyle={{ background: "var(--accent-soft)", color: "var(--accent)" }}
    >
      <h3 className="skills-timeline-title">{item.title[locale]}</h3>
      <p className="skills-timeline-place">{item.place[locale]}</p>
    </VerticalTimelineElement>
  ));
};

export default function SkillsTimeline({ messages }: Props) {
  const [checked, setChecked] = useState(false);
  const [locale, setLocale] = useState<Locale>("pt");

  useEffect(() => {
    setLocale(getStoredLocale());

    const handleStorage = () => setLocale(getStoredLocale());
    const handleLocaleChange = (event: Event) => {
      const customEvent = event as CustomEvent<Locale>;
      setLocale(customEvent.detail ?? getStoredLocale());
    };

    window.addEventListener("storage", handleStorage);
    window.addEventListener("portfolio:locale-change", handleLocaleChange);

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("portfolio:locale-change", handleLocaleChange);
    };
  }, []);

  const dictionary = localeMessages()[locale] ?? messages;
  const titleKey = checked ? "skills.experience.title" : "skills.formation.title";
  const title = dictionary[titleKey] ?? messages[titleKey];

  const currentTimeline = useMemo(
    () => renderItems(checked ? experience : formation, checked ? "experience" : "formation", locale),
    [checked, locale]
  );

  const checkedIcon = (
    <div className="switch-icon">
      <MdWork color="#cbbcff" />
    </div>
  );

  const uncheckedIcon = (
    <div className="switch-icon">
      <FaGraduationCap color="#2b0040" />
    </div>
  );

  return (
    <div className="skills-timeline">
      <div className="skills-switch-container">
        <Switch
          onChange={setChecked}
          checked={checked}
          onColor="#2b0040"
          offColor="#cbbcff"
          onHandleColor="#cbbcff"
          offHandleColor="#2b0040"
          checkedIcon={checkedIcon}
          uncheckedIcon={uncheckedIcon}
          aria-label={dictionary["skills.toggle.experience"] ?? messages["skills.toggle.experience"]}
        />
      </div>

      <h2 className="section-title">{title}</h2>
      <VerticalTimeline lineColor="white" layout="1-column-left">
        {currentTimeline}
      </VerticalTimeline>
    </div>
  );
}
