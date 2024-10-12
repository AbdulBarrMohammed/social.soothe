import { verifyUser } from "../controller"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import axios from "axios"


export function LogIn() {


    const [user, setUser] = useState({
        email: "",
        password: "",

    })

    //navigation
  const navigate = useNavigate()


  function handleChange(e) {

    setUser({ ...user, [e.target.name]: e.target.value })


  }

  async function handleSubmit(e) {
    e.preventDefault()
    let res = await verifyUser(user)
    if (res) {

        sessionStorage.setItem("User", res)
        //making authorization field in every axios request header
        axios.defaults.headers.common["Authorization"] = `Bearer ${res}`
        navigate("/dashboard")
    }
    else {
        alert("login fail")
    }

  }


    return (
        <div className= "flex items-center justify-center h-screen">
            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-3xl font-bold py-10'>Social.Soothe</h2>
                <form className='flex flex-col gap-5 ' onSubmit={handleSubmit}>
                <div className='flex flex-col gap-5'>
                    <input className="border-solid border border-[#cccccc] p-2 w-80 rounded-sm font-medium"
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange} required maxLength={40}/>

                    <input className="border-solid border border-[#cccccc] p-2 rounded-sm font-medium"
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange} required maxLength={20}/>


                    <button className="bg-[#EE7B30] text-white  p-2 rounded-md text-lg font-bold shadow-md" type= "submit">Log in</button>
                </div>

                <div className='text-center'>
                    <p>Dont have an account? <a className='font-bold cursor-pointer' onClick={() => navigate("/signUp")}>Log in</a></p>
                </div>


                </form>
            </div>
       </div>
    )
}
