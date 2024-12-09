import Links from "../../../Icons/Sidebar/Links";
import Delete from "../../../Icons/Delete";
import parse from 'html-react-parser';


interface Cardprops {
    Ctype?: string,
    about: string
    title: string,
    link: string,
    id: number | undefined,
    setId: (val: number) => any
}

function Card({ Ctype, id, setId, about, title, link,
}: Cardprops) {

    const Handledelete = () => (
        setId(id)
    )
    return (
        <div className='w-fit flex flex-col justify-start items-start h-fit px-2 py-4 bg-white rounded-md shadow-md outline-stone-200'>
            <div className="flex justify-between w-full items-center space-x-3">
                <span className=" font-semibold">{title}</span>
                <div onClick={Handledelete} className="w-fit h-fit">
                    <Delete />
                </div>
            </div>
            <div className="text-sm text-left w-full h-9 text-slate-700 overflow-hidden">
                <p className="text-[14px]">{`${about}`}</p>
            </div>

            <div className="rounded-sm overflow-hidden">
                <iframe
                    src={`${link}`}
                    title="YouTube video player"
                    style={{ width: "100%", height: "100%", minHeight: "0px", minBlockSize: "0px" }}
                    referrerpolicy=""
                    allowfullscreen>
                </iframe>
            </div>
            <div className="text-[14px] justify-between flex text-slate-700">
                <span>{"time"}</span>
                <span>{"date"}</span>
            </div>
        </div>
    )
}

export default Card
