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

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
      </Head>

      <Navbar/>
      <Header/>
      <About2 />
      <Expertise/>
      <Skills/>
      <Projects2 />
      <Contact/>
      <Footer />
    </div>
  );
}
