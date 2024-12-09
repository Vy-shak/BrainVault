import SignnupCover from "../assets/SignupCover.jpg"
import AuthForm from '../Components/uI/Main/Form'
function Signup() {
    return (
        <section className='w-screen h-screen bg-Agrey1200  justify-between flex items-center'>
            <AuthForm />
            <div className='w-1/2 p-12 rounded-lg h-96 overflow-hidden'>
                <img className='w-full' src={SignnupCover} alt="" />
            </div>
        </section>
    )
}

export default Signup
