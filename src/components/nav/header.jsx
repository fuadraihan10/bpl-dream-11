// -----------importing images-----------
import logo from '../../assets/assets/logo.png'
import coin from '../../assets/assets/dollar.png'
import bg from '../../assets/assets/bg-shadow.png'
import bannner from '../../assets/assets/banner-main.png'

function Header() {

  return (
    // -----------Header-----------
    <div>
      {/* ---------bav-bar--------- */}
      <div className="nav flex items-center justify-between max-w-screen-2xl mx-auto py-8">
        {/* ----logo------ */}
        <img className='w-18'  src={logo} alt="logo" />
        {/* ---------nav-items container----------- */}
      <div className='flex space-x-12 items-center'>
        {/* -------------nav-items---------- */}
        <p className='text-gray-500'>Home</p>
        <p className='text-gray-500'>Team</p>
        <p className='text-gray-500'>Matches</p>
        <p className='text-gray-500'>Contact</p>
        {/* ------------coin------------ */}
        <div className='flex items-center space-x-2 border border-gray-200 rounded-lg px-3 py-2'>
            <p>0 Coins</p>
            <img className='w-5 flex ' src={coin} alt="coin" />

        </div>
      </div>
    </div>


      {/* -----------Banner----------- */}
      <div className='bg-black max-w-screen-2xl mx-auto rounded-3xl relative overflow-hidden'>
        <div className='absolute inset-0 flex flex-col items-center justify-center z-10 text-white'>
         <img src={bannner} alt="criket" />
         <p>Assemble Your Ultimate Dream 11 Cricket Team</p>
         <p>Beyond Boundaries Beyond Limits</p>
         <button>Claim Free Credit</button>

        </div>
        <img className="w-full" src={bg} alt="background" />
      </div>
      
    </div>

  )
}

export default Header
