import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Projects from './Projects';
import Certifications from './Certifications';

export default () => (
  <BrowserRouter>
		<Navbar />
		<div className="p-4">
			<Routes>
				<Route path="/" element={<></>} />
				<Route path="/about" element={<></>} />
				<Route path="/skills" element={<Skills />} />
				<Route path="/contact" element={<></>} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/certifications" element={<Certifications />} />
			</Routes>
		</div>
  </BrowserRouter>
);