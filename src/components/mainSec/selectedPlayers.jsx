import { MdOutlineDelete } from "react-icons/md";
function SelectedPlayers({ player, setSelectedPlayers, selectedPlayers }) {
    console.log(player);
     return (
        <div className="flex flex-row items-center justify-between bg-white p-4 px-3 py-7 rounded-lg shadow-md mb-4">
            <div className="flex items-center space-x-4">
                <img src={player.player_image} className="w-16 h-16 rounded-full" alt={player.cricketer_name} />
                <div className="flex flex-col">
                    <h2>{player.cricketer_name}</h2>
                    <p>{player.role}</p>
                </div>
                <h2>{player.rating.price} $</h2>
            </div>
            <button onClick={() => {
                const updatedPlayers = selectedPlayers.filter(p => p.cricketer_name !== player.cricketer_name);
                setSelectedPlayers(updatedPlayers);
            }}><MdOutlineDelete /></button>
           
        </div>
     );
 }

export default SelectedPlayers;
