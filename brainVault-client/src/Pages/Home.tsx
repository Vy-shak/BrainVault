import { Sidebar } from "../Components/uI/Main/Sidebar";
import Button from "../Components/uI/Button";
import IconShare from "../Icons/Share";
import Card from "../Components/uI/Main/Card";
import Modal from "../Components/uI/Main/Modal";


function Home() {

    return (
        <section className="w-screen h-screen flex">
            <Modal open={true} />
            <div className="w-40  h-full flex justify-start items-center bg-white">
                <Sidebar />
            </div>
            <Card title="anytitle" link="your link" Ctype="youtube" />
            <Button variant="primary" size="sm" text="Share brain" defaultCss="absolute top-4 right-6 " startIcon={<IconShare />} />
        </section>
    )
}

export default Home
