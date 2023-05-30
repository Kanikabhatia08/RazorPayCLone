import React from 'react'
import flame from "../images/x-flame-1.png";
import razorpay from "../images/razorpayX.svg";
import banking from "../images/buisness-banking.png";
import icon from "../images/current-icon.svg";
import payout from "../images/payouts-icon.svg"
import payment from "../images/payment-link-icon.svg"

export default function Feature2() {
    return (
        <section
            className="bg-[url(./images/feature-section-2BG.svg)] bg-no-repeat bg-cover overflow-x-hidden mt-14 pt-[8rem] pb-[300px] my-14">
            <div className="w-10/12 max-w-[1080px] pt-4 mx-auto relative">
                <h2 className="font-mullish font-bold leading-[1.2] text-2xl text-center text-white">
                    Explore RazorpayX powered Business Banking</h2>
                <div className=" h-1 w-6 bg-greenLight mx-auto mt-4 mb-20"></div>

                <div className="w-full min-h[440px] flex flex-col relative">
                    <img src={flame} loading="lazy" className="absolute -top-[142px] left-[1px] w-[200px] " />
                    <img src={flame} loading="lazy" className="absolute top-[150px] -right-[180px] w-[200px]" />

                    <div
                        className="w-full min-h-[520px] flex rounded-md relative p-10 py-12 border border-slate-700 z-20 bg-[#181c2e]">
                        <div className="flex flex-col justify between items-start h-full w-full gap-12 z-20">
                            <h3 className="font-mullish text-[28px] font-bold max-w-[500px] text-white leading-10">
                                Manage your company’s finances and supercharge your business banking with
                                <img src={razorpay} loading="lazy" width="168px" height="32pz" className="inline" />
                            </h3>
                            <ul className="space-y-2">
                                <li className="font-mullish flex items-center text-white space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-greenLight h-6 w-6 mr-3" fill="none"
                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>Open a fully digital current account
                                </li>
                                <li className="font-mullish flex items-center text-white space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-greenLight h-6 w-6 mr-3" fill="none"
                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>Automate payables & compliment payments
                                </li>
                                <li className="font-mullish flex items-center text-white space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-greenLight h-6 w-6 mr-3" fill="none"
                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>Simplify and track spends with Corporate cards
                                </li>
                                <li className="font-mullish flex items-center  text-white space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-greenLight h-6 w-6 mr-3" fill="none"
                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>View financial insights at a glance
                                </li>
                            </ul>
                            <div className="flex flex-col-reverse md:flex-row w-full items-center space-x-4">
                                <button className="relative bg-lightBlue flex items-center
                          place-content-center md:justify-start text-white py-[14px] px-[18px] md:pr-[90px] rounded-md
                           font-mullish font-bold hover:bg-lightBlue500 transition-all duration-200
                           self-stretch md:w-fit">
                                    Sign Up
                                    <div className="w-12 h-[60px] bg-greenLight absolute right-6 skew-x-[20deg] 
                              flex justify-center items-center">
                                        <svg viewBox="0 0 24 24" focusable="false"
                                            className="w-[20px] h-[20px] -skew-x-[20deg] ">
                                            <path fill="currentColor"
                                                d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div
                                    className="flex flex-row md:items-center cursor-pointer group text-lightBlue500 hover:text-lightBlue300 transition-all duration-200">
                                    <a href="#" className="font-mullish font-bold 
                            group-hover:text-lightBlue300 transition-all duration-200">Know More</a>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" className="w-6 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <img src={banking} className="max-w-[600px] absolute right-5 bottom-2 z-4 
                    hidden md:max-w-[400px] lg:max-w-[600px] md:block lg:block"/>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 my-14 ">

                        <div className="w=full min-h-[15rem] relative cursor-pointer">
                            <img src={icon} className="text-white bg-lightBlue
                     absolute right-3 w-12 h-12 top-3 z-[8] rounded-full transition-all duration-200"/>
                            <svg viewBox="0 0 349.32501220703125 225" xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                                className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200">
                                <path d="m 0 6 
                    a 6 6 0 0 1 6 -6 
                    h 250.32501220703125 
                    a 16 16 0 0 1 11 5 
                    l 77 77 
                    a 16 16 0 0 1 5 11 
                    v 126 
                    a 6 6 0 0 1 -6 6 
                    h -337.32501220703125 
                    a 6 6 0 0 1 -6 -6 
                    z" fill="#181C2E"></path>
                            </svg>
                            <div
                                className="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8 featureCardBox">
                                <div>
                                    <h3 className="font-mullish font-extrabold text-white leading-[1.2] text-[1.375rem]">
                                        Current account</h3>
                                    <p className="font-mullish text-grayText mt-6">Current accounts for fast-growing businesses,
                                        supported by the
                                        best-in-class technology</p>
                                </div>
                                <div
                                    className="flex items-center cursor-pointer mt-8 group text-lightBlue500 hover:text-deepBlue">
                                    <a href="#" className="font-mullish font-bold 
                            group-hover:text-grayBlue transition-all duration-200">Know More</a>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" className="w-6 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="w=full min-h-[15rem] relative cursor-pointer featureCard2">
                            <img src={payout} className="text-white bg-lightBlue
                     absolute right-3 w-12 h-12 top-3 z-[8] rounded-full transition-all duration-200"/>
                            <svg viewBox="0 0 349.32501220703125 225" xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                                className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200">

                                <path d="m 0 6 
                    a 6 6 0 0 1 6 -6 
                    h 250.32501220703125 
                    a 16 16 0 0 1 11 5 
                    l 77 77 
                    a 16 16 0 0 1 5 11 
                    v 126 
                    a 6 6 0 0 1 -6 6 
                    h -337.32501220703125 
                    a 6 6 0 0 1 -6 -6 
                    z" fill="#181C2E"></path>
                            </svg>
                            <div className="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
                                <div>
                                    <h3 className="font-mullish font-extrabold text-white leading-[1.2] text-[1.375rem]">
                                        Payouts</h3>
                                    <p className="font-mullish text-grayText mt-6">Make simple, reliable & secure payouts
                                        to bank accounts, UPI IDs or wallets</p>
                                </div>
                                <div
                                    className="flex items-center cursor-pointer mt-8 group text-lightBlue500 hover:text-deepBlue">
                                    <a href="#" className="font-mullish font-bold 
                            group-hover:text-grayBlue transition-all duration-200">Know More</a>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" className="w-6 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="w=full min-h-[15rem] relative cursor-pointer">
                            <img src={payment} className="text-white bg-lightBlue
                     absolute right-3 w-12 h-12 top-3 z-[8] rounded-full transition-all duration-200"/>
                            <svg viewBox="0 0 349.32501220703125 225" xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                                className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200">

                                <path d="m 0 6 
                    a 6 6 0 0 1 6 -6 
                    h 250.32501220703125 
                    a 16 16 0 0 1 11 5 
                    l 77 77 
                    a 16 16 0 0 1 5 11 
                    v 126 
                    a 6 6 0 0 1 -6 6 
                    h -337.32501220703125 
                    a 6 6 0 0 1 -6 -6 
                    z" fill="#181C2E"></path>
                            </svg>
                            <div className="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
                                <div>
                                    <h3 className="font-mullish font-extrabold text-white leading-[1.2] text-[1.375rem]">
                                        Payroll</h3>
                                    <p className="font-mullish text-grayText mt-6">Set your payroll and compliances
                                        like TDS, ESIC, PT, & PF on autopilot.</p>
                                </div>
                                <div
                                    className="flex items-center cursor-pointer mt-8 group text-lightBlue500 hover:text-deepBlue">
                                    <a href="#" className="font-mullish font-bold 
                            group-hover:text-grayBlue transition-all duration-200">Know More</a>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" className="w-6 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[100%] fitems-center justify-evenly border border-slate-600
                    mb-24 gap-y-6 relative rounded-md p-8 hidden md:flex md:flex-col lg:flex-row lg:flex">
                        <p className="font-mullish text-white text-xl">Check out the live demo to learn how RazorpayX works.
                            <span className="font-bold">No sign-up required!</span>
                        </p>
                        <button className="relative bg-lightBlue flex items-center place-content-center md:justify-start text-white py-[14px] px-[18px] md:pr-[90px] rounded-md font-mullish font-bold hover:bg-lightBlue500 transition-all duration-200 self-stretch md:w-fit">
                            Check Out the demo
                            <div className="w-12 h-[60px] bg-greenLight absolute right-6 skew-x-[20deg] flex justify-center items-center">
                                <svg viewBox="0 0 24 24" focusable="false" className="w-[20px] h-[20px] -skew-x-[20deg] ">
                                    <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
                                    </path>
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

        </section>
    )
}
