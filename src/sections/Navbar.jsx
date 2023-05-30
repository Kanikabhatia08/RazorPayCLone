import React from 'react'
import logo from "../images/logo.svg";
import flag from "../images/india-flag.svg";

export default function Navbar() {
    return (
        <nav className="bg-deepBlue">
            <div className="relative w-[1080px] mx-auto flex item-center justify-between">


                <a href="/" className="cursor-pointer pr-7 py-7">
                    <img src={logo} width="125px" height="30px" />
                </a>
                <ul className="flex space-x-6">
                    <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer
                 transition-all duration-200 relative group hidden lg:block">
                        <a href="#">Payments</a>

                        <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block
                transition-all duration-200"></div>
                    </li>

                    <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer
                 transition-all duration-200 relative group hidden lg:block">
                        <a href="#">Banking</a>

                        <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block
                transition-all duration-200"></div>
                    </li>

                    <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer
                 transition-all duration-200 relative group hidden lg:block">
                        <a href="#">Corporate Card</a>
                    </li>

                    <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer
                 transition-all duration-200 relative group hidden lg:block">
                        <a href="#">Payroll</a>
                    </li>

                    <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer
                 transition-all duration-200 relative group hidden lg:block">
                        <a href="#">Resources</a>

                        <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block
                transition-all duration-200"></div>
                    </li>

                    <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer
                 transition-all duration-200 relative group hidden lg:block">
                        <a href="#">Support</a>

                        <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block
                transition-all duration-200"></div>
                    </li>

                    <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer
                 transition-all duration-200 relative group hidden lg:block">
                        <a href="#">Pricing</a>

                        <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block
                transition-all duration-200"></div>
                    </li>
                </ul>

                <div className="flex space-x-6 items-center">
                    <img src={flag} height="28px" width="20px" className="hidden lg:block" />

                    <button className="py-3 px-5 font-mullish text-white border-lightBlue border 
                rounded-sm font-bold lg">Log in</button>

                    <button className="py-3 px-4 font-mullish rounded-sm text-sm font-bold
                    bg-white text-lightBlue300 border transition-all duration-200
                    hover:text-lightBlue500 hidden lg:flex">Sign Up
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" className="w-[14px] h-[14px] ml-3">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                        </svg></button>
                </div>
            </div>

        </nav>
    )
}
