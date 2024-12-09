
import axios from 'axios';
import InputAuth from '../InputAuth.js';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

//@ts-ignore
function AuthForm() {
    const navigate = useNavigate();
    const fullnameRef: any = useRef('')
    const usernameRef: any = useRef('')
    const passwordRef: any = useRef('')


    const sendInfo = async () => {
        try {
            const upload = await axios.post('http://localhost:3000/api/v1/user/signup', {
                username: usernameRef.current.value,
                password: passwordRef.current.value,
                fullname: fullnameRef.current.value
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (upload.status === 200) {
                navigate("/Login")
            }
        } catch (error) {
            console.log(error)
            console.log("unable to upload")
        }
    }

    const handleForm = (e: any) => {
        e.preventDefault()
    }

    return (
        <div className='w-1/2 h-full flex justify-center items-center bg-Agrey1200 px-16'>
            <div className='centerDiv flex-col bg-white rounded-md px-6 py-6 w-full '>
                <label className='text-Agrey500 font-Aroboto text-lg font-semibold' >Become a member</label>
                <form onClick={handleForm} autoComplete='on'>
                    <div className='w-full bg-white  flex flex-col justify-start items-start'>
                        <InputAuth reference={fullnameRef} errMsg={"error"} placeholder={"fullname"} />
                        <InputAuth reference={usernameRef} errMsg={"error"} placeholder={"username"} />
                        <InputAuth reference={passwordRef} errMsg={"error"} placeholder={"password"} />
                    </div>
                    <button onClick={sendInfo} className='bg-blue-900 mt-4 px-24 rounded-md py-2 text-sm'>Join</button>
                    <p className='text-Agrey300 text-[16px] mt-2'>Already has an account?<span className='text-[18px] text-Ablue600 font-semibold'>Login</span></p>
                </form>
            </div>
        </div>
    )
}

export default AuthForm