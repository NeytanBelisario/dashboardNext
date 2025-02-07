import Link from "next/link"
import { Filtrar } from "../Filtrar/page"
import { Pesquisar } from "../Pesquisar/page"
import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"

export const Header = () => {
    const pathName = usePathname()
    const p1Ref = useRef<any>(undefined)
    const p2Ref = useRef<any>(undefined)

    useEffect(() => {
        if(pathName === '/Noticias')
            p2Ref.current.focus()
        else{
            p1Ref.current.focus()
        }
    }, [])

    return (
        <div className="w-full flex text-white py-8 px-10 justify-between">
            <div className="flex font-bold text-[20px]">
                <Link href={'./'} ref={p1Ref} className="mr-1 hover:underline focus:underline focus:outline-none">Dashboard Cards</Link>
                <p>/</p>
                <Link href={'./Noticias'} ref={p2Ref} className="ml-1 hover:underline focus:underline focus:outline-none">Noticias</Link>
            </div>
            <div className="flex">
                <Pesquisar />
                <Filtrar />
            </div>
        </div>
    )
}