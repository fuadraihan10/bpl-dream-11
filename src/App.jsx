import './App.css';
import Header from './components/header/Header.jsx';
import MainSec from './components/mainSec/MainSec.jsx';
import Newslatter from './components/Newslatter/Newslatter.jsx';
import Footer from './components/footer/Footer.jsx';
import { useState } from 'react';
import { ToastContainer} from 'react-toastify';
import React from 'react';

function App() {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [coins, setCoins] = useState(0);
  const [email, setEmail] = useState("");
  const [activeId, setActiveId] = useState("available");

  return (
    <>

      {/*---------- header -------------- */}
      <Header coins={coins} setCoins={setCoins} email={email}  activeId={activeId}/>
      <MainSec
        coins={coins}
        setCoins={setCoins}
        selectedPlayers={selectedPlayers}
        setSelectedPlayers={setSelectedPlayers}
        email={email}
        setEmail={setEmail}
        activeId={activeId}
        setActiveId={setActiveId}
      />
      <ToastContainer />
      <Newslatter selectedPlayers={selectedPlayers} />
      <Footer />
    </>
  );
}

export default App;
