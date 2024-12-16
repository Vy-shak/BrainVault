import { Sidebar } from "../Components/uI/Main/Sidebar";
import { useState } from "react";
import Button from "../Components/uI/Button";
import IconShare from "../Icons/Share";
import Modal from "../Components/uI/Main/Modal";
import Addfile from "../Components/uI/addfile";
import { ShareModel } from "../Icons/Sidebar/Index";
import { Outlet } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { modalOpenatom } from "../Atom";


function Home() {
    const [share, setShare] = useState(false);
    const open = useRecoilValue(modalOpenatom);
    const setOpen = useSetRecoilState(modalOpenatom);

    // console.log(linkData)
    // console.log(id)




    function openOnly() {
        setOpen(true)
        setShare(false)
    }

    function handleShare() {
        setShare((prev) => !prev)
        setOpen(false)
    }

    return (
        <section className="w-screen pt-2 items-start h-full overflow-x-hidden flex">
            <div className="fixed top-0 w-full bg-white h-7">Navbar</div>
            <ShareModel share={share} setShare={handleShare} />
            <Modal />
            {/* <span className="absolute left-52 top-10 font-semibold text-2xl">Hello Yshak, Welcome!</span> */}
            <div className="flex-col mt-12">
                <Sidebar />
                <div className="h-screen rounded-md -mt-2 w-full bg-white">
                </div>
            </div>
            <Outlet />
            <Button handleClick={handleShare} variant="primary" size="sm" text="Share brain" defaultCss="fixed top-10 right-6 " startIcon={<IconShare />} />
            <Addfile setOpen={openOnly} />

        </section >
    )
}

export default Home
