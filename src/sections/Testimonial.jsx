import React from 'react'
import dots from "../images/feature-section1-dottedrows.png";
import testimonial from "../images/testimonial.jpg";
import quotes from "../images/quotes.svg";
import company from "../images/fake-company-logo.png";

export default function Testimonial() {
  return (
<section className="relative">
        <div className="w-11/12 max-w-[1300px] mx-auto relative py-20">
            <img src={dots} loading="lazy"
                className="absolute w-[200px] top-[8rem] left-[2rem] -z-10"/>
            <h2 className="font-mullish font-extrabold text-2xl text-center text-deepBlueHead">An Experience <br/>
                People Love to Talk About
            </h2>
            <div className="w-6 h-1 mt-4 bg-greenLight mx-auto"></div>

            <button className="w-[100px] h-[100px] bg-[#f4f8ff] rounded-full absolute left-0 top-1/2
        flex justify-center items-center">
                <div
                    className="w-[65%] h-[65%] bg-[#f4f8ff] rounded-full flex justify-center items-center mix-blend-multiply">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="6"
                        stroke="currentColor" className="w-6 h-7 text-gray-600">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>

                </div>
            </button>

            <button className="w-[100px] h-[100px] bg-[#f4f8ff] rounded-full absolute right-0 top-1/2
        flex justify-center items-center">
                <div
                    className="w-[65%] h-[65%] bg-[#f4f8ff] rounded-full flex justify-center items-center mix-blend-multiply">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="6"
                        stroke="currentColor" className="w-6 h-7 text-gray-600">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>

                </div>
            </button>
            <div className="flex flex-col xl:flex-row max-w-[960px] items-center mx-auto my-20 space-x-[10rem]">
                <img src={testimonial} loading="lazy" height="320px" width="320px" className="rounded-xl"/>

                <div className=" flex-col max-w-[400px]">
                    <img src={quotes} height="40px" width="35px" className="-mb-2 xl:order-1"/>
                    <p className="font-mullish text-3xl font-extralight">Readymade Closed Wallet Solution For Quick Refunds
                    </p>
                    <a href="" className="text-grayText italic underline xl:order-1">Learn More</a>
                    <h3 className="font-mullish font-extrabold text-2xl -order-1 xl:order-1">Lorem Ipsum</h3>
                    <p className="font-mullish font-medium">CEO, XYZ Engineering Company</p>
                <div className="h-[10px] w-[10px] bg-gray-300 rounded-full"></div>
                    <img src={company} width="80px" height="40px" className="xl:order-1"/>
                </div>
            </div>
            <div className="flex flex-row mx-auto space-x-2 justify-center">
                <div className="h-[10px] w-[10px] bg-gray-300 rounded-full"></div>
                <div className="h-[10px] w-[10px] bg-blue-500 rounded-full"></div>
                <div className="h-[10px] w-[10px] bg-gray-300 rounded-full"></div>
                <div className="h-[10px] w-[10px] bg-gray-300 rounded-full"></div>
                <div className="h-[10px] w-[10px] bg-gray-300 rounded-full"></div>
                <div className="h-[10px] w-[10px] bg-gray-300 rounded-full"></div>
            </div>
        </div>

    </section>  )
}
