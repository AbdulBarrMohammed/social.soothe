import React, { useEffect, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css"


const Questions = () => {
    // use state to open social anxiety question drop down button
  const [isDropdown, setIsDropdown] = useState(false); const [isDropdownTwo, setIsDropdownTwo] = useState(false); const [isDropdownThree, setIsDropdownThree] = useState(false);
  const [isDropdownFour, setIsDropdownFour] = useState(false);
  const [isDropdownFive, setIsDropdownFive] = useState(false);
  const [isDropdownSix, setIsDropdownSix] = useState(false);
  const [isDropdownSeven, setIsDropdownSeven] = useState(false);

  //scroll animations
  useEffect(() => {
    AOS.init({duration:1200})
  })



    return (
        <div className='flex flex-col bg-white px-20 py-20 justify-center items-center w-full'>
          <h2 className='text-5xl text-center leading-[4rem] py-16' data-aos="fade-up">Social anxiety questions</h2>
          <div className='p-3 border-y border-[#C4C8C1] w-3/4 flex flex-col'>
            <div className='flex justify-between items-center gap-10'>
              <h2 className='text-xl' data-aos="fade-up">What is social anxiety?</h2>
              <button onClick={() => setIsDropdown((prev) => !prev)}>

                {!isDropdown ? (
                  <img src={'../src/assets/chevron-down.svg'} className='h-10' />

                ): (
                  <img src={'../src/assets/chevron-up.svg'} className='h-10' />

                )}
              </button>

            </div>
              {isDropdown && (

                <p>This works you were able to open the drop down option ! </p>
              )}
          </div>


          <div className='p-3 border-b border-[#C4C8C1] w-3/4 flex flex-col'>
            <div className='flex justify-between items-center gap-10'>
              <h2 className='text-xl' data-aos="fade-up">What are the symptoms social anxiety?</h2>
              <button onClick={() => setIsDropdownTwo((prev) => !prev)}>

                {!isDropdownTwo ? (
                  <img src={'../src/assets/chevron-down.svg'} className='h-10' />

                ): (
                  <img src={'../src/assets/chevron-up.svg'} className='h-10' />

                )}
              </button>

            </div>
              {isDropdownTwo && (

                <p>This works you were able to open the drop down option ! </p>
              )}
          </div>

          <div className='p-3 border-b border-[#C4C8C1] w-3/4 flex flex-col'>
            <div className='flex justify-between items-center gap-10'>
              <h2 className='text-xl' data-aos="fade-up">What are the causes of social anxiety?</h2>
              <button onClick={() => setIsDropdownThree((prev) => !prev)}>

                {!isDropdown ? (
                  <img src={'../src/assets/chevron-down.svg'} className='h-10' />

                ): (
                  <img src={'../src/assets/chevron-up.svg'} className='h-10' />

                )}
              </button>

            </div>
              {isDropdownThree && (

                <p>This works you were able to open the drop down option ! </p>
              )}
          </div>

          <div className='p-3 border-b border-[#C4C8C1] w-3/4 flex flex-col'>
            <div className='flex justify-between items-center gap-10'>
              <h2 className='text-xl' data-aos="fade-up">How many people have social anxiety?</h2>
              <button onClick={() => setIsDropdownFour((prev) => !prev)}>

                {!isDropdownFour ? (
                  <img src={'../src/assets/chevron-down.svg'} className='h-10' />

                ): (
                  <img src={'../src/assets/chevron-up.svg'} className='h-10' />

                )}
              </button>

            </div>
              {isDropdownFour && (
                <p>This works you were able to open the drop down option ! </p>

              )}
          </div>

          <div className='p-3 border-b border-[#C4C8C1] w-3/4 flex flex-col'>
            <div className='flex justify-between items-center gap-10'>
              <h2 className='text-xl' data-aos="fade-up">What treatments are available for social anxiety?</h2>
              <button onClick={() => setIsDropdownFive((prev) => !prev)}>

                {!isDropdownFive ? (
                  <img src={'../src/assets/chevron-down.svg'} className='h-10' />

                ): (
                  <img src={'../src/assets/chevron-up.svg'} className='h-10' />

                )}
              </button>

            </div>
              {isDropdownFive && (
                <p>This works you were able to open the drop down option ! </p>

              )}
          </div>

          <div className='p-3 border-b border-[#C4C8C1] w-3/4 flex flex-col'>
            <div className='flex justify-between items-center gap-10'>
              <h2 className='text-xl' data-aos="fade-up">How is social anxiety diagnosed?</h2>
              <button onClick={() => setIsDropdownSix((prev) => !prev)}>

                {!isDropdownSix ? (
                  <img src={'../src/assets/chevron-down.svg'} className='h-10' />

                ): (
                  <img src={'../src/assets/chevron-up.svg'} className='h-10' />

                )}
              </button>

            </div>
              {isDropdownSix && (
                <p>This works you were able to open the drop down option ! </p>

              )}
          </div>
          <div className='p-3 border-b border-[#C4C8C1] w-3/4 flex flex-col'>
            <div className='flex justify-between items-center gap-10'>
              <h2 className='text-xl' data-aos="fade-up">Is social anxiety the same as shyness?</h2>
              <button onClick={() => setIsDropdownSeven((prev) => !prev)}>

                {!isDropdownSeven ? (
                  <img src={'../src/assets/chevron-down.svg'} className='h-10' />

                ): (
                  <img src={'../src/assets/chevron-up.svg'} className='h-10' />

                )}
              </button>

            </div>
              {isDropdownSeven && (
                <p>This works you were able to open the drop down option ! </p>

              )}
          </div>

          <button className='mt-20 bg-[#4470AD] text-white p-5 rounded-full text-[18px] font-bold shadow-md'>Get started</button>


        </div>
    )

  }

  export default Questions
