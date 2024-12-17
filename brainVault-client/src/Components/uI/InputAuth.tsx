import { memo } from 'react';


interface InputAutht {
    placeholder: string,
    errMsg: any,
    reference: any

}

const InputAuth = memo(({ placeholder, reference, errMsg, }: InputAutht) => {

    return (
        <div className='flex-col flex w-full mt-3'>
            <label className='text-Agrey500 text-white font-Kanit text-sm'>{placeholder}</label>
            <input placeholder={placeholder} ref={reference} className=' bg-neutral-900 text-white px-2 text-Agrey500 text-sm border-[1px]  border-neutral-700 font-Kanit outline-none focus:border-Bgreen-900 rounded-md h-9' />
            <span className='text-[14px] ml-2 text-red-800 '>{errMsg}</span>
        </div>
    )
})

export default InputAuth