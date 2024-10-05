import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { MoodModal } from "./MoodModal"



export function CreateJournal() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [mood, setMood] = useState('happy')
    const [moodModal, setMoodModal] = useState(false);
    const [formModal, setFormModal] = useState(true);

    const navigate = useNavigate()

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
             <div className="fixed inset-0 bg-modalBg backdrop-blur-sm z-30 flex items-center justify-center ">

                <div>
                    <div className="bg-white p-8 rounded-xl flex flex-col gap-10">

                        <p className="text-center font-bold text-xl">{`How are you are feeling today?: ${mood}`}</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 grid-rows-2">
                                <div onClick={() => setMood("sad")} className="cursor-pointer flex flex-col items-center gap-2 p-10 bg-emojiSad rounded-xl hover:bg-[#dddddd] transition duration-300 ease-in-out">
                                    <img src="../src/assets/sad.png" className="h-40"/>
                                    <p className="text-lg font-semibold text-emojiSadWord">Sad</p>
                                </div>
                                <div onClick={() => setMood("happy")} className="cursor-pointer flex flex-col items-center gap-2 p-10 bg-emojiHappy rounded-xl hover:bg-[#dddddd]  transition duration-300 ease-in-out">
                                    <img src="../src/assets/smile.png" className="h-40"/>
                                    <p className="text-lg font-semibold text-emojiHappyWord">Happy</p>
                                </div>
                                <div onClick={() => setMood("angry")} className="cursor-pointer flex flex-col items-center gap-2 p-10 bg-emojiAngry rounded-xl hover:bg-[#dddddd] transition duration-300 ease-in-out">
                                    <img src="../src/assets/angry.png" className="h-40"/>
                                    <p className="text-lg font-semibold text-emojiAngryWord">Angry</p>
                                </div>
                                <div onClick={() => setMood("worried")} className="cursor-pointer flex flex-col items-center gap-2 p-10 bg-emojiWorried rounded-xl hover:bg-[#dddddd] transition duration-300 ease-in-out">
                                    <img src="../src/assets/sad-2.png" className="h-40"/>
                                    <p className="text-lg font-semibold text-emojiWorriedWord">Worried</p>
                                </div>
                                <div onClick={() => setMood("embarrassed")} className="cursor-pointer flex flex-col items-center gap-2 p-10 bg-emojiEmbarrassed rounded-xl hover:bg-[#dddddd] transition duration-300 ease-in-out">
                                    <img src="../src/assets/tired.png" className="h-40"/>
                                    <p className="text-lg font-semibold text-emojiEmbarrassedWord">Embarrassed</p>
                                </div>
                                <div onClick={() => setMood("embarrassed")} className="cursor-pointer flex flex-col items-center gap-2 p-10 bg-emojiStressed rounded-xl hover:bg-[#dddddd] transition duration-300 ease-in-out">
                                    <img src="../src/assets/tired.png" className="h-40"/>
                                    <p className="text-lg font-semibold text-emojiStressedWord">Stressed</p>
                                </div>

                        </div>
                        <button className="bg-[#EE7B30] text-white  p-5 rounded-full text-sm font-bold shadow-md"onClick={submit}>Submit</button>

                    </div>

                </div>


             </div>


        }


        { moodModal &&
            <div className="flex flex-col">
                <div className="py-5 flex flex-col">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <input className="font-bold text-2xl" onChange={(e) => setTitle(e.target.value)} placeholder="Title"/>
                        <textarea className="text-xl h-96 border rounded-lg p-2" onChange={(e) => setContent(e.target.value)} placeholder={`Why are you feeling ${mood}...`}/>
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
