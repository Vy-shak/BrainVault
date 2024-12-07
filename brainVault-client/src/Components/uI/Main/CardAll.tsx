import React from 'react'
import Card from './Card'

function CardAll() {
    return (
        <section className='grid w-full h-screen overflow-y-scroll bg-gray-200 pt-24 px-12 grid-cols-2 grid-rows-1 gap-4'>
        </section>
    )
}

export default CardAll


// {linkData.map((item) => (
//     <Card title={item.linkname} about={item.about} link={item.link} />
// ))}