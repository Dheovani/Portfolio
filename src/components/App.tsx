import { Certifications } from './Certifications';
import { Skills } from './Skills';
import './styles/App.css'

function App() {
  const scrollToElement = (id: string): void => {
    location.href = `#${id}`;
  };

  const scrowProgress = (): void => {
    const title = document.getElementById('title')!;

    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;

    title?.style.setProperty('--pseudo-width', `${scrolled}%`);
  };
  
  window.addEventListener('scroll', () => scrowProgress());

  return (
    <>
      <header>
          <h2 id="title">Dheovani Xavier da Cruz</h2>
          <nav className="main menu">
              <ul>
                  <li onClick={() => scrollToElement('start')}>Início</li>
                  <li onClick={() => scrollToElement('about-me')}>Sobre mim</li>
                  <li onClick={() => scrollToElement('certifications')}>Certificados</li>
                  <li onClick={() => scrollToElement('skills')}>Formação e experiência</li>
              </ul>
          </nav>
      </header>
      <main>
          <section id="start"></section>
          <section id="about-me"></section>
          <Certifications />
          <Skills />
      </main>
      <footer></footer>
    </>
  )
}

export default App
