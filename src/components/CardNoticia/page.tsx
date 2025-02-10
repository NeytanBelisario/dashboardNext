import { usePost } from "@/Hooks/usePost/page"
import { motion } from "motion/react"
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
                if (!item.title || !item.urlToImage) return null;

                return (
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        layout
                        key={index}
                        className="p-2 bg-[#fffedb] rounded-[3px] relative text-[#ffffff]"
                    >
                        <motion.img
                            layout
                            src={item.urlToImage}
                            alt='Imagem Noticia'
                            className="w-full h-[200px] object-cover outline outline-1 outline-[#1D1D1D]"
                        />
                        <div
                            className="absolute h-[200px] bg-[#000000ba] top-[0.5rem] right-[0.5rem] left-[0.5rem]"
                        >
                        </div>

                        <div className="mt-2 px-2 leading-[120%] font-sans grid gap-4 absolute bottom-3 w-[95%]">
                            <p className="font-semibold text-[20px] text-left">{item.title}</p>
                            {/* <p className="text-justify text-[15px] font-normal">{item.description}</p>
                            <div>
                                <p>Autor: {item.author}</p>
                                <p>Data: {data.toLocaleDateString()}</p>
                            </div> */}
                        </div>
                    </motion.div>
                )
            })}
        </>

    )
}