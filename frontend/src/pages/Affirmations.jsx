import { useEffect, useState } from "react"
import { data } from "./affirmationsData"
import { useCallback } from "react";

export function Affirmations() {
    const [message, setMessage] = useState("")
    const [displayBtn, setDisplayBtn] = useState(true);

    function chooseMessage() {
        const minCeiled = Math.ceil(0);
        const maxFloored = Math.floor(data.length);
        const idx =  Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
        setMessage(data[idx])
    }


    /*
    useEffect(() => {


        const timeout = setTimeout(() => {
            setDisplayBtn(!displayBtn)


        }, 5000);

        return () => clearTimeout(timeout);
      }, []); */


    return (
        <>
        <div className="flex flex-wrap pb-5 py-5 gap-10 items-center">


            <div className="flex bg-red-400 w-96 p-10 items-center justify-center h-96 rounded-lg">

                <p className="text-2xl">"{message}"</p>

            </div>

            <button className="bg-red-400 p-10 text-white" onClick={chooseMessage}>Display new affirmation</button>

            {/*
            <div>
                <img className="w-1/2" src={"../../src/assets/undraw_super_thank_you_re_f8bo.svg"}/>
    </div> */}



        </div>

        </>
    )
}
