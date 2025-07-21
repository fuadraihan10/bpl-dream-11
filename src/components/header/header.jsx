// -----------importing images-----------
import logo from '/src/assets/assets/logo.png'
import coin from '/src/assets/assets/dollar.png'
import bg from '/src/assets/assets/bg-shadow.png'
import bannner from '/src/assets/assets/banner-main.png'
import { useState } from 'react'




function Header() {

  const [coins, setCoins] = useState(0);

  function handleClaimFreeCredit() {
    setCoins(coins + 1000);
  }

  return (
    // -----------Header-----------
    <div>
      {/* ---------bav-bar--------- */}
      <div className="p-3 nav flex items-center justify-between max-w-screen-2xl mx-auto py-8">
        {/* ----logo------ */}
        <img className='w-18'  src={logo} alt="logo" />
        {/* ---------nav-items container----------- */}
      <div className='flex items-center'>
        {/* -------------nav-items---------- */}
        <div className='hidden md:flex space-x-8 items-center mr-8'>
          <p className='text-gray-500 hover:text-gray-700 cursor-pointer'>Home</p>
          <p className='text-gray-500 hover:text-gray-700 cursor-pointer'>Team</p>
          <p className='text-gray-500 hover:text-gray-700 cursor-pointer'>Matches</p>
          <p className='text-gray-500 hover:text-gray-700 cursor-pointer'>Contact</p>
        </div>
        {/* ------------coin------------ */}
        <div className='flex items-center space-x-2 border border-gray-200 rounded-lg px-3 py-2'>
            <p>{coins} Coins</p>
            <img className='w-5 flex ' src={coin} alt="coin" />

        </div>
      </div>
    </div>


      {/* -----------Banner----------- */}
      <div className=' bg-black max-w-screen-2xl mx-auto rounded-3xl relative overflow-hidden'>
        <div className='absolute inset-0 md:gap-3 gap-1 flex flex-col items-center justify-center z-10 text-white'>
         <img className='w-32 md:w-64' src={bannner} alt="criket" />
         <p className='text-xl lg:text-4xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</p>
         <p className='text-md md:text-2xl semibold text-gray-400'>Beyond Boundaries Beyond Limits</p>
         <button onClick={handleClaimFreeCredit} className="bg-yellow-300 text-black sm:py-2 sm:px-4 py-1 px-2 rounded">Claim Free Credit</button>

        </div>
        <img className="w-full" src={bg} alt="background" />
      </div>
      
    </div>

  )
}

export default Header
