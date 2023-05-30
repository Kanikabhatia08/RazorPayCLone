import React from 'react'
import cta from "../images/ctaImg.svg"

export default function Cta() {
    return (
        <section className="bg-bg4 w-full h-full bg-no-repeat relative bg-cover ctaSection min-h-[510px]">
            <div
                className="w-11/12 max-w-[1080px] relative flex flex-row items-center mx-auto justify-between space-x-20 py-16">
                <div className="flex flex-col gap-5 mt-12 max-w-[600px]">
                    <h2 className="font-mullish font-extrabold text-white text-2xl">Supercharge your business with Razorpay</h2>
                    <div className="w-6 h-1 bg-greenLight"></div>
                    <p className="font-mullish text-white">Sign up now to experience the future of payments and offer<br/> your
                        customers the best checkout experience.</p>

                    <ul className="flex flex-row flex-wrap gap-x-6 gap-y-3  text-white">
                        <li className="font-mullish text-white flex flex-row">
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-greenLight h-6 w-6 mr-3" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            Quick Onboarding
                        </li>
                        <li className="font-mullish text-white flex flex-row">
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-greenLight h-6 w-6 mr-3" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            Access to entire product suite
                        </li>
                        <li className="font-mullish text-white flex flex-row">
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-greenLight h-6 w-6 mr-3" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            API access
                        </li>
                        <li className="font-mullish text-white flex flex-row">
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-greenLight h-6 w-6 mr-3" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            24x7 support
                        </li>
                    </ul>
                    <button className=" min-w-[32px] py-2 px-7 font-mullish place-self-start text-lightBlue300 bg-white border 
                transition-all rounded-sm duration-200 hover:text-lightBlue500 flex items-center gap-1">Sign Up
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg></button>

                </div>
                <img src={cta} width="240px" height="282px" className="mt-16 pt-4 hidden lg:block" />
            </div>
        </section>
    )
}
