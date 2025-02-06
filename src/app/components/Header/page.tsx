import { Filtrar } from "../Filtrar/page"
import { Pesquisar } from "../Pesquisar/page"

export const Header = () => {

    return(
        <div className="w-full flex text-white py-8 px-10 justify-between">
            <p className="font-bold text-[20px]">Dashboard Cards</p>
            <div className="flex">                
                <Pesquisar/>
                <Filtrar/>
            </div>
        </div>
    )
}