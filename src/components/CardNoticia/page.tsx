import { usePost } from "@/Hooks/usePost/page"
import Image from "next/image"
import { useEffect } from "react"

export const CardNoticia = () => {
    const { postsNoticias } = usePost()

    useEffect(() => {
        console.log(postsNoticias)
    }, [])

    return (
        <>
            {postsNoticias.map((item: any, index: any) => {
                const data = new Date(item.publishedAt)
            

                return (
                    <div key={index} className="p-2 bg-[white] rounded-[3px]">
                        <img
                            src={item.urlToImage}
                            alt='Imagem Noticia'
                            className="w-full h-[200px] object-cover outline outline-1 outline-[#1D1D1D]"
                        />
                        <div className="mt-2 px-2 leading-[120%] font-sans grid gap-4">
                            <p className="font-semibold text-[20px] text-justify">{item.title}</p>
                            <p className="text-justify text-[15px] font-normal">{item.description}</p>
                            <div>
                                <p>Autor: {item.author}</p>
                                <p>Data: {data.toLocaleDateString()}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>

    )
}