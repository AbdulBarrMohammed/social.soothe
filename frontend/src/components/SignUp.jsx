import { createUser } from "../controller"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'

export function SignUp() {
    const [user, setUser] = useState({

        username: "",
        email: "",
        password: "",
        gender: "",
    })

    //navigation
  const navigate = useNavigate()



  function handleChange(e) {

    setUser({ ...user, [e.target.name]: e.target.value })


  }

  async function handleSubmit(e) {
    e.preventDefault()
    let res = await createUser(user)
    if (res.status !== 200) {
        alert("User account could not be created")
    }

    else {
        alert("User created !")
    }

  }



  //handle submit of sign up form

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
            name="username"
            type="text"
            placeholder="Username"
            onChange={handleChange} required maxLength={20}/>

            <input className="border-solid border border-[#cccccc] p-2 rounded-sm font-medium"
             name="password"
             type="password"
             placeholder="Password"
             onChange={handleChange} required maxLength={20}/>

            <select className="border-solid border p-2 rounded-sm" onChange={handleChange} name="gender" required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Non-binary">Non-binary</option>
            </select>

            <button className="bg-[#EE7B30] text-white  p-2 rounded-md text-lg font-bold shadow-md" type= "submit">Sign up</button>
          </div>

          <div className='text-center'>
            <p>Have an account? <a className='font-bold cursor-pointer' onClick={() => navigate("/logIn")}>Log in</a></p>
          </div>


        </form>
    </div>
   </div>
  )


}
