import Sideitem from "../Sideitem";
import { CadIcon, Images, Illustrator, Photoshop, Present, Links, Pdf, Sketchupicon, Other, } from "../../../Icons/Sidebar/Index.ts";

function Sidebar() {

    const sideData = [
        {
            text: "Cad blocks",
            icon: <CadIcon />
        },
        {
            text: "Sketchup blocks",
            icon: <Sketchupicon />
        },
        {
            text: "Pdf",
            icon: <Pdf />
        },
        {
            text: "Illustrator",
            icon: <Illustrator />
        },
        {
            text: "Presentation",
            icon: <Present />
        },
        {
            text: "Other",
            icon: <Other />
        },
        {
            text: "Photoshop",
            icon: <Photoshop />
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
