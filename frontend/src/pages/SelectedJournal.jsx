import { useEffect, useState } from "react"
import { getJournal } from "../controller"
import { useNavigate, useParams } from "react-router-dom"
import { Navigate } from "react-router-dom"

export function SelectedJournal() {
    const [journal, setJournal] = useState({})
    const [stringDate, setStringDate] = useState("")
    const navigate = useNavigate()

    //grabbing id from clicked journal
    let params = useParams()
    let id = params.id



    useEffect(() => {
        async function loadJournal() {
            let data = await getJournal(id)
            setJournal(data)
            //set date format
            let date = new Date(journal.dateCreated);
            let stringDate = date.toString().slice(4, 15)
            setStringDate(stringDate)



        }
        loadJournal()

    })
    return (
        <div className="flex items-center">
            <div className="py-10 flex flex-col gap-5">
                <h1 className="text-2xl font-bold">{journal.title}</h1>
                <h2 className="text-xl">{stringDate}</h2>
                <button onClick={() => navigate(-1)}>Back</button>
                <div className=" max-w-5xl text-xl">
                    {journal.content}
                </div>
            </div>

            <div>

            </div>

        </div>
    )
}
