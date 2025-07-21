
import './App.css'
import Header from './components/header/header.jsx'
import MainSec from './components/mainSec/mainSec.jsx'
import { useState } from 'react';


function App() {

  const [selectedPlayers, setSelectedPlayers] = useState([]);
  

  return (
    <>
      {/*---------- header -------------- */}
      <Header></Header>
      <MainSec selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} />
    </>
  )
}



export default App
