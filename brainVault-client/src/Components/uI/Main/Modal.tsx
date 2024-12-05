import Delete from "../../../Icons/Delete";
import Input from "../Input";
import Button from "../Button";
import { motion, AnimatePresence, color } from "motion/react";
import { sideData } from "../Constant";
import Type from "../Type";



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
                            <span className="text-sm font-normal text-gray-700">Type of the Link</span>
                            <div className="w-auto p-0 flex justify-start items-center mt-2 flex-shrink-0 h-auto gap-x-2 gap-y-3 flex-wrap">
                                {sideData.map((item) => (
                                    <Type text={item.text} varient='normal' size="sm" />
                                ))}
                            </div>
                            <div className="flex space-y-4 flex-col">
                                <Input Size="normal" title="Name" />
                                <Input Size="medium" title="about" />
                                <Input Size="normal" title="Link" />
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
