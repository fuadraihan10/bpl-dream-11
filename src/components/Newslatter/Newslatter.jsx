import img from "../../assets/assets/bg-shadow.png";
import { toast } from 'react-toastify';
import React, { useEffect, useState } from "react";

function Newslatter({selectedPlayers}) {
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const [email, setEmail] = useState("");
    useEffect(() => {
        const storedEmail = localStorage.getItem("email");
        if (storedEmail) {
            setEmail(storedEmail);
        }
    }
    , []);

    return (
        <div className="border border-gray-200 rounded-lg shadow-md p-4 m-6 max-w-screen-2xl mx-auto mt-10 relative z-10 top-50">
            <div
                className="relative gap-6 text-center py-18 justify-center flex bg-white flex-col border border-gray-300 rounded-lg p-6"
                style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    opacity: 0.95, // Optional: adjust visual blending
                }}
            >
                <h2 className="text-5xl font-bold">Subscribe to our Newsletter</h2>
                <p className="text-2xl bold text-gray-600">
                    Get the latest updates and news right in your inbox!
                </p>
                <form className="flex flex-col md:flex-row gap-6 items-center justify-center">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        className="text-2xl w-full md:w-[400px] lg:w-[500px] p-3 border border-gray-300 rounded-lg"
                    />
                    <button
                        type="submit"
                        className="text-gray-400 text-2xl font p-3 rounded-lg bg-amber-200"
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
                                localStorage.setItem("selectedPlayers", JSON.stringify([...selectedPlayers]));
                            } else {
                                toast.error("Please enter a valid email address.");
                            }
                        }}
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Newslatter;
