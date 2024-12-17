import { ul } from 'motion/react-client'
import React from 'react'
import Sideitem from './Sideitem'

function Sideitem2(props) {
    console.log("2", props.open)
    return (
        <ul className='pl-6'>
            {props.open ? <Sideitem data1={props.data1} /> : null}
        </ul>
    )
}

export default Sideitem2
