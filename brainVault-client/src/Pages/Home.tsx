import { Sidebar } from "../Components/uI/Main/Sidebar";
import { useEffect, useState } from "react";
import Button from "../Components/uI/Button";
import IconShare from "../Icons/Share";
import Card from "../Components/uI/Main/Card";
import Modal from "../Components/uI/Main/Modal";
import Addfile from "../Components/uI/addfile";
import CardAll from "../Components/uI/Main/CardAll";
import { ShareModel } from "../Icons/Sidebar/Index";
import axios, { all } from "axios";
import { Outlet } from "react-router-dom";



function Home() {
    const [linkData, setLinkdata] = useState();
    const [open, setOpen] = useState(false);
    const [share, setShare] = useState(false);
    const [id, setid] = useState(false);
    console.log(linkData)
    console.log(id)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = await localStorage.getItem('token');
                const response = await axios.get('http://localhost:3000/api/v1/content/show', {
                    headers: {
                        'Content-Type': 'application/json',
                        'token': token
                    }
                });
                const data = await response.data.details;
                if (data) {
                    setLinkdata(data)
                }
            } catch (error) {
                console.log("fetching error", error)
            }
        }
        fetchData()
    }, [open, id]);

    useEffect(() => {
        const deleteCard = async () => {
            if (id) {
                try {
                    const token = await localStorage.getItem('token');
                    const response = await axios.post('http://localhost:3000/api/v1/content/delete', {
                        contentId: id
                    }, {
                        headers: {
                            'Content-Type': 'application/json',
                            'token': token
                        }
                    });
                } catch (error) {
                    console.log("fetching error", error)
                }
            }
        }
        deleteCard()
    }, [id]);





    function openOrclose() {
        setOpen((prev) => !prev);
        setShare(false)
    }

    function openOnly() {
        setOpen(true)
        setShare(false)
    }

    function handleShare() {
        setShare((prev) => !prev)
        setOpen(false)
    }

    return (
        <section className="w-screen  pl-2 pt-2 items-start h-full overflow-x-hidden flex">
            <ShareModel share={share} setShare={handleShare} />
            <Modal open={open} setOpen={openOrclose} />
            {/* <span className="absolute left-52 top-10 font-semibold text-2xl">Hello Yshak, Welcome!</span> */}
            <div className="flex-col">
                <Sidebar />
                <div className="h-screen rounded-md -mt-2 w-full bg-white">
                </div>
            </div>
            <section className="grid grid-cols-4 w-full h-fit bg-gray-200 pt-24 px-3 grid-rows-3 gap-x-2 gap-y-2">
                {linkData && linkData.map((item: any, Index: number) => (
                    <Card id={item._id} setId={setid} title={item.linkname} about={item.about} link={item.link} />
                ))}
            </section>
            <Button handleClick={handleShare} variant="primary" size="sm" text="Share brain" defaultCss="fixed top-4 right-6 " startIcon={<IconShare />} />
            <Addfile setOpen={openOnly} />

        </section >


    )
}

export default Home
