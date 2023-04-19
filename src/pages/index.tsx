import { Inter } from "next/font/google";
import Hero from "./components/home/hero";
import Intro from "./components/home/intro";
import NavMenu from "./components/nav_menu";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      {/* Nav bar */}
      <NavMenu />
      <Hero />
      <Intro />
    </main>
  );
}
