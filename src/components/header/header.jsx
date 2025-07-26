// ----------- Importing images and dependencies -----------
import logo from '/src/assets/assets/logo.png';
import coin from '/src/assets/assets/dollar.png';
import bg from '/src/assets/assets/bg-shadow.png';
import bannner from '/src/assets/assets/banner-main.png';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

function Header({ coins, setCoins , email , activeId}) {
  useEffect(() => {
    const storedCoins = localStorage.getItem("coins");
    if (storedCoins) {
      setCoins(parseInt(storedCoins)); 
    }
  }, [setCoins]);

  function handleClaimFreeCredit() {
    const newCoins = coins + 1000000;
    if (email){
      
      localStorage.setItem("coins", newCoins);
    }
    setCoins(newCoins)
    toast.success("You have claimed 1,000,000 free credits!");
    
  }

  return (
    <div>
      {/* --------- Nav Bar --------- */}
      <div className="p-3 nav flex items-center justify-between max-w-screen-2xl mx-auto py-8">
        {/* ---- Logo ---- */}
        <img className="w-18" src={logo} alt="logo" />

        {/* ---- Nav Items Container ---- */}
        <div className="flex items-center">
          {/* ---- Nav Items ---- */}
          <div className="hidden md:flex gap-18 items-center mr-8">
            <p className="text-gray-500 hover:text-gray-700 cursor-pointer">Home</p>
            <p className="text-gray-500 hover:text-gray-700 cursor-pointer">Fixture</p>
            <p className="text-gray-500 hover:text-gray-700 cursor-pointer">Teams</p>
            <p className="text-gray-500 hover:text-gray-700 cursor-pointer">Schedule</p>
          </div>

          {/* ---- Coins ---- */}
          <div className="flex items-center space-x-2 border border-gray-200 rounded-lg px-3 py-2">
            <p>{coins.toLocaleString()} Coins</p>
            <img className="w-5 flex" src={coin} alt="coin" />
          </div>
        </div>
      </div>

      {/* ----------- Banner ----------- */}
      <div className="bg-black max-w-screen-2xl mx-auto rounded-3xl relative overflow-hidden">
        <div className="absolute inset-0 md:gap-3 gap-1 flex flex-col items-center justify-center z-10 text-white text-center px-4">
          <img className="w-20 md:w-64" src={bannner} alt="cricket" />
          <p className="text-md lg:text-4xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</p>
          <p className="text-sm md:text-2xl font-semibold text-gray-400">Beyond Boundaries Beyond Limits</p>
              <div className={`rounded-xl border ${activeId === "available" ? "border-[#e7fe29]" : "border-white"}`}>
                  <button
                  onClick={handleClaimFreeCredit}
                  className={`${activeId === "available" ? "bg-[#e7fe29]" : "bg-gradient-to-br from-[#de84b5] to-[#f9cf5f]"} text-black sm:py-3 sm:px-5 py-1 px-2 m-2 rounded-xl`}
                >
                  Claim Free Credit
                </button>
              </div>
        </div>
        <img className="w-full opacity-50" src={bg} alt="background" />
      </div>
    </div>
  );
}

export default Header;
