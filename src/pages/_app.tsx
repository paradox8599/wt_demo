import Image from "next/image";
import { Inter } from "next/font/google";
import PopUp from "./components/popup";
import R from "react";
import Header from "./components/header/header";
import NavMenu from "./components/nav_menu";
import { initialState, reducer, StateContext } from "@/state";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { State } from "@/type";

export default function App({ Component, pageProps }: AppProps) {
  const [state, dispatch] = R.useReducer(reducer, initialState);

  // Demo pop up
  const [msg, setMsg] = R.useState<string>("");

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <PopUp>{msg}</PopUp>

      {/* Demo pop up */}
      <button
        onClick={() => {
          setMsg("Pop up message here!");
          setTimeout(() => {
            setMsg("");
          }, 3000);
        }}
        hidden={msg ? true : false}
        className={`fixed top-0 left-0 rounded-md m-1 py-1 px-2 bg-gray-500 hover:bg-gray-700 text-white text-[1em]`}
        type="button"
      >
        Pop
      </button>
      <div className="sticky top-0 z-10">
        {/* Header */}
        <Header />
        {/* Nav bar */}
        <NavMenu />
      </div>
      {/* Body */}
      <div
        className={[
          state.blurBackground ? "filter blur brightness-50" : "",
        ].join(" ")}
      >
        <Component {...pageProps} />
      </div>
    </StateContext.Provider>
  );
}
