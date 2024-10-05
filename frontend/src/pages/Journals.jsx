import { getJournals } from "../controller"
import { useState, useEffect } from "react"
import { JournalCard } from "../components/JournalCard"
import { Link } from "react-router-dom"


export function Journals() {
    const [journals, setJournals] = useState([])

    useEffect(() => {
        //load journal data from mongodb
        async function loadAllJournals() {
            const data = await getJournals()
            setJournals(data)

        }
        loadAllJournals()
    }, [])

    return (
        <>
            <div className="flex flex-col">
                <h1 className="text-2xl py-5 font-bold">Journal Entries</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 grid-rows-2 ">
                    {journals.map((journal) => {
                        return (
                            <JournalCard journal={journal}/>

                        )
                    })}
                    <Link to={`/createJournal`} className="flex flex-col shadow-lg rounded-lg cursor-pointer bg-[#eeeeee] p-5 items-center justify-center">
                        <img src="../src/assets/plus.svg" className="h-10"/>
                    </Link>

                </div>

            </div>
        </>




    )


}
