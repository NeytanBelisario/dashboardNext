'use client'

import { CardNoticia } from "@/components/CardNoticia/page";
import { Header } from "@/components/Header/page";

export default function Noticias(){

    return(
        <section className="bg-[#262525] max-w-[100vw] min-h-[100vh]">
            <Header/>
            <div className="w-[80%] grid bg-[#1D1D1D] h-fit p-10 mx-auto grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-3 rounded">
                <CardNoticia/>
            </div>
        </section>
    )
}