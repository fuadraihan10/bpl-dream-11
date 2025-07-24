
import './App.css'
import Header from './components/header/header.jsx'
import MainSec from './components/mainSec/mainSec.jsx'
import { useState } from 'react';


function App() {

  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [coins, setCoins] = useState(0);

  return (
    <>
      {/*---------- header -------------- */}
      <Header coins={coins} setCoins={setCoins} />
      <MainSec coins={coins} setCoins={setCoins} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} />
    </>
  )
}



export default App
