import type { Locale } from "./locales";

export type LocalizedText = Record<Locale, string>;

export interface TimelineItem {
  date: string;
  title: LocalizedText;
  place: LocalizedText;
}

export const formation: TimelineItem[] = [
  {
    date: "2017 - 2019",
    title: { pt: "Ensino Médio", en: "High School", es: "Bachillerato" },
    place: {
      pt: "E.E.B. Profª Jandira D'Avila",
      en: "E.E.B. Profª Jandira D'Avila",
      es: "E.E.B. Profª Jandira D'Avila",
    },
  },
  {
    date: "2020 - 2024",
    title: {
      pt: "Bacharel em Engenharia de Software",
      en: "Bachelor in Software Engineering",
      es: "Licenciatura en Ingeniería de Software",
    },
    place: {
      pt: "Universidade da Região de Joinville - UNIVILLE, Joinville - Santa Catarina",
      en: "University of Joinville Region - UNIVILLE, Joinville - Santa Catarina",
      es: "Universidad de la Región de Joinville - UNIVILLE, Joinville - Santa Catarina",
    },
  },
  {
    date: "2025 - 2026",
    title: {
      pt: "Pós-graduação em Arquitetura de Software",
      en: "Postgraduate Degree in Software Architecture",
      es: "Posgrado en Arquitectura de Software",
    },
    place: {
      pt: "FACUVALE",
      en: "FACUVALE University Center",
      es: "FACUVALE",
    },
  },
  {
    date: "2025 - 2026",
    title: {
      pt: "Pós-graduação em Inteligência Artificial e Análise de Dados",
      en: "Postgraduate Degree in Artificial Intelligence and Data Analysis",
      es: "Posgrado en Inteligencia Artificial y Análisis de Datos",
    },
    place: {
      pt: "FACUVALE",
      en: "FACUVALE University Center",
      es: "FACUVALE",
    },
  },
];

export const experience: TimelineItem[] = [
  {
    date: "2022 - 2023",
    title: {
      pt: "Fullstack Software Developer",
      en: "Fullstack Software Developer",
      es: "Desarrollador de Software Fullstack",
    },
    place: {
      pt: "SoftExpert - Software for Excellence, Joinville - Santa Catarina",
      en: "SoftExpert - Software for Excellence, Joinville - Santa Catarina",
      es: "SoftExpert - Software for Excellence, Joinville - Santa Catarina",
    },
  },
  {
    date: "2024 - Currently",
    title: {
      pt: "Software Engineer",
      en: "Software Engineer",
      es: "Ingeniero de Software",
    },
    place: {
      pt: "SoftExpert - Software for Excellence, Joinville - Santa Catarina",
      en: "SoftExpert - Software for Excellence, Joinville - Santa Catarina",
      es: "SoftExpert - Software for Excellence, Joinville - Santa Catarina",
    },
  },
];
