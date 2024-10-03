import { Link } from "react-router-dom"
import { pageDataLoggedIn } from "./pageData"

export function Sidebar() {
    return (
        <>
        <aside className=' bg-[#F9F6F4] h-screen pt-10'>
            <ul className='py-10 flex flex-col w-full'>
                    {pageDataLoggedIn.map((page) => {
                        return (

                                <Link to={page.path} className='font-semibold text-lg flex items-center hover:bg-[#D1CCC9] transition duration-300 ease-in-out'>
                                    <div className='flex gap-4 px-10 py-2 items-center'>
                                        <img src={page.img} className='h-7'/>
                                        <li className='font-semibold text-lg'>
                                            {page.name}
                                        </li>
                                    </div>
                                </Link>





                        );

                    })}

            </ul>
      </aside>

        </>
    )
}
