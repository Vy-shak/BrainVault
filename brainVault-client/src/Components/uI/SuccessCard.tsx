import React from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Button from './Button'


function SuccessCard() {
    return (
        <AnimatePresence>
            {<motion.div initial={{ opacity: 0, scale: 0.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }} style={{ backgroundColor: "rgba(0, 0, 0,0.5)" }} className='w-screen backdrop-blur-sm p-48 flex justify-center items-center h-screen fixed top-0 right-0'>
                <div className='flex space-y-5 flex-col justify-start items-start px-7 py-4 bg-white'>
                    your signup success
                </div>
            </motion.div>}
        </AnimatePresence>
    )
}

export default SuccessCard
