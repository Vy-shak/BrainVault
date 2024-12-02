import Sideitem from "../Sideitem";
import { CadIcon, Images, HomeIcon, Illustrator, Photoshop, Present, Links, Pdf, Sketchupicon, Other, } from "../../../Icons/Sidebar/Index.ts";

function Sidebar() {

    const sideData = [
        {
            text: "Home",
            icon: <HomeIcon />
        },
        {
            text: "Tweet",
            icon: <CadIcon />
        },
        {
            text: "instagram",
            icon: <Sketchupicon />
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
        <section className="bg-white flex-col flex justify-start items-start">
            {sideData.map((item, index) => (
                <Sideitem key={index} text={item.text} startIcon={item.icon} type="normal" />
            ))}
        </section>
    )
}

export { Sidebar }
