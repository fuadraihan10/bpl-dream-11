import { MdOutlineDelete } from "react-icons/md";

function SelectedPlayers({player, setSelectedPlayers, selectedPlayers, email}) {
     return (
        <div className="flex flex-row items-center justify-between bg-white px-4 py-5 rounded-xl border border-gray-300 mb-4">
            <div className="flex items-center space-x-4">
                <img src={player.player_image} className="w-16 h-16 rounded-2xl" alt={player.cricketer_name} />
                <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-semibold">{player.cricketer_name}</h2>
                    <p className="text-gray-500">{player.role}</p>
                </div>
                <h2 className="text-md font-semibold">{player.rating?.price} $</h2>
            </div>
            <button className="text-red-500 text-2xl" onClick={() => {
                const updatedPlayers = selectedPlayers.filter(p => p.cricketer_name !== player.cricketer_name);
                setSelectedPlayers(updatedPlayers);
                if(email){
                    localStorage.setItem("selectedPlayers", JSON.stringify(updatedPlayers));

                }
            }}><MdOutlineDelete /></button>
           
        </div>
        
     );
 }

export default SelectedPlayers;
