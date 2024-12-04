import Linkbox from '../Linkbox';
import { motion, AnimatePresence } from 'motion/react';
import { Copy, Links, Delete } from "../../../Icons/Sidebar/Index.ts";
import Button from '../Button.tsx';


interface Sharet {
    share: boolean,
    setShare: () => void
}

function ShareModel({ share, setShare }: Sharet) {
    return (
        <AnimatePresence>
            {share &&
                <motion.div initial={{ opacity: 0, scale: 0.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }} style={{ backgroundColor: "rgba(0, 0, 0,0.5)" }} className='w-screen backdrop-blur-sm p-48 flex justify-center items-center h-screen fixed top-0 right-0'>
                    <div className='flex space-y-5 flex-col justify-start items-start px-7 py-4 bg-white'>
                        <div className='flex justify-end w-full'>
                            <div onClick={setShare} className='w-fit h-fit cursor-pointer'>
                                <Delete />
                            </div>
                        </div>
                        <span className='font-medium'>Do you really want to share your Vault?</span>
                        <div className='flex justify-center items-center space-x-3'>
                            <Button size='sm' variant='tertiary' startIcon={<Links />} text='Anyone with link can access' />
                            <Button size='sm' variant='tertiary' startIcon={<Links />} text='Invited people only' />
                        </div>
                        <div className="w-full  h-fit  rounded-md  opacity-100   bg-white">
                            <Linkbox linksIcon={<Links />} Link='here is your link' buttonIcon={<Copy />} buttonText='Copy' />
                        </div>
                    </div>
                </motion.div>}
        </AnimatePresence>
    )
}

export default ShareModel
