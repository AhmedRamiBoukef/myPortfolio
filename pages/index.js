import Head from "next/head";
import { Navbar } from "../components/Navbar/Navbar";
import { Header } from "../components/Header/Header";
import { About } from "../components/About/About";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
      </Head>

      <Navbar/>
      <Header/>
      <About/>
      <div className="h-36 w-2"></div>
    </div>
  );
}
