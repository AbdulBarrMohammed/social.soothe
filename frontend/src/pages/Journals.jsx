import { getJournals } from "../controller"
import { useState, useEffect } from "react"
import { JournalCard } from "../components/JournalCard"
import { Link } from "react-router-dom"
import * as jwt_decode from "jwt-decode"



export function Journals() {
    const [journals, setJournals] = useState([])
    const [user, setUser] = useState({})

    useEffect(() => {
        //load journal data from mongodb
        async function loadUserJournals() {
            //grab user token
            const token = sessionStorage.getItem("User")
            const decodedUser = jwt_decode.jwtDecode(token)
            const allJournals = await getJournals()
            const filteredJournals = allJournals.filter((journal) => journal.author == decodedUser._id)
            setJournals(filteredJournals)
            setUser(decodedUser)

        }
        loadUserJournals()
    }, [])


    return (
        <>
            <div className="flex flex-col bg-[#F0F8FF] h-screen">

                <h1 className="text-2xl py-10 font-bold text-center">Journal Entries</h1>

                <div className="flex justify-center">
                    <div className="flex flex-wrap gap-5">
                        {journals.map((journal) => {
                            return (
                                <JournalCard journal={journal}/>

                            )
                        })}
                        <Link to={`/createJournal`} className="flex flex-col rounded-3xl cursor-pointer bg-[#eeeeee] p-5 items-center justify-center">
                            <img src="../src/assets/plus.svg" className="h-10"/>
                        </Link>

                    </div>

                </div>




            </div>
        </>




    )


}
