import img from "../../assets/assets/bg-shadow.png";

function Newslatter() {
    return (
        <div className="border border-gray-200 rounded-lg shadow-md p-4 m-6 max-w-screen-2xl mx-auto mt-10">
            <div
                className="relative gap-6 text-center py-18 justify-center flex flex-col border border-gray-300 rounded-lg p-6"
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
                        className="text-2xl w-full md:w-[400px] lg:w-[500px] p-3 border border-gray-300 rounded-lg"
                    />
                    <button
                        type="submit"
                        className="text-black text-2xl font-semibold p-3 rounded-lg"
                        style={{
                            backgroundImage: "linear-gradient(to bottom right, purple 1%, #FBBF24 99% opacity: 0.5)"
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
