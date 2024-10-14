import { Link } from "react-router-dom"
import { pageDataLeft } from "./pageData"
import { pageDataRight } from "./pageData"
import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export function Navbar() {
    let user = sessionStorage.getItem("User")
    const naviagte = useNavigate()

    function handleLogout() {
        sessionStorage.removeItem("User")
        naviagte("/")
    }

    useEffect(() => {
        console.log("user below");
        console.log(user)
    })

    return (
        <div className="flex justify-between p-4 items-center bg-white fixed top-0 left-0 right-0 z-10">
            <div className='flex gap-12 items-center'>
                <h1 className='text-2xl font-bold text-[#44423F]'>Social<span className='text-3xl'>.</span>Soothe</h1>
                <ul className="flex gap-5 cursor-pointer text-[#44423F]">
                        {pageDataLeft.map((page) => {
                        return (
                            <li key={page.path} className='hover:font-bold transition duration-300 ease-in-out'>
                                <Link to={page.path}>
                                {page.name}
                                </Link>
                            </li>
                        )
                    })}

                </ul>
            </div>

            <ul className="flex gap-5 cursor-pointer text-[#44423F]">
                {pageDataRight.map((page) => {
                    return (
                        <li key={page.path} className='hover:font-bold transition duration-300 ease-in-out'>
                            <Link to={page.path}>
                                {page.name}
                            </Link>
                        </li>
                    );
                })}
                {user &&
                    <button onClick={handleLogout}>Log out</button>
                }

            </ul>

        </div>

    )
}
