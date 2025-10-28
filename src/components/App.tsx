import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Projects from './Projects';
import Certifications from './Certifications';

import { useSelectContext } from "./utils/Select";
import { IntlProvider } from "react-intl";
import ptMessages from "../i18n/pt.json";
import enMessages from "../i18n/en.json";
import esMessages from "../i18n/es.json";

export default () => {
	const { option } = useSelectContext();
	
	const messages: Record<string, any> = {
		pt: ptMessages,
		en: enMessages,
		es: esMessages
	};
	
	const locale = messages[option] ? option : "pt";

	return (
		<Router>
			<IntlProvider locale={locale} messages={messages[locale]}>
				<Navbar />
				<div className="p-4">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/skills" element={<Skills />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/certifications" element={<Certifications />} />
					</Routes>
				</div>
			</IntlProvider>
		</Router>
	);
};