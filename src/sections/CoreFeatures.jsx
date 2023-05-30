import React from 'react'
import img1 from "../images/instant-activation-icon.svg";
import img2 from "../images/easy-integration.svg";
import img3 from "../images/api-driven-icon.svg";
import img4 from "../images/payment-modes.svg";
import img5 from "../images/simple-pricing.svg";
import img6 from "../images/industry-support-icon.svg";
import img7 from "../images/dashboard-reporting-icon.svg";
import img8 from "../images/secure-icon.svg";
import { CoreBox } from '../components/FeatureBox';

export default function CoreFeatures() {
    const data = [
        { head: "Instant Activation", para: "Get activated and transact within 2 minutes. Completely online onboarding with minimum documentation.", img: img1 },
        { head: "Easy Integration", para: "With plugins for all major platforms and languages,integrate and go live with Razorpay in less than an hour.", img: img2 },
        { head: "API Driven", para: "Build your business for scale with our complete API-driven automation that requires zero manual intervention.", img: img3 },
        { head: "100+ payment modes", para: "Offer your customers the luxury of all payment modes including Credit/Debit cards, Netbanking, UPI, Wallets etc.", img: img4 },
        { head: "Simple Pricing", para: "Our innovative payment solutions with competitive pricing make payments simpler.", img: img5 },
        { head: "Best in Industry Support", para: "Always available email, phone and chat based support to help you in your every step.", img: img6 },
        { head: "Dashboard Reporting", para: "Real-time data and insights on your Razorpay Dashboard to make informed business decisions.", img: img7 },
        { head: "Secure", para: "PCI DSS Level 1 compliant solution which removes our burden of regulatory compliance.", img: img8 }

    ]
    return (
        <section
            className="w-full bg-bg3 bg-no-repeat bg-cover mt-14 relative corefeaturesection">
            <div className="w-11/12 max-w-[1080px] mx-auto pt-5 ">
                <h2 className="font-mullish text-2xl mt-4 text-center text-white font-extrabold">Features</h2>
                <div className=" h-1 w-6 mx-auto bg-greenLight mt-4 mb-6"></div>
                <p className="font-mullish text-center max-w-[400px] text-white mx-auto">Empower your business with all the
                    right
                    tools to accept online payments and provide the best customer experience</p>
                <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2rem] mt-8">

                    {data.map((item, index) => {
                        return <CoreBox head={item.head} para={item.para} img={item.img} key={index} />
                    })}
                </div>

            </div>

        </section>)
}
