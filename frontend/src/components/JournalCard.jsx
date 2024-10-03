
import { Outlet } from "react-router-dom"
import { useState } from "react";


export function JournalCard ({journal}) {

    let date = new Date(journal.dateCreated);
    let stringDate = date.toString().slice(4, 15)


    return (
        <>

                {journal.mood == 'happy' &&
                    <div className="flex flex-col shadow-lg rounded-lg cursor-pointer w-64 bg-myYellow p-5 hover:opacity-85 transition duration-300 ease-in-out">
                        <div className="flex justify-end">
                            <img src="../src/assets/pencil.svg" className="h-7"/>
                        </div>
                        <div className="flex flex-col items-start gap-3">
                            <img src="../src/assets/smile.png" alt="" className="h-20"/>
                            <div class="text-white font-bold flex flex-col">
                                <p>{journal.title}</p>
                                <p>{stringDate}</p>
                            </div>
                        </div>
                    </div>

                }

                {journal.mood == 'sad' &&
                    <div className="flex flex-col shadow-lg rounded-lg cursor-pointer w-64 bg-myBlue p-5 hover:opacity-85 transition duration-300 ease-in-out">
                        <div className="flex justify-end">
                            <img src="../src/assets/pencil.svg" className="h-7"/>
                        </div>
                        <div className="flex flex-col items-start gap-3">
                            <img src="../src/assets/sad.png" alt="" className="h-20"/>
                            <div class="text-white font-bold flex flex-col">
                                <p>{journal.title}</p>
                                <p>{stringDate}</p>
                            </div>
                        </div>
                    </div>

                }
                {journal.mood == 'worried' &&
                    <div className="flex flex-col shadow-lg rounded-lg cursor-pointer w-64 bg-[#EE7B30] p-5 hover:opacity-85 transition duration-300 ease-in-out">
                        <div className="flex justify-end">
                            <img src="../src/assets/pencil.svg" className="h-7"/>
                        </div>
                        <div className="flex flex-col items-start gap-3">
                            <img src="../src/assets/sad-2.png" alt="" className="h-20"/>
                            <div class="text-white font-bold flex flex-col">
                                <p>{journal.title}</p>
                                <p>{stringDate}</p>
                            </div>
                        </div>
                    </div>

                }
                {journal.mood == 'angry' &&
                    <div className="flex flex-col shadow-lg rounded-lg cursor-pointer w-64 bg-[#EA5933] p-5 hover:opacity-85 transition duration-300 ease-in-out">
                        <div className="flex justify-end">
                            <img src="../src/assets/pencil.svg" className="h-7"/>
                        </div>
                        <div className="flex flex-col items-start gap-3">
                            <img src="../src/assets/angry.png" alt="" className="h-20"/>
                            <div class="text-white font-bold flex flex-col">
                                <p>{journal.title}</p>
                                <p>{stringDate}</p>
                            </div>
                        </div>
                    </div>

                }



        </>

    )
}
