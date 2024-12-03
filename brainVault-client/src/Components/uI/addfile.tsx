import { Plus } from "../../Icons/Plus.tsx"

interface setOpent {
    setOpen: () => void
}

function Addfile({ setOpen }: setOpent) {
    return (
        <div className="w-fit h-fit absolute right-10 bottom-16" onClick={setOpen}>
            <Plus />
        </div>
    )
}

export default Addfile
