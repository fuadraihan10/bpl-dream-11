import { MdOutlineDelete } from "react-icons/md";
function SelectedPlayers({ player}) {
    console.log(player);
     return (
        <div className="flex flex-row items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4">
            <div className="flex items-center space-x-4">
                <img src={player.player_image} className="w-16 h-16 rounded-full" alt={player.cricketer_name} />
                <div className="flex flex-col">
                    <h2>{player.cricketer_name}</h2>
                    <p>{player.role}</p>
                </div>
            </div>
           <MdOutlineDelete />
        </div>
     );
 }

export default SelectedPlayers;
