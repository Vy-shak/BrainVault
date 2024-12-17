import Margin from "../Components/uI/Margin";
import Navbar from "../Components/uI/Main/Navbar";
import { edge } from "../Components/uI/Constant";
import { useRef } from "react";
import InputAuth from "../Components/uI/InputAuth";
import Button from "../Components/uI/Button";
function Signup() {
    const fullnameRef = useRef();
    return (
        <section className='w-screen h-fit bg-black overflow-x-clip justify-between flex items-start'>
            <Margin border="right" />
            <div className="flex flex-col w-full items-start justify-center">
                <Navbar />
                <div className={`${edge.bottom} w-full flex flex-col justify-center items-center h-fit px-6 py-2`}>
                    <h5 className="text-white w-fit  flex-col text-3xl font-bold">Get your Own Vault </h5>
                    <h5 className="text-white w-fit text-xl flex-col font-bold">by Becoming part of the family </h5>

                </div>
                <div className="w-full h-fit px-40 space-x-4 border-neutral-800">
                    <div className="flex flex-col px-12 py-12 rounded-lg w-full bg-neutral-900 mt-9">
                        <div className="mb-7">
                            <h5 className="text-2xl font-Kanit font-bold text-white">Welcome to BrainVault</h5>
                            <p className=" text-neutral-300">Login if you have already an account</p>
                        </div>
                        <div className="flex justify-between items-center w-full space-x-8">
                            <InputAuth placeholder="firstname" reference={fullnameRef} errMsg={"error"} />
                            <InputAuth placeholder="lastname" reference={fullnameRef} errMsg={"error"} />
                        </div>
                        <div className="flex justify-center flex-col items-center">
                            <InputAuth placeholder="Username" reference={fullnameRef} errMsg={"error"} />
                            <InputAuth placeholder="Password" reference={fullnameRef} errMsg={"error"} />
                            <InputAuth placeholder="Confirm password" reference={fullnameRef} errMsg={"error"} />
                        </div>
                        <div className="w-full px-24 mt-4">
                            <Button variant="primary" text="Signup" size="full" />
                        </div>
                    </div>
                    <div className="bg-black w-full h-48">
                        bottom
                    </div>
                </div>
            </div>
            <Margin border="left" />
        </section>
    )
}

export default Signup
