import { Sidebar } from "../Components/uI/Main/Sidebar";
import { useEffect, useState } from "react";
import Button from "../Components/uI/Button";
import IconShare from "../Icons/Share";
import Card from "../Components/uI/Main/Card";
import Modal from "../Components/uI/Main/Modal";
import Addfile from "../Components/uI/addfile";
import CardAll from "../Components/uI/Main/CardAll";
import { ShareModel } from "../Icons/Sidebar/Index";
import axios, { all } from "axios";
import { Outlet } from "react-router-dom";



function Home() {
    const [open, setOpen] = useState(false);
    const [share, setShare] = useState(false);

    // useEffect(() => (
    //     function s Callme() {
    //         const token = localStorage.getItem("token");
    //         const allData = axios.get("http://localhost:3000/api/v1/content/show", {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'authtoken': token
    //             }
    //         });
    //         console.log(allData)
    //     }
    // ), []);



    function openOrclose() {
        setOpen((prev) => !prev);
        setShare(false)
    }

    function openOnly() {
        setOpen(true)
        setShare(false)
    }

    function handleShare() {
        setShare((prev) => !prev)
        setOpen(false)
    }

    return (
        <section className="w-screen h-screen flex">
            <ShareModel share={share} setShare={handleShare} />
            <Modal open={open} setOpen={openOrclose} />
            {/* <span className="absolute left-52 top-10 font-semibold text-2xl">Hello Yshak, Welcome!</span> */}
            <div className="w-fit  h-full flex justify-start items-center bg-white">
                <Sidebar />
            </div>
            <Outlet />
            <Button handleClick={handleShare} variant="primary" size="sm" text="Share brain" defaultCss="absolute top-4 right-6 " startIcon={<IconShare />} />
            <Addfile setOpen={openOnly} />

        </section>
    )
}

export default Home
