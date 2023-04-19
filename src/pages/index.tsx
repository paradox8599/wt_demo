import { Inter } from "next/font/google";
import Hero from "./components/home/hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <Hero />
    </main>
  );
}
