

interface inputType {
    title: string,
    Size: "medium" | "normal"
}

const Constants = {
    size: {
        medium: "h-16 text-start items-start flex justify-start",
        normal: "h-10"
    }
}

function Input({ title, Size }: inputType) {
    return (
        <div className='flex flex-col justify-start items-start w-full m-0 p-0'>
            <label className="block mb-2 text-sm font-normal text-gray-700 ">{title}</label>
            <input type="text" id="first_name" className={`${Constants.size[Size]} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`} placeholder={"write here"} required />
        </div>
    )
}

export default Input
