'use client'

import { CardNoticia } from "@/components/CardNoticia/page";
import { Header } from "@/components/Header/page";
import { usePost } from "@/Hooks/usePost/page";

export default function Noticias(){
    const { mudarTema, tema } = usePost()

    return(
        <section className="bg-[#262525] max-w-[100vw] min-h-[100vh]">
            <Header/>
            <div className="w-[80%] grid bg-[#1D1D1D] h-fit p-10 pt-16 mx-auto grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] gap-3 rounded relative">
                <div className="absolute justify-self-center text-white top-[1rem] flex flex-wrap justify-center font-bold">
                    <p className={`cursor-pointer ${tema === 'geral' ? 'underline' : 'underline-offset-0'}`} onClick={() => mudarTema('geral')}>Geral</p>
                    <p className="mx-1">/</p>
                    <p className={`cursor-pointer ${tema === 'esportes' ? 'underline' : 'underline-offset-0'}`} onClick={() => mudarTema('esportes')}>Esportes</p>
                    <p className="mx-1">/</p>
                    <p className={`cursor-pointer ${tema === 'tecnologia' ? 'underline' : 'underline-offset-0'}`} onClick={() => mudarTema('tecnologia')}>Tecnologia</p>
                    <p className="mx-1">/</p>
                    <p className={`cursor-pointer ${tema === 'entretenimento' ? 'underline' : 'underline-offset-0'}`} onClick={() => mudarTema('entretenimento')}>Entretenimento</p>
                </div>
                <CardNoticia/>
            </div>
        </section>
    )
}