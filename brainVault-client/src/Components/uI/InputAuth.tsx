
import { memo } from 'react';

interface errMsgt {
    phoneNo: Array<string> | never[]
    username: Array<string> | never[]
    password: Array<string> | never[]
    fullname: Array<string> | never[]
}

interface UserDatat {
    phoneNo: string
    username: string
    password: string
    fullname: string
}

interface InputAutht {
    title: string,
    errMsg: errMsgt,
    type: string,
    id?: number,
    autocomplete: string,
    item: string,
    setUserdata: (prev: UserDatat) => void

}

const InputAuth = memo(({ title, errMsg, item, type, id, autocomplete, setUserdata }: InputAutht) => {

    const handleChange = (e: any) => {
        let { name, value } = e.target;
        console.log(name, value)
    }

    return (
        <div className='flex-col flex w-full mt-3'>
            <label className='text-Agrey500 text-[16px]'>{title}</label>
            <input name={item} onChange={handleChange} className='bg-Agrey1200 px-2 text-Agrey500 text-sm border-2 focus:border-Ablue800 outline-none border-Ablue900 rounded-md h-9' autoComplete={autocomplete} type={type} />
            <span className='text-[12px] ml-2 text-red-800 '>{"error"}</span>
        </div>
    )
})

export default InputAuth