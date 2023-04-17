import Image from "next/image";
import { Inter } from "next/font/google";
import PopUp from "./components/popup";
import R from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [msg, setMsg] = R.useState<string>("123");

  return (
    <main className="">
      <PopUp>{msg}</PopUp>
      <button
        onClick={() => {
          setMsg("Pop up!");
          setTimeout(() => {
            setMsg("");
          }, 3000);
        }}
        className="fixed top-0 left-0"
        type="button"
      >
        Pop
      </button>
    </main>
  );
}
