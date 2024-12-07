import Delete from "../../../Icons/Delete";
import axios from "axios";
import Input from "../Input";
import Button from "../Button";
import { motion, AnimatePresence, color } from "motion/react";
import { sideData } from "../Constant";
import Type from "../Type";
import { useRef } from "react";
import { useState } from "react";


interface modelType {
    open: boolean,
    setOpen: () => void
}

const Modal = (props: modelType) => {
    const [typeId, setTypeid] = useState('');
    console.log(typeId?.text);
    const nameRef: any = useRef('');
    const aboutRef: any = useRef('');
    const linkRef: any = useRef('');

    const uploadContent = async () => {
        if (typeId) {
            try {
                const token = await localStorage.getItem('token');
                const upload = await axios.post('http://localhost:3000/api/v1/content/add', {
                    linktype: typeId.text,
                    linkname: nameRef.current.value,
                    about: aboutRef.current.value,
                    link: linkRef.current.value
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'token': token
                    }
                })
            } catch (error) {
                console.log('content upload error')
            }
        }
        else {
            alert("Please select any contents");
        }
    }

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
                                {sideData.map((item, index) => (
                                    <Type text={item.text} varient={`${typeId?.id === index ? 'selected' : 'normal'}`} id={index} setid={setTypeid} size="sm" />
                                ))}
                            </div>
                            <div className="flex space-y-4 flex-col">
                                <Input reference={nameRef} Size="normal" title="Name" />
                                <Input reference={aboutRef} Size="medium" title="about" />
                                <Input reference={linkRef} Size="normal" title="Link" />
                            </div>
                            <div onClick={props.setOpen} className="mt-6 w-full h-fit flex justify-center items-center">
                                <Button handleClick={uploadContent} variant="primary" text="Add link to brainValut" size="md" />
                            </div>
                        </div>
                    </motion.div>}
            </AnimatePresence>
        </>
    )
}

export default Modal
