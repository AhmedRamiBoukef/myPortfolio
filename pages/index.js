import Head from "next/head";
import { Navbar } from "../components/Navbar/Navbar";
import { Header } from "../components/Header/Header";
import { Skills } from "../components/Skills/Skills";
import { Expertise } from "../components/Expertise/Expertise";
import { Projects } from "../components/Projects/Projects";
import { Contact } from "../components/Contact/Contact";
import { Footer } from "../components/Footer/Footer";
import { About2 } from "../components/About/About2";
import { Projects2 } from "../components/Projects/Projects2";
import Drawer from "../components/Navbar/Drawer";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Head>
        <meta name="title" content="Ahmed Rami Boukef" />
        <meta
          name="description"
          content="Passionate full-stack web developer delivering high-quality solutions. Seeking growth-oriented opportunities to showcase innovative expertise."
        />
        <meta
          name="keywords"
          content="Full-stack web development, Front-end development, Back-end development, Responsive web design, HTML5, CSS3, JavaScript, React.js, Node.js, Express.js, MongoDB, MySQL, PHP, Laravel, WordPress, API integration, Git, Agile development, UI/UX design, Cross-browser compatibility, Mobile-first approach, Performance optimization, Web accessibility, Test-driven development (TDD), Problem-solving, Team collaboration, Project management, Continuous learning, Innovation"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <title>Ahmed Rami Boukef</title>
      </Head>

      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="md:flex flex-col justify-around items-center gap-6 mr-6 hidden">
          {["Home", "About", "Expertise", "Skills", "Projects", "Contact"].map(
            (elem) => (
              <a
                key={elem}
                href={`#${elem}`}
                className="font-semibold hover:text-[rgba(0,0,0,0.65)]"
              >
                {elem}
              </a>
            )
          )}
        </div>
      </Drawer>
      <Header />
      <About2 />
      <Expertise />
      <Skills />
      <Projects2 />
      <Contact />
      <Footer />
    </div>
  );
}
