// -----------importing images-----------
import logo from '../../assets/assets/logo.png'
import coin from '../../assets/assets/dollar.png'

function Nav() {

  return (
    // ------------main-div-----------
    <div className="nav flex items-center justify-between mx-32">
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
  )
}

export default Nav
