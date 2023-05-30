import React from 'react'
import dots from "../images/feature-section1-dottedrows.png";
import { FeatureBox2 } from '../components/FeatureBox';


export default function NewFeatures() {
    const data = [{ head: "Instant Settlements", para: "Settle your customer payments within 10 seconds as soon your account is activated, even during holidays" },
    { head: "UPI Auto Pay", para: "Allow customers to set up recurring payments using UPI Apps." },
    { head: "Payment Link", para: "Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately" },
    { head: "Payment Link", para: "Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately" },
    { head: "Payment Link", para: "Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately" }
    ]
  return (
    <section className="bg-white relative">
        <div className="w-11/12 max-w-[1080px] mx-auto pt-4">
            <img src={dots} loading="lazy"
                className="absolute -top-[6rem] w-[233px] md:block hidden left-[300px] z-[10]"/>
            <img src={dots} loading="lazy"
                className="absolute -top-[6rem] md:block hidden w-[233px] right-[0rem] z-[10]"/>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-y-10 gap-x-4 relative z-[100]">
                <div className="relative flex items-center z-[0]">
                    <h2 className="font-mullish text-deepBlueHead font-bold text-4xl leading-[3.375rem]">New in the
                        <span className="text-lightBlue500">{" "}Razorpay{" "}</span>
                        Product Suite
                    </h2>
                </div>

            {data.map((item,index) =>{
                return <FeatureBox2 head={item.head} para={item.para} key={index}/>
            })}
            </div>
        </div>

    </section>
  )
}
