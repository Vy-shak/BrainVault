import { label } from "motion/react-client"
import { edge } from "../Constant"
import { motion } from "motion/react"


interface navt {
    left: string[],
    right: string[]
}

const Navitems: navt = {
    left: ['Home', 'About us', 'pricing'],
    right: ['Login', 'Signup']
}

function Navbar() {
    return (
        <section className={`${edge.bottom} px-3 w-full h-12 flex flex-col justify-center items-top text-white`}>
            <div >
                <div className="flex justify-between h-full w-full items-center">
                    <div className="text-white space-x-2 w-fit h-full  font-Kanit flex">
                        {Navitems.left.map((item: string) => (
                            <label className="hover:text-Bgreen-700 text-sm">{item}</label>
                        ))}
                    </div>
                    <div className="text-white space-x-2 w-fit h-full  justify-center items-center font-Kanit font-normal font-sm flex">
                        {Navitems.right.map((item: string) => (
                            <label className="hover:text-Bgreen-700 text-sm">{item}</label>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navbar
