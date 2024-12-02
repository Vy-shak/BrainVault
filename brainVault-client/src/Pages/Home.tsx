import { Sidebar } from "../Components/uI/Main/Sidebar";
import Button from "../Components/uI/Button";
import IconShare from "../Icons/Share";
import Card from "../Components/uI/Main/Card";


function Home() {

    return (
        <section className="w-screen h-screen flex">
            <div className="w-40  h-full flex justify-start items-center bg-white">
                <Sidebar />
            </div>
            <Card />
            <Button variant="primary" size="sm" text="Share brain" defaultCss="absolute top-4 right-6 " startIcon={<IconShare />} />
        </section>
    )
}

export default Home
