import Sideitem from "../Sideitem";
import { Children, useState } from "react";
import { Youtube, Close, Images, HomeIcon, Illustrator, Photoshop, Present, Links, Pdf, Instaicon, Other, } from "../../../Icons/Sidebar/Index.ts";
import { NavLink } from "react-router-dom";

function Sidebar() {
    const [sideData, setSideData] = useState([
        {
            name: "name0",
            level: 0,
            links: ["link0.1"],
            child: [
                {
                    name: "name1",
                    level: 1,
                    links: ["link1.0", "link1.1"],
                    child: [
                        {
                            name: "name2",
                            level2: 2,
                            links: ["link2.0", "link2.1"],
                            child: [],
                        },
                    ],
                },
            ],
        },
        {
            name: "name00",
            level: 0,
            links: ["link0.1"],
            child: []
        }

    ])
    const [minimize, setMinimize] = useState(false);

    const handleMinimize = () => {
        setMinimize((prev) => !prev)
    }


    return (
        <section style={{ transition: "all 200ms ease-out" }} className={`bg-gray-950 ${minimize ? "w-12" : "w-40"} transition flex-grow pt-3 mt-12 duration-150 ease-out h-full rounded-md flex-col flex justify-start items-start`}>
            <div onClick={handleMinimize} className="flex w-full justify-end items-center h-full rounded-md pr-3">
                <Close />
            </div>
            <ul className=" w-full h-full py-3">
                <Sideitem minimize={minimize} data1={sideData} type="normal" />
            </ul>
        </section>
    )
}

export { Sidebar };
