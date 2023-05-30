import React from 'react'
import fs1 from "../images/feature-section1-dottedrows.png";
import pay from "../images/payment-suite.png";
import FeatureBox from '../components/FeatureBox';



export default function Feature1() {
    const data = [{ head: "Payment Link", para: "Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately" },
    { head: "Payment Link", para: "Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately" },
    { head: "Payment Link", para: "Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately" },
    { head: "Payment Link", para: "Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately" },
    { head: "Payment Link", para: "Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately" },
    { head: "Payment Link", para: "Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately" },
    ]
    return (
        <section className="relative mt-[190px] overflow-hidden">
            <img src={fs1}
                className="absolute -top-[8rem] left-[10rem] inline-block -z-10" alt="" loading="lazy" wifth="233"
                height="167" />
            <img src={fs1}
                className="absolute top-[3rem] right-0 inline-block rotate-180" alt="" loading="lazy" wifth="233"
                height="167" />

            <div className="relative w-11/12 max-w-[1080px] mx-auto pt-4">
                <h2 className="font-mullish font-extrabold lg:text-xl md:text-base text-xs xl:text-2xl text-deepBlue leading-[1.2] hidden md:block text-center">Accept Payments
                    with Razorpay Payment Suite</h2>
                <h2 className="font-mullish font-extrabold text-5xl text-deepBlue leading-[1.2] md:hidden text-center">Explore Razorpay Payment Suite</h2>
                <div className="h-1 w-4 mt-4 mb-6 bg-greenLight mx-auto"></div>

                <div className="w-full min-h-[520px] bg-white flex rounded-md relative p-10 py-12 border">
                    <div className="flex flex-col justify-between w-full">
                        <h3 className="font-mullish text-[28px] leading-10 font-bold max-w-[500px]">Supercharge your
                            business with the all-powerful <span className="text-lightBlue">Payment Gateway</span></h3>
                        <ul className="space-y-2">
                            <li className="font-mullish flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-greenLight h-6 w-6 mr-3" fill="none"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                100+ Payment Methods
                            </li>
                            <li className="font-mullish flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-greenLight h-6 w-6 mr-3" fill="none"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                Industry Leading Success Rate
                            </li>
                            <li className="font-mullish flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-greenLight h-6 w-6 mr-3" fill="none"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                Superior Checkout Experience
                            </li>
                            <li className="font-mullish flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-greenLight h-6 w-6 mr-3" fill="none"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                Easy to Integrate
                            </li>
                            <li className="font-mullish flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-greenLight h-6 w-6 mr-3" fill="none"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                Instant Settlements from day 1
                            </li>
                            <li className="font-mullish flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-greenLight h-6 w-6 mr-3" fill="none"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                In-depth Reporting and Insights
                            </li>
                        </ul>
                        <div className="flex flex-col-reverse md:flex-row items-center space-x-4">
                            <button className=" flex flex-row py-[14px] px-[18px] w-full md:w-fit font-mullish font-bold text-white bg-lightBlue500
                                border-none rounded-md duration-200 hover:bg-lightBlue500 translate-all  ">
                                Sign Up Now<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                </svg>
                            </button>

                            <div className="flex self-start md:self-center cursor-pointer group text-lightBlue500 hover:text-deepBlue">
                                <a href="#" className="font-mullish font-bold 
                                group-hover:text-grayBlue transition-all duration-200">Know More</a>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" className="w-6 h-4 md:self-center">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <img src={pay}
                        className="hidden max-w-[600px] md:max-w-[400px] lg:max-w-[600px] absolute right-0 bottom-0 md:block lg:block" />
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                    {data.map((item, index) => (
                        <FeatureBox key={index} title={item.head} para={item.para} />
                    ))}
                </div>
            </div>
        </section>
    )
}
