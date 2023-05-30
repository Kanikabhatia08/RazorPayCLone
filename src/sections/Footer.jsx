import React from 'react'
import logo from "../images/logo-dark.svg";
import facebook from "../images/facebook-icon.svg";
import insta from "../images/instagram-icon.svg";
import twitter from "../images/twitter-icon.svg";
import github from "../images/github-icon.svg";
import linkedin from "../images/linkedin-icon.svg";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-[#eef9fe] to-[#edf7ff] -mt-[400px]">
            <div
                className=" flex flex-row justify-between space-x-4 space-y-6 w-10/12 pt-[400px] pb-10 md:pt-[350px] max-w-[1080px] mx-auto ">
                <div className="flex flex-col w-3/12">
                    <img src={logo} loading="lazy" height="24px" width="120px" className="mt-6" />

                    <p className="text-sm text-grayText my-3 font-mullish">
                        Razorpay is the only payments solution in India that
                        allows businesses to accept, process and disburse payments
                        with its product suite. It gives you access to all payment
                        modes including credit card, debit card, netbanking, UPI
                        and popular wallets including JioMoney, Mobikwik, Airtel
                        Money, FreeCharge, Ola Money and PayZapp.
                    </p>
                    <p className="text-sm text-grayText my-3 font-mullish">
                        RazorpayX supercharges your business banking experience,
                        bringing effectiveness, efficiency, and excellence to all
                        financial processes. With RazorpayX, businesses can get
                        access to fully-functional current accounts, supercharge
                        their payouts and automate payroll compliance.
                    </p>

                    <p className="text-sm text-grayText my-3 font-mullish">Manage your marketplace, automate bank transfers,
                        collect recurring payments, share invoices with
                        customers and avail working capital loans - all from
                        a single platform. Fast forward your business with
                        Razorpay.
                    </p>
                    <p className="text-[0.625rem] text-grayText my-3 font-mullsih">Disclaimer: The RazorpayX powered Current
                        Account and
                        VISA corporate credit card are provided by RBI licensed banks.
                        Your RazorpayX powered account is provided by our partner
                        bank, in accordance with RBI regulations. RazorpayX itself
                        is not a bank and doesn't hold or claim to hold a banking
                        license.</p>

                </div>
                <div className="flex flex-col space-y-4">
                    <div>
                        <div>
                            <h3 className="font-mullish font-bold text-gray2 mb-1">BANKING PLUS</h3>
                            <ul>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                                transition-all duration-200">RazorpayX</a>
                                </li>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                                transition-all duration-200">Current Accounts</a>
                                </li>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                                transition-all duration-200">Payouts</a>
                                </li>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                                transition-all duration-200">Payout Links</a>
                                </li>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                                transition-all duration-200">Corporate Credit Card</a>
                                </li>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                                transition-all duration-200">View Live Demo</a>
                                    <span className="text-white p-1 font-mullish bg-green-500 rounded-sm text-xs font-bold">
                                        NEW
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-mullish font-bold text-gray2 mb-1 mt-6">LENDING</h3>
                            <ul>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                                transition-all duration-200">Razorpay Capital</a>
                                </li>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                                transition-all duration-200">Instant Settlements</a>
                                </li>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                                transition-all duration-200">Line of Credit</a>
                                </li>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                                transition-all duration-200">Working Capital Loans</a>
                                </li>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                                transition-all duration-200">Marketplace Instant Settlements</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-mullish font-bold text-gray2 mb-1 mt-6">BECOME A PARTNER</h3>
                            <ul>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                                transition-all duration-200">Refer and Earn</a>
                                </li>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                                transition-all duration-200">Onboarding APIs</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-mullish font-bold text-gray2 mb-1 mt-6">MORE</h3>
                            <ul>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                                transition-all duration-200">Route</a>
                                </li>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                                transition-all duration-200">Invoices</a>
                                </li>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                                transition-all duration-200">Freelancer Payments</a>
                                </li>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                                transition-all duration-200">International</a>
                                </li>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                                transition-all duration-200">Flash Checkout</a>
                                </li>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                                transition-all duration-200">UPI</a>
                                </li>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                                transition-all duration-200">ePOS</a>
                                </li>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                                transition-all duration-200">Checkout Demo</a>
                                </li>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                                transition-all duration-200">RazorpayX Payroll</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <div>
                        <div>
                            <h3 className="font-mullish font-bold text-gray2 mb-1">ACCEPT PAYMENTS</h3>
                            <ul>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                            transition-all duration-200">Payment Gateway</a>
                                </li>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                            transition-all duration-200">Payment Pages</a>
                                </li>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                            transition-all duration-200">Payment Links</a>
                                </li>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                            transition-all duration-200">QR Codes</a>
                                </li>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                            transition-all duration-200">Subscriptions</a>
                                </li>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                            transition-all duration-200">Smart Collect</a>
                                </li>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                            transition-all duration-200">Optimizer</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-mullish font-bold text-gray2 mb-1 mt-6">DEVELOPERS</h3>
                            <ul>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                            transition-all duration-200">Docs</a>
                                </li>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                            transition-all duration-200">Integrations</a>
                                </li>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                            transition-all duration-200">API Reference</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-mullish font-bold text-gray2 mb-1 mt-6">RESOURCES</h3>
                            <ul>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                            transition-all duration-200">Blog</a>
                                </li>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                            transition-all duration-200">Customer Stories</a>
                                </li>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                            transition-all duration-200">Events</a>
                                </li>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                            transition-all duration-200">Chargeback Guide</a>
                                </li>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                            transition-all duration-200">Settlement Guide</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-mullish font-bold text-gray2 mb-1 mt-6">SOLUTIONS</h3>
                            <ul>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                            transition-all duration-200">Education </a>
                                </li>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                            transition-all duration-200">E-commerce</a>
                                </li>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                            transition-all duration-200">Saas</a>
                                </li>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                            transition-all duration-200">BFSI</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-mullish font-bold text-gray2 mb-1 mt-6">FREE TOOLS</h3>
                            <ul>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                            transition-all duration-200">GST Calculator</a>
                                </li>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                            transition-all duration-200">Online TDS Payment</a>
                                </li>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                            transition-all duration-200">GST Number Search</a>
                                    <span className="text-white p-1 font-mullish bg-green-500 rounded-sm text-xs font-bold">
                                        NEW
                                    </span>
                                </li>


                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <div>
                        <div>
                            <h3 className="font-mullish font-bold text-gray2 mb-1">COMPANY</h3>
                            <ul>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                                transition-all duration-200">About Us</a>
                                </li>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                                transition-all duration-200">Careers</a>
                                </li>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                                transition-all duration-200">Terms of Use</a>
                                </li>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                                transition-all duration-200">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                                transition-all duration-200">Grievance Redressal</a>
                                </li>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                                transition-all duration-200">Responsible Disclosure</a>
                                </li>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                                transition-all duration-200">Partners</a>
                                </li>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                                transition-all duration-200">White papers</a>
                                </li>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                                transition-all duration-200">Corporate Information</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-mullish font-bold text-gray2 mb-1 mt-6">HELP & SUPPORT</h3>
                            <ul>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                                transition-all duration-200">Support</a>
                                </li>
                                <li>
                                    <a href="#" className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue
                                transition-all duration-200">Knowledge base</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-mullish font-bold text-gray2 mb-1 mt-6">FIND US ONLINE</h3>
                            <ul className="flex space-x-4 items-center mt-4">
                                <li className="cursor-pointer">
                                    <a><img src={facebook} width="24" height="24" loading="lazy" /></a>
                                </li>
                                <li className="cursor-pointer">
                                    <a><img src={twitter} width="24" height="24" loading="lazy" /></a>
                                </li>
                                <li className="cursor-pointer">
                                    <a><img src={insta} width="24" height="24" loading="lazy" /></a>
                                </li>
                                <li className="cursor-pointer">
                                    <a><img src={github} width="24" height="24" loading="lazy" /></a>
                                </li>
                                <li className="cursor-pointer">
                                    <a><img src={linkedin} width="24" height="24" loading="lazy" /></a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-mullish font-bold text-gray2 mb-1 mt-6">REGD. OFFICE ADDRESS</h3>
                            <p className="font-mullish text-sm mt-4 whitespace-nowrap">
                                Razorpay Software Private Limited, <br />1st Floor, SJR Cyber,
                                <br />22 Laskar Hosur Road, Adugodi, <br />Bengaluru, 560030,
                                <br />Karnataka, India <br />CIN: U72200KA2013PTC097389
                            </p>
                            <div className="font-mullish mt-6">
                                <p className="text-sm">© Razorpay 2022</p>
                                <p className="text-sm">All Rights Reserved</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </footer>)
}
