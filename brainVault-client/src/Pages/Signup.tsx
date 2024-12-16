import Margin from "../Components/uI/Margin";
import Navbar from "../Components/uI/Main/Navbar";
import { edge } from "../Components/uI/Constant";
import { span } from "motion/react-client";
function Signup() {
    return (
        <section className='w-screen h-screen bg-black  justify-between flex items-start'>
            <Margin border="right" />
            <div className="flex flex-col w-full items-start justify-center">
                <Navbar />
                <div className={`${edge.bottom} w-full flex justify-center items-center h-fit px-6 py-2`}>
                    <h5 className="text-white w-fit text-xl flex-col font-bold">Get your Own Vault {<span>by Becoming part of the family </span>}</h5>
                </div>
            </div>
            <Margin border="left" />
        </section>
    )
}

export default Signup
