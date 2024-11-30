import Sideitem from "../Components/uI/Sideitem";
import { CadIcon, Images, Illustrator, Photoshop, Present, Links, Pdf, Sketchupicon, Other, } from "../Icons/Sidebar/Index.ts";

function Home() {

    const sideData = [
        {
            text: "Cad blocks",
            icon: <CadIcon />
        },
        {
            text: "Cad blocks",
            icon: <Sketchupicon />
        },
        {
            text: "Cad blocks",
            icon: <Pdf />
        },
        {
            text: "Cad blocks",
            icon: <Illustrator />
        },
        {
            text: "Cad blocks",
            icon: <Present />
        },
        {
            text: "Cad blocks",
            icon: <Other />
        },
        {
            text: "Cad blocks",
            icon: <Photoshop />
        },
        {
            text: "Cad blocks",
            icon: <Images />
        }
    ]
    return (
        <section className="bg-white">
            {sideData.map((item, index) => (
                <Sideitem key={index} text={item.text} startIcon={item.icon} type="normal" />
            ))}
        </section>
    )
}

export default Home
