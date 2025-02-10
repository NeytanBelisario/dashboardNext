import Link from "next/link"
import { Filtrar } from "../Filtrar/page"
import { Pesquisar } from "../Pesquisar/page"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

export const Header = () => {
    const [page, setPage] = useState('Dashboard')
    const pathName = usePathname()
    const p1Ref = useRef<any>(undefined)
    const p2Ref = useRef<any>(undefined)

    useEffect(() => {
        if(pathName === '/Noticias')
            setPage('Noticias')
        else{
            setPage('Dashboard')
        }
    }, [])

    return (
        <div className="w-full flex text-white py-8 px-10 justify-between">
            <div className="flex font-bold text-[20px]">
                <Link href={'./'} ref={p1Ref} className={`mr-1 hover:underline ${page === 'Dashboard' ? 'underline' : 'underline-offset-0'}`}>Dashboard Cards</Link>
                <p>/</p>
                <Link href={'./Noticias'} ref={p2Ref} className={`ml-1 hover:underline focus:underline focus:outline-none ${page === 'Noticias' ? 'underline' : 'underline-offset-0'}`}>Noticias</Link>
            </div>
            <div className="flex">
                <Pesquisar />
                <Filtrar />
            </div>
        </div>
    )
}