import Delete from "../../../Icons/Delete";
import Input from "../Input";
import Button from "../Button";
import { motion, AnimatePresence, color } from "motion/react";



interface modelType {
    open: boolean,
    setOpen: () => void
}

const Modal = (props: modelType) => {
    return (
        <>
            <AnimatePresence>
                {props.open &&
                    <motion.div initial={{ opacity: 0, scale: 0.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }} style={{ backgroundColor: "rgba(0, 0, 0,0.5)" }} className='w-screen backdrop-blur-sm p-48 flex justify-center items-center h-screen fixed top-0 right-0'>
                        <div className="w-full px-6 py-4  h-fit  rounded-md  opacity-100   bg-white">
                            <div onClick={props.setOpen} className="flex justify-end ">
                                <Delete />
                            </div>
                            <div className="flex space-y-4 flex-col">
                                <Input title="title" />
                                <Input title="about" />
                                <Input title="Link" />
                            </div>
                            <div onClick={props.setOpen} className="mt-6 w-full h-fit flex justify-center items-center">
                                <Button variant="primary" text="Add link to brainValut" size="md" />
                            </div>
                        </div>
                    </motion.div>}
            </AnimatePresence>
        </>
    )
}

export default Modal
