import React from 'react'
import paylink from "../images/payment-link-icon.svg";
import { Button } from './Button';
import icon from "../images/razorpayXicon.svg";

export default function FeatureBox({title="", para=""}) {   //img-props destructure
    return (
        <div className="w=full min-h-[15rem] relative cursor-pointer">
            <img src={paylink} className="text-white bg-lightBlue absolute right-3 w-12 h-12 top-3 z-[8] rounded-full transition-all duration-200"/>
            {/* <svg viewBox="0 0 349.32501220703125 225" xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200"
                style="stroke-opacity: 0.15">
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
                    z" fill="#fff"></path>
            </svg> */}
            <div className="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
                <div>
                    <h3 className="font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.375rem]">
                        {title}</h3>
                    <p className="font-mullish text-grayText mt-6">{para}</p>
                </div>
                <Button/>
            </div>
        </div>
    )
}
export function FeatureBox2({head="", para=""}){
    return(
        <div
                    class="p-10 bg-white bg-bg1 w-full max-h-[300px] cursor-pointer 
                bg-no-repeat shadow-md hover:scale-105 transition-all duration200 hover:bg-bg2">
                    <img src={icon} class="w-10 h-10 "/>
                    <h3 class="font-mullsih text-large font-bold pt-4">{head}
                    </h3>
                    <p class="font-mullish py-3 text-grayText leading-normal">{para}</p>
                    <Button/>
                </div>
    )
}
export function CoreBox({head="", para="", img=null}){
    return(
        <div>
        <img src={img}/>
        <h3 class="font-mullish text-white text-lg font-bold my-4">{head}</h3>
        <p class="font-mullish opacity-80 text-white">{para}</p>

    </div>
    )
}