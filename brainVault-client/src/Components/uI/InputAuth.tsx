import { memo } from 'react';


interface InputAutht {
    placeholder: string,
    errMsg: any,
    reference: any

}

const InputAuth = memo(({ placeholder, reference, errMsg, }: InputAutht) => {
    console.log(reference.current.value);

    return (
        <div className='flex-col flex w-full mt-3'>
            <label className='text-Agrey500 text-[16px]'>{placeholder}</label>
            <input placeholder={placeholder} ref={reference} className='bg-Agrey1200 px-2 text-Agrey500 text-sm border-2 focus:border-Ablue800 outline-none border-Ablue900 rounded-md h-9' />
            <span className='text-[12px] ml-2 text-red-800 '>{errMsg}</span>
        </div>
    )
})

export default InputAuth