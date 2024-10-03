import { getJournals } from "../controller"
import { useState, useEffect } from "react"
import { JournalCard } from "../components/JournalCard"


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
        <div className="py-24">
            <div className="flex flex-col">
                <h1 className="text-2xl py-5 px-10 font-bold">Journal Entry</h1>

                <div className="flex flex-wrap gap-5 px-10">
                    {journals.map((journal) => {
                        return (
                            <div>
                                <JournalCard journal={journal}/>


                            </div>
                        )
                    })}
                    <div className="flex flex-col shadow-lg rounded-lg cursor-pointer w-64 h-52 bg-[#eeeeee] p-5 items-center justify-center">
                        <img src="../src/assets/plus.svg" className="h-10"/>

                    </div>
                </div>

            </div>

        </div>
    )


}
