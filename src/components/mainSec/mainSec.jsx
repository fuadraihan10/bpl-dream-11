import React, { useState } from "react";
import { useEffect } from "react";
import Player from "./player";
import SelectedPlayers from "./SelectedPlayers";

function MainSec({ setCoins , coins, selectedPlayers, setSelectedPlayers }) {

    const [activeId, setActiveId] = useState("available");
    const [players, setPlayers] = useState([]);

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
    <div className="max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-center p-4 ">
                <h2 className="md:text-2xl text-md font-bold">Available Players</h2>
            <div>
                <button id="available" onClick={availableFunc} className={`md:text-xl text-sm text-black px-2 py-1 rounded-l-xl border-r-0  border border-gray-200 md:px-4 md:py-2 ${activeId === "available" ? "bg-yellow-300" : ""}`}>Available</button>
                <button id="selected" onClick={selectedFunc} className={`md:text-xl text-sm px-2 py-1 rounded-r-xl border border-l-0 border-gray-200 md:px-4 md:py-2 ${activeId === "selected" ? "bg-yellow-300" : ""}`}>Selected {selectedPlayers.length}</button>
            </div>

        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 ${activeId === "selected" ? "hidden" : ""}`}>
            {players.map((player, index) => (
                <Player key={index} player={player} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} coins={coins} setCoins={setCoins} />
            ))}
        </div>
        <div>
            {
                selectedPlayers.map((player, index) => (
                    <SelectedPlayers key={index} player={player} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers} />
                ))}
        </div>
    </div>
  );
}

export default MainSec;