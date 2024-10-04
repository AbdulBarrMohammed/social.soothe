

import { useState } from "react";
import { Link } from "react-router-dom";


export function JournalCard ({journal}) {

    let date = new Date(journal.dateCreated);
    let stringDate = date.toString().slice(4, 15)


    return (
        <>

                {journal.mood == 'happy' &&
                    <Link to={`/selectedJournal/${journal._id}`} className="flex flex-col shadow-lg rounded-lg cursor-pointer bg-myYellow p-5 hover:opacity-85 transition duration-300 ease-in-out">
                        <div className="flex justify-end">
                            <img src="../src/assets/pencil.svg" className="h-7"/>
                        </div>
                        <div className="flex flex-col items-start gap-3">
                            <img src="../src/assets/smile.png" alt="" className="h-20"/>
                            <div class="text-white font-bold flex flex-col">
                                <p className="">{journal.title}</p>
                                <p>{stringDate}</p>
                            </div>
                        </div>
                    </Link>

                }

                {journal.mood == 'sad' &&
                    <Link to={`/selectedJournal/${journal._id}`} className="flex flex-col shadow-lg rounded-lg cursor-pointer bg-myBlue p-5 hover:opacity-85 transition duration-300 ease-in-out">
                        <div className="flex justify-end">
                            <img src="../src/assets/pencil.svg" className="h-7"/>
                        </div>
                        <div className="flex flex-col items-start gap-3">
                            <img src="../src/assets/sad.png" alt="" className="h-20"/>
                            <div class="text-white font-bold flex flex-col">
                                <p className="">{journal.title}</p>
                                <p>{stringDate}</p>
                            </div>
                        </div>
                    </Link>

                }
                {journal.mood == 'worried' &&
                    <Link to={`/selectedJournal/${journal._id}`} className="flex flex-col shadow-lg rounded-lg cursor-pointer bg-[#EE7B30] p-5 hover:opacity-85 transition duration-300 ease-in-out">
                        <div className="flex justify-end">
                            <img src="../src/assets/pencil.svg" className="h-7"/>
                        </div>
                        <div className="flex flex-col items-start gap-3">
                            <img src="../src/assets/sad-2.png" alt="" className="h-20"/>
                            <div class="text-white font-bold flex flex-col">
                                <p className="">{journal.title}</p>
                                <p>{stringDate}</p>
                            </div>
                        </div>
                    </Link>

                }
                {journal.mood == 'angry' &&
                    <Link to={`/selectedJournal/${journal._id}`} className="flex flex-col shadow-lg rounded-lg cursor-pointer bg-[#EA5933] p-5 hover:opacity-85 transition duration-300 ease-in-out">
                        <div className="flex justify-end">
                            <img src="../src/assets/pencil.svg" className="h-7"/>
                        </div>
                        <div className="flex flex-col items-start gap-3">
                            <img src="../src/assets/angry.png" alt="" className="h-20"/>
                            <div class="text-white font-bold flex flex-col">
                                <p className="">{journal.title}</p>
                                <p>{stringDate}</p>
                            </div>
                        </div>
                    </Link>

                }



        </>

    )
}
