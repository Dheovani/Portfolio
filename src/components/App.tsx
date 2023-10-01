import { AboutMe } from './AboutMe';
import { Certifications } from './Certifications';
import { Skills } from './Skills';
import { Start } from './Start';
import { Projects } from './Projects';
import './styles/App.css'

function App() {

  const scrollToElement = (id: string): void => {
    const element: HTMLElement | null = document.getElementById(id);

    if (element) {
      const headerHeight: number = window.innerHeight / 10;
      const yOffset: number = element.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({ top: yOffset, behavior: 'smooth' });
    }
  };

  const scrowProgress = (): void => {
    const title = document.getElementById('title')!;

    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;

    title?.style.setProperty('--pseudo-width', `${scrolled}%`);
  };
  
  window.addEventListener('scroll', scrowProgress);

  return (
    <>
      <header>
          <h2 id="title">Dheovani Xavier da Cruz</h2>
          <nav className="main menu">
              <ul>
                  <li onClick={() => scrollToElement('start')}>Início</li>
                  <li onClick={() => scrollToElement('about-me')}>Sobre mim</li>
                  <li onClick={() => scrollToElement('certifications')}>Certificados</li>
                  <li onClick={() => scrollToElement('projects')}>Projetos</li>
                  <li onClick={() => scrollToElement('skills')}>Formação</li>
              </ul>
          </nav>
      </header>

      <main>
          <Start />
          <AboutMe />
          <Certifications />
          <Projects />
          <Skills />
      </main>

      <footer>
        <a href="https://www.linkedin.com/in/dheovani-xavier-da-cruz/" target="_blank" rel="nofollow">
          <img id="linkedin" alt="linkedin_icon"
            src="https://img.shields.io/badge/-LinkedIn-0077b5?style=for-the-badge&logo=linkedin&logoColor=white" />
        </a>
        
        <a href="mailto:dheovani_xavier@outlook.com" target="_blank" rel="nofollow">
          <img id="outlook" alt="outlook_icon"
            src="https://img.shields.io/badge/-Outlook-0072C6?style=for-the-badge&logo=microsoft-outlook&logoColor=white" />
        </a>
      </footer>
    </>
  );

}

export default App
