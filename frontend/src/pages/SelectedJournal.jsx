import { useEffect, useState } from "react"
import { getJournal } from "../controller"
import { useParams } from "react-router-dom"

export function SelectedJournal() {
    const [journal, setJournal] = useState({})

    //grabbing id from clicked journal
    let params = useParams()
    let id = params.id

    useEffect(() => {
        async function loadJournal() {
            let data = await getJournal(id)
            setJournal(data)

        }
        loadJournal()

    })
    return (
        <>
        <div className="py-10 flex flex-col">
            <h1 className="text-2xl py-5 px-5 font-bold">{journal.title}</h1>
            <h1>{journal.content}</h1>
        </div>

        </>
    )
}
