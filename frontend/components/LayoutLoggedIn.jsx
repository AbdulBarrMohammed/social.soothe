import { Sidebar } from "./Sidebar"
import { Outlet } from "react-router-dom"

export function LayoutLoggedIn () {
    return (
        <>
            <Sidebar />
            <Outlet />
        </>
    )
}
