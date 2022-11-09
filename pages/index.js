import Head from "next/head";
import { Navbar } from "../components/Navbar/Navbar";
import { Header } from "../components/Header/Header";
import { About } from "../components/About/About";
import { Skills } from "../components/Skills/Skills"; 
import { Expertise } from "../components/Expertise/Expertise";
import { Projects } from "../components/Projects/Projects";
import { Contact } from "../components/Contact/Contact";
import { Footer } from "../components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
      </Head>

      <Navbar/>
      <Header/>
      <About/>
      <Expertise/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer />
    </div>
  );
}
