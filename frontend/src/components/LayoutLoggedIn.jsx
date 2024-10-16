import { Sidebar } from "./Sidebar"
import { Outlet } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export function LayoutLoggedIn () {
    let user = sessionStorage.getItem("User")
    const naviagte = useNavigate()

    //navigate to landing page if user is not logged in
    useEffect(() => {
        if (!user) {
            naviagte("/")
        }

    }, [user])
    return (
        <div className="flex flex-col">
            <Sidebar/>
            <Outlet />


        </div>
    )
}
