import Sideitem from "../Sideitem";
import { useState } from "react";
import { Youtube, Close, Images, HomeIcon, Illustrator, Photoshop, Present, Links, Pdf, Instaicon, Other, } from "../../../Icons/Sidebar/Index.ts";

function Sidebar() {
    const [minimize, setMinimize] = useState(false);

    const handleMinimize = () => {
        setMinimize((prev) => !prev)
    }

    const sideData = [
        {
            text: "Home",
            icon: <HomeIcon />,
            id: 0
        },
        {
            text: "Youtube",
            icon: <Youtube />
        },
        {
            text: "instagram",
            icon: <Instaicon />
        },
        {
            text: "Youtube",
            icon: <Pdf />
        },
        {
            text: "websites",
            icon: <Illustrator />
        },
        {
            text: "canva",
            icon: <Present />
        },
        {
            text: "Drive",
            icon: <Other />
        },
        {
            text: "any",
            icon: <Photoshop />
        },
        {
            text: "Links",
            icon: <Links />
        },
        {
            text: "Images",
            icon: <Images />
        }
    ]

    return (
        <section style={{ transition: "all 200ms ease-out" }} className={`bg-white ${minimize ? "w-12" : "w-40"} transition duration-150 ease-out flex-col flex justify-start items-start`}>
            <div onClick={handleMinimize} className="flex w-full justify-end items-center h-fit pr-3">
                <Close />
            </div>
            <div className="m-0 w-full">
                {sideData.map((item, index) => (
                    <Sideitem key={index} minimize={minimize} text={item.text} startIcon={item.icon} type="normal" />
                ))}
            </div>
        </section>
    )
}

export { Sidebar }
