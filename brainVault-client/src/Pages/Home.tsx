import { Sidebar } from "../Components/uI/Main/Sidebar";
import { useState } from "react";
import Button from "../Components/uI/Button";
import IconShare from "../Icons/Share";
import Card from "../Components/uI/Main/Card";
import Modal from "../Components/uI/Main/Modal";
import Addfile from "../Components/uI/addfile";
import CardAll from "../Components/uI/Main/CardAll";



function Home() {
    const [open, setOpen] = useState(false);

    function openOrclose() {
        setOpen((prev) => !prev)
    }

    function openOnly() {
        setOpen(true)
    }

    return (
        <section className="w-screen h-screen flex">
            <Modal open={open} setOpen={openOrclose} />
            <div className="w-fit  h-full flex justify-start items-center bg-white">
                <Sidebar />
            </div>
            <CardAll />
            <Button variant="primary" size="sm" text="Share brain" defaultCss="absolute top-4 right-6 " startIcon={<IconShare />} />
            <Addfile setOpen={openOnly} />

        </section>
    )
}

export default Home
