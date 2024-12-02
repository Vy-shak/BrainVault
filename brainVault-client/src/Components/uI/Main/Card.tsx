import Links from "../../../Icons/Sidebar/Links";
import Delete from "../../../Icons/Delete";



interface Cardprops {
    Ctype: string,
    title: string,
    link: string,
    time: string,
    date: string
}

function Card(props: Cardprops) {
    return (
        <div className='w-fit space-y-2 h-fit px-2 py-4 bg-white rounded-md shadow-md outline-stone-200'>
            <div className="flex justify-center items-center space-x-3">
                <Links />
                <span className=" font-semibold">{props.title}</span>
                <Delete />
            </div>
            <div className="text-sm text-left w-full h-9 text-slate-700 overflow-hidden">
                <p>hello heknkanfnaf,fn,fn,n</p>
            </div>

            <div className="rounded-sm overflow-hidden">
                {/* @ts-ignore */}
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/PI6VA8ZNL-0?si=F5qlqV_t-vH7MGZm" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="text-[14px] justify-between flex text-slate-700">
                <span>{props.time}</span>
                <span>{props.date}</span>
            </div>
        </div>
    )
}

export default Card
