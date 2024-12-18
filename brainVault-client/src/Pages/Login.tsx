import FormLogin from "../Components/uI/Main/LoginForm";
import Margin from "../Components/uI/Margin";
import Navbar from "../Components/uI/Main/Navbar";
import { edge } from "../Components/uI/Constant";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useState } from "react";
import InputAuth from "../Components/uI/InputAuth";
import Button from "../Components/uI/Button";
import axios from "axios";
import SuccessCard from "../Components/uI/SuccessCard";


function Login() {
    const [isSignup, setSignup] = useState(false);
    const navigate = useNavigate();

    const firstnameRef = useRef<HTMLInputElement>(null);
    const usernameref = useRef<HTMLInputElement>(null);
    const lastnameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmpassRef = useRef<HTMLInputElement>(null);
    return (
        <section className='w-screen flex-grow h-screen overflow-y-auto bg-black overflow-x-clip justify-between flex items-start'>
            <Margin border="right" />
            <div className="flex flex-col w-full items-start justify-center">
                <Navbar />
                <div className={`${edge.bottom} w-full flex flex-col justify-center items-center h-fit px-6 py-2`}>
                    <h5 className="text-white w-fit  flex-col text-3xl font-bold">Get your Own Vault </h5>
                    <h5 className="text-white w-fit text-xl flex-col font-bold">by Becoming part of the family </h5>

                </div>
                <div className="w-full h-fit px-40 space-x-4 border-neutral-800">
                    <div className="flex flex-col px-12 py-12 rounded-lg w-full bg-neutral-900 mt-9">
                        {isSignup && <SuccessCard />}
                        <div className="mb-7">
                            <h5 className="text-2xl font-Kanit font-bold text-white">Welcome to BrainVault</h5>
                            <p className=" text-neutral-300">Login if you have already an account</p>
                        </div>
                        <div className="flex justify-center flex-col items-center">
                            <InputAuth placeholder="Username" reference={usernameref} errMsg={"error"} />
                            <InputAuth placeholder="Password" reference={passwordRef} errMsg={"error"} />
                            <InputAuth placeholder="Confirm password" reference={confirmpassRef} errMsg={"error"} />
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

export default Login
