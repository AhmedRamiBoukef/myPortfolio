import Head from "next/head";
import { Navbar } from "../components/Navbar/Navbar";
import { Header } from "../components/Header/Header";
import { About } from "../components/About/About";
import { Skills } from "../components/Skills/Skills"; 
import { Expertise } from "../components/Expertise/Expertise";
import { Projects } from "../components/Projects/Projects";

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
      <div className="h-36 w-2"></div>
    </div>
  );
}
