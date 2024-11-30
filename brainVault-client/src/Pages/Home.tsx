import { Sidebar } from "../Components/uI/Main/Sidebar"

function Home() {

    return (
        <section className="w-screen h-screen">
            <div className="w-40 h-full flex justify-center items-center bg-white">
                <Sidebar />
            </div>
        </section>
    )
}

export default Home
