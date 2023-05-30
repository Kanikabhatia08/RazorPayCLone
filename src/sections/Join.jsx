import React from 'react'
import companies from "../images/comanies.png";

export default function Join() {
    return (
        <section className="bg-[#f5f8fe] relative pt-40 pb-12 -mt-[200px] -z-[100] ">
            <div className="w-11/12 max-w-[1080px] mx-auto relative flex flex-col md:flex-row">
                <div className="flex flex-col justify-center w-full md:max-w-[calc(100%-500px)] ">
                    <h2 className="font-mullish font-extrabold text-2xl text-deepBlue ">Join the 50,00,000 businesses using
                        Razorpay</h2>
                    <div className=" h-1 w-6 bg-greenLight mt-4 mb-6"></div>
                    <p className="font-mullish ">We make it easier for you to focus on building great
                        products while we work on simplifying your payments.
                        Become one of us by joining thousands of our happy users
                        and simplify the online payment experience for your customers.</p>

                    <p className="font-mullish mt-6">Focus on your business while we handle the complexities of payments for
                        you.</p>
                    <button className=" flex flex-row py-[14px] mt-7 px-[18px] w-fit font-mullish font-bold text-white bg-lightBlue500
                                border-none rounded-md duration-200 hover:bg-lightBlue500 translate-all ">
                        Get Started
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg>
                    </button>
                </div>
                <div className="h-[400px] w-[400px] md:h-[500px] md:w-[500px] relative overflow-y-hidden mx-auto">
                    <div className="bg-gradient-to-b from-[#f4f8ff] to-[#fff0] absolute w-full h-[150px] top-0 z-50">
                    </div>
                    <img src={companies} className="absolute h-auto object-cover companiesList" />
                    <div className="bg-gradient-to-t from-[#f4f8ff] to-[#fff0] absolute w-full h-[150px] bottom-0 z-50">
                    </div>
                </div>
            </div>
        </section>
    )
}
