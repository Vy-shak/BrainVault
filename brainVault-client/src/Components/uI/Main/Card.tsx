import Links from "../../../Icons/Sidebar/Links";
import Delete from "../../../Icons/Delete";
import parse from 'html-react-parser';


interface Cardprops {
    Ctype?: string,
    about: string
    title: string,
    link: string,
}

function Card({ Ctype, about, title, link,
}: Cardprops) {
    return (
        <div className='w-fit space-y-2 h-fit px-2 py-4 bg-white rounded-md shadow-md outline-stone-200'>
            <div className="flex justify-center items-center space-x-3">
                <Links />
                <span className=" font-semibold">{title}</span>
                <Delete />
            </div>
            <div className="text-sm text-left w-full h-9 text-slate-700 overflow-hidden">
                <p>{`${about}`}</p>
            </div>

            <div className="rounded-sm overflow-hidden">
                {parse(link)}
            </div>
            <div className="text-[14px] justify-between flex text-slate-700">
                <span>{"time"}</span>
                <span>{"date"}</span>
            </div>
        </div>
    )
}

export default Card
