import { useState } from "react"


export function CreateJournal() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [mood, setMood] = useState('')
    const [moodModal, setMoodModal] = useState(false);
    const [formModal, setFormModal] = useState(true);

    function handleSubmit() {


        setMoodModal(false)
        console.log(content)
        console.log(title)
        console.log(mood)



    }

    function submit() {
        setMoodModal(true)
        setFormModal(false)

    }



    return (
        <>
        { formModal &&

            <div>
                <p onClick={submit}>X</p>

                <p className="text-center">How do you feel right now?</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 grid-rows-2 ">
                    <div onClick={() => setMood("sad")} className="cursor-pointer flex flex-col items-center gap-2 hover:border transition duration-300 ease-in-out">
                        <img src="../src/assets/tired.png" className="h-40"/>
                        <p className="text-lg">sad</p>
                    </div>
                    <div onClick={() => setMood("happy")} className="cursor-pointer flex flex-col items-center gap-2">
                        <img src="../src/assets/tired.png" className="h-40"/>
                        <p className="text-lg">happy</p>
                    </div>
                    <div onClick={() => setMood("angry")} className="cursor-pointer flex flex-col items-center gap-2">
                        <img src="../src/assets/tired.png" className="h-40"/>
                        <p className="text-lg">angry</p>
                    </div>
                    <div onClick={() => setMood("worried")} className="cursor-pointer flex flex-col items-center gap-2">
                        <img src="../src/assets/tired.png" className="h-40"/>
                        <p className="text-lg">worried</p>
                    </div>
                    <div onClick={() => setMood("embarrassed")} className="cursor-pointer flex flex-col items-center gap-2">
                        <img src="../src/assets/tired.png" className="h-40"/>
                        <p className="text-lg">embarrassed</p>
                    </div>
                    <div onClick={() => setMood("embarrassed")} className="cursor-pointer flex flex-col items-center gap-2">
                        <img src="../src/assets/tired.png" className="h-40"/>
                        <p className="text-lg">stressed</p>
                    </div>

                </div>

            </div>





        }


        { moodModal &&
            <div className="flex flex-col">
                <div className="py-5 flex flex-col">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <input className="font-bold text-2xl" onChange={(e) => setTitle(e.target.value)} placeholder="Title"/>
                        <textarea className="text-xl h-96 border rounded-lg p-2" onChange={(e) => setContent(e.target.value)} placeholder="Write something..."/>
                        <div>
                            <button type="submit" className="bg-[#EE7B30] text-white  p-5 rounded-full text-sm font-bold shadow-md">Add entry</button>
                        </div>


                    </form>
                </div>

            </div>

        }



        </>
    )
}
