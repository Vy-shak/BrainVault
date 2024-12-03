import React from 'react';

interface inputType {
    title: string,
}

function Input({ title }: inputType) {
    return (
        <div className='flex flex-col justify-start items-start w-full m-0 p-0'>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">{title}</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="John" required />
        </div>
    )
}

export default Input
