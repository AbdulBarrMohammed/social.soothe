import { useEffect } from "react"
import { Navbar } from "./Navbar"
import { Outlet, useNavigate } from "react-router-dom"


export function Layout () {

    /*
    let user = sessionStorage.getItem("User")
    const naviagte = useNavigate()

    //navigate to landing page if user is not logged in
    useEffect(() => {
        if (!user) {
            naviagte("/")
        }

    }, [user]) */

    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}
