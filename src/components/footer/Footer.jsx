import img from "../../assets/assets/logo-footer.png";
import React, { useState } from "react";
import { toast } from 'react-toastify';
import { useEffect } from "react";

function Footer() {
        function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    useEffect(() => {
        const storedEmail = localStorage.getItem("email");
        if (storedEmail) {
            setEmail(storedEmail);
        }
    }
    , []);

    const [email, setEmail] = useState("");
    return (
        <footer className="bg-[#06091a] gap-24 items-center flex flex-col pt-60 text-white py-4  w-full">
            <img src={img} alt="" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-screen-2xl w-full px-4">
                <div className="flex flex-col gap-4">
                    <h1 className="text-3xl">About us</h1>
                    <p className=" text-xl max-w-80 text-gray-500">We are a passionate team dedicated to providing the best services to our customers.</p>
                </div>
                <div className="flex flex-col gap-4 ">
                    <h1 className="text-3xl">Quick links</h1>
                    <ul className="text-gray-500 text-xl list-disc list-inside">
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-3xl">Subscribe</h1>
                    <p className="max-w-80 text-xl text-gray-500">Subscribe to our newsletter for the latest updates.</p>
                    <form className="flex flex-row items-center justify-center">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="text-xl bg-white w-full md:w-[300px] text-black rounded-r-none lg:w-[400px] p-3 border  rounded-lg"
                        />
                        <button
                            type="submit"
                            onClick={(e) => {
                                e.preventDefault();

                                if (!email) {
                                    toast.error("Please enter an email address");
                                    return;
                                }
                                if (isValidEmail(email)) {
                                    toast.success("Subscribed successfully!");
                                    setEmail("");
                                    localStorage.setItem("email", email);
                                } else {
                                    toast.error("Please enter a valid email address.");
                                }
                            }}
                            className="rounded-l-none  text-black text-lg font p-3 rounded-lg bg-gradient-to-br to-[#de84b5] from-[#f9cf5f]"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            <hr className="border-gray-700 w-full py-2" />
            <p className="text-gray-400">{new Date().getFullYear()} Your Company All Rights Reserved.</p>
        </footer>
    );
}

export default Footer;