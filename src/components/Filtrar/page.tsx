import * as motion from "motion/react-client"

export const Filtrar = () => {
    return(
        <div>
            <motion.div
                whileTap={{scale: 0.8}}
                className="bg-white rounded-[4px] text-[#262525] px-10 py-1 cursor-pointer font-medium"
            >
                <p>Filter</p>
            </motion.div>
        </div>
    )
}