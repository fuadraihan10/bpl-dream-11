import React, { useState } from "react";
import { useEffect } from "react";
import Player from "./player";
import SelectedPlayers from "./SelectedPlayers";

function MainSec({activeId, setActiveId, setCoins , coins, selectedPlayers, setSelectedPlayers, email , setEmail }) {


    const [players, setPlayers] = useState([]);


    useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
        setEmail(storedEmail);
        const localSelectedPlayers = localStorage.getItem("selectedPlayers")
        if (localSelectedPlayers){
            setSelectedPlayers(JSON.parse(localSelectedPlayers))
        }
    }}, [setEmail,setSelectedPlayers]);

    useEffect(() => {
        fetch("../../../public/data.json")
            .then((response) => response.json())
            .then((data) => {
                setPlayers(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    function availableFunc() {
        setActiveId("available");
    }
    function selectedFunc() {
        setActiveId("selected");
    }

    return (
    <div className="max-w-screen-2xl mx-auto mt-14">
        <div className="flex justify-between items-center p-4 ">
                <h2 className="md:text-3xl text-md font-bold">Available Players</h2>
            <div>
                <button id="available" onClick={availableFunc} className={`md:text-xl text-sm text-black px-2 py-1 rounded-l-xl border-r-0  border border-gray-200 md:px-4 md:py-2 ${activeId === "available" ? "bg-[#e7fe29]" : ""}`}>Available</button>
                <button id="selected" onClick={selectedFunc} className={`md:text-xl text-sm px-2 py-1 rounded-r-xl border border-l-0 border-gray-200 md:px-4 md:py-2 ${activeId === "selected" ? "bg-[#e7fe29]" : ""}`}>Selected {selectedPlayers.length}</button>
            </div>

        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8 ${activeId === "selected" ? "hidden" : ""}`}>
            {players.map((player, index) => (
                <Player key={index} email={email} player={player} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} coins={coins} setCoins={setCoins} />
            ))}
        </div>
        <div className={` ${activeId === "available" ? "hidden" : ""} space-y-8`}>
            <div>{
                selectedPlayers.map((player, index) => (
                    <SelectedPlayers key={index} email={email} player={player} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers} />
                ))}</div>

                <div className="flex ">
                    <div className={`rounded-xl border border-gray-700`}>
                        <button
                        onClick={availableFunc} 
                        className={`bg-[#e7fe29] font-bold text-black sm:py-3 sm:px-5 py-1 px-2 m-2 rounded-xl`}
                        >
                        Add More Players
                        </button>

                    </div>
                </div>
            </div>
        </div>
  );
}

export default MainSec;