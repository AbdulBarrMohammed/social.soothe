import { Link } from "react-router-dom"
import { pageDataLoggedIn } from "./pageData"

export function Sidebar() {
    //bg-[#F9F6F4]
    return (
        <>
        <aside className=' bg-[#4470AD] pt-16 sticky top-0 text-white'>
            <ul className='p-2 flex w-full items-center justify-center'>
                    {pageDataLoggedIn.map((page) => {
                        return (

                                <Link to={page.path} className='text-lg flex items-center hover:bg-[#D1CCC9] transition duration-300 ease-in-out'>
                                    <div className='flex gap-4 px-10 py-2 items-center'>
                                        <img src={page.img} className='h-7'/>
                                        <li className='font-semibold text-base'>
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
