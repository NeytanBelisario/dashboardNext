'use client'
import { Cards } from "./components/Cards/page";
import { Header } from "./components/Header/page";
import { SideBar } from "./components/SideBar/page";
import React from "react";

export default function Home() {
  return (
    <section className="bg-[#262525] max-w-[100vw] flex">
      <div className="w-[20vw] border-r border-solid border-white">
        <SideBar/>
      </div>
      <div className="w-[80vw] relative">
        <Header/>
        <div>
          <Cards/>
        </div>
      </div>
    </section>
  );
}
