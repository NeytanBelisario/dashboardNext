import { usePost } from "@/app/usePost/page"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useRef, useState } from "react"

export const Cards = () => {
    const { posts, removePost } = usePost()

    useEffect(() => {
        console.log(posts)
    }, [posts])

    const [isOpen, setIsOpen] = useState(false)
    const [indexIsOpen, setIndexIsOpen] = useState(0)

    return (
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] p-10 gap-[10px]">
            {posts.map((item: any, index: any) => {
                return (
                    <AnimatePresence key={index} initial={false}>
                        <div className={`${isOpen && indexIsOpen === index ? 'fixed w-[100vw] h-[100%] top-0 left-0 flex items-center justify-center bg-[#00000098] z-50' : 'z-10 static'}  `} 
                        onClick={() => {
                            setIsOpen(!isOpen);
                            setIndexIsOpen(index)
                        }}>
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                                layout='position'
                                transition={{
                                    duration: 0.4,
                                    scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 }
                                }}
                                className={`text-white bg-[#1D1D1D] rounded-[4px] ${(isOpen && indexIsOpen == index) ? 'absolute w-[40%] h-[auto] outline outline-1 outline-[#c0bebe] grid items-center px-7 py-6' : 'p-6 static'}`}
                            >
                                <motion.p layout="position" className={`mb-4 text-[26px] font-extrabold ${item.status === 'Concluído' ? 'text-[#35842f]' : item.status === 'Pendente' ? 'text-[#C68E3C]' : 'text-[#5940d7]'}`}>{item.titulo}</motion.p>
                                {isOpen && indexIsOpen === index ? (
                                    <motion.p layout="position" className="mb-4 text-justify">{item.descricao}</motion.p>
                                ) : null}
                                <motion.p layout="position" className="mb-1"><span className="font-bold">Status:</span> {item.status}</motion.p>
                                <motion.p layout="position"><span className="font-bold" >Criado em:</span> {item.data} - {item.hora}</motion.p>
                                <div className={`flex w-full justify-between items-center mt-[30px] ${(isOpen && indexIsOpen == index) ? 'static' : 'hidden'}`}>
                                    <motion.div className="w-[25%] text-center py-1 outline outline-2 rounded-sm font-semibold outline-neutral-400 text-neutral-400 cursor-pointer">Edit</motion.div>
                                    <motion.div className="w-[25%] py-1 outline outline-2 outline-red-600 font-semibold text-red-600 rounded-sm text-center cursor-pointer" onClick={() => removePost(index)}>Remove</motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </AnimatePresence>
                )
            })}
        </div>
    )
}