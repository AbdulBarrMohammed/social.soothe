import { Link } from "react-router-dom"
import { pageDataLoggedIn } from "./pageData"

export function Sidebar() {
    return (
        <>
        <aside className=' bg-[#F9F6F4] h-screen'>
            <ul className='py-10 flex flex-col'>
                    {pageDataLoggedIn.map((page) => {
                        return (
                            <div className='flex gap-4 px-10 py-2 items-center hover:bg-[#D1CCC9] transition duration-300 ease-in-out'>
                                <img src={page.img} className='h-7'/>
                                <li className='font-semibold text-lg'>{page.name}</li>
                            </div>
                        );

                    })}

            </ul>
      </aside>
        <div className="m-56">


        </div>

        </>
    )
}
