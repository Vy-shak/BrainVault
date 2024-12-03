import Delete from "../../../Icons/Delete";
import Input from "../Input";
import Button from "../Button";



interface modelType {
    open: boolean,
}

const Modal = (props: modelType) => {
    return (
        <>
            {props.open && <section style={{ background: "rgba(0, 0, 0, 0.5)" }} className='w-screen p-48 flex justify-center items-center h-screen fixed top-0 right-0'>
                <div className="w-full px-6 py-4  h-fit  rounded-md  opacity-100   bg-white">
                    <div className="flex justify-end ">
                        <Delete />
                    </div>
                    <div className="flex space-y-4 flex-col">
                        <Input title="title" />
                        <Input title="about" />
                        <Input title="Link" />
                    </div>
                    <div className="mt-6 w-full h-fit flex justify-center items-center">
                        <Button variant="primary" text="Add link to brainValut" size="md" />
                    </div>
                </div>
            </section>}
        </>
    )
}

export default Modal
