'use client'
import { usePost } from "@/Hooks/usePost/page";
import { AnimatePresence, motion } from "motion/react"
import React, { useState } from "react";

export const SideBar = () => {
    const { addPost } = usePost();
    const [form, setForm] = useState(false)
    const [titulo, setTitulo] = useState('')
    const [body, setBody] = useState('')
    const [status, setStatus] = useState('')
    const [dateCreate, setDateCreate] = useState()

    const formValid = titulo && body && status;

    const handleAdd = (e:any) => {
        e.preventDefault()
        const data = new Date(Date.now())
        console.log(new Date(Date.now()).toLocaleDateString())
        const posts = {titulo: titulo, descricao: body, status: status, data: data.toLocaleDateString(), hora: new Date().toLocaleTimeString("pt-BR", { hour12: false })}
        addPost(posts)
        setTitulo('')
        setBody('')
        setStatus('')
        setForm(false)
    }

    const handleclickAdd = () => {
        console.log('oi')
        setForm((prev) => !prev);
    }

    return (
        <div className="text-white grid justify-items-center h-[100vh] items-center relative">
            <p className="top-10 absolute text-[20px]">Dashboard Sidebar</p>
            <AnimatePresence initial={false}>
                {form ? (
                    < motion.div
                        className={`w-[80%] 'grid' text-black`}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{
                            duration: 0.4,
                            scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 }
                        }}
                    >
                        <form onSubmit={handleAdd}  className="grid bg-[#1D1D1D] rounded-[3px]">
                            <input type="text" value={titulo} onChange={(e: any) => setTitulo(e.target.value)} placeholder="Título" className="px-6 py-2 mb-1 text-[#1D1D1D] placeholder:text-[#1D1D1D] outline-none" />
                            <input type="text" value={body} onChange={(e: any) => setBody(e.target.value)} placeholder="Conteúdo" className="px-6 py-2 mb-1 text-[#1D1D1D] placeholder:text-[#1D1D1D] outline-none" />
                            <select
                                name="status"
                                className="px-6 py-2 mb-2 text-[#1D1D1D] placeholder:text-[#1D1D1D] outline-none"
                                value={status}
                                onChange={(e: any) => setStatus(e.target.value)}
                            >
                                <option value="" disabled hidden>Status</option>
                                <option value="Pendente">Pendente</option>
                                <option value="Em progresso">Em progresso</option>
                                <option value="Concluído">Concluido</option>
                            </select>
                            <input type="submit" disabled={!formValid} className="px-6 py-2 text-white rounded-[2px] outline outline-1 disabled:bg-[#9f9f9f68] disabled:text-[#9f9f9f81]" placeholder="Enviar" />
                        </form>
                    </motion.div>
                ) : <div></div>}
            </AnimatePresence>
            <motion.div
                onClick={handleclickAdd}
                className="w-[80%] absolute"
                animate={{ y: form ? 200 : 0 }}
                transition={{ type: "spring", stiffness: 110 }}
            >
                <motion.div
                    className="w-full flex items-center border justify-center py-2 rounded-[5px] bg-white text-[#262525] cursor-pointer"
                >
                    <p className="text-[18px] rounded-full leading-[12px] mr-4">+</p>
                    <p>Add Card</p>
                </motion.div>
            </motion.div>
        </div >
    )
}