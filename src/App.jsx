import './App.css';
import Header from './components/header/header.jsx';
import MainSec from './components/mainSec/mainSec.jsx';
import Newslatter from './components/Newslatter/Newslatter.jsx';
import Footer from './components/footer/Footer.jsx';
import { useState } from 'react';
import { ToastContainer} from 'react-toastify';

function App() {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [coins, setCoins] = useState(0);

  return (
    <>

      {/*---------- header -------------- */}
      <Header coins={coins} setCoins={setCoins} />
      <MainSec
        coins={coins}
        setCoins={setCoins}
        selectedPlayers={selectedPlayers}
        setSelectedPlayers={setSelectedPlayers}
      />
      <ToastContainer />
      <Newslatter />
      <Footer />
    </>
  );
}

export default App;
