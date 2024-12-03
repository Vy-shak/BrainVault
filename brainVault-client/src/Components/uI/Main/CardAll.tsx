import React from 'react'
import Card from './Card'

function CardAll() {
    return (
        <section className='grid w-full h-screen overflow-y-scroll bg-gray-200 pt-24 px-12 grid-cols-4 grid-rows-1 gap-4'>
            <Card title='tittle' Ctype='pdf' link='my link' />
            <Card title='tittle' Ctype='pdf' link='my link' />
            <Card title='tittle' Ctype='pdf' link='my link' />
            <Card title='tittle' Ctype='pdf' link='my link' />
        </section>
    )
}

export default CardAll
