import React from 'react'
import hero from "../images/hero-illustration.jpg";
import heroshape from "../images/hero-shape.svg";

export default function Hero() {
  return (
    <section className="relative bg-deepBlue py-10">
            <div className="w-10/12 max-w-[1080px] flex flex-col lg:flex-row items-center justify-between mx-auto">
                
                <div className="space-y-8">
                    <h1 className="font-mullish text-white font-bold text-[40px] leading-[1.2]">Power your finance, grow
                        your
                        business</h1>

                    <div className=" h-1 w-6 bg-greenLight"></div>
                    <p className="font-mullish text-gray-400 leading-7 text-[18px]">Accept payments from customers. Automate
                        payouts to
                        vendors & employees.
                        Never run out of working capital.</p>

                    <button
                        className="py-3 px-5 w-5/12 font-mullish text-white bg-lightBlue300 border-none rounded-md duration-200 hover:bg-lightBlue500 flex items-center gap-1">Sign
                        Up Now
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg>
                    </button>
                </div>
                
                <div className="h-full ">
                    <img src={hero} className=" max-w-[600px]"/>
                </div>
            </div>

            
            <div className="absolute left-0 right-0 w-[100%] scale-105 overflow-x-hidden">
                <img src={heroshape} className="w-full object-fill "/>
            </div>

        </section>
  )
}
