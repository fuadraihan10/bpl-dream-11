  import { toast } from 'react-toastify';
import { CgProfile } from "react-icons/cg";
import { FaFlag } from "react-icons/fa6";

function Player({ coins,setCoins,player, selectedPlayers, setSelectedPlayers,email }) {
    return (
        <div className="p-6 gap-5 flex flex-col bg-white rounded-xl overflow-hidden border border-gray-300 shadow-sm hover:shadow-md transition-shadow">
            <div className="relative w-full aspect-[10/6] overflow-hidden">
                <img 
                    src={player.player_image} 
                    alt={player.cricketer_name} 
                    className="w-full h-full object-cover rounded-xl "
                />
            </div>


            <div className=" space-y-4">

                <div className="flex items-center space-x-2">
                    <CgProfile className='w-6 h-6 text-black' />
                    <h3 className="font-bold text-black text-lg">{player.cricketer_name}</h3>
                </div>
                

                <div className="flex items-center justify-between text-sm text-gray-600">
                    <span className='flex items-center text-md gap-2'><FaFlag />{player.country}</span>
                    <span className='border text-black border-gray-200 px-3 py-1 rounded-lg bg-[#f3f3f3]'>{player.role}</span>
                </div>
                <hr />

                <h1 className="text-sm text-black md:text-lg font-bold">Rating</h1>
                <div className="flex flex-row  justify-between space-y-1">
                    <div>
                        <div className="text-sm text-black md:text-lg font-semibold">{player.rating.batting_hand}</div>
                    </div>
                    <div>
                        <div className="text-lg text-gray-900">{player.rating.bowling_hand}</div>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                    <div className="text-sm text-black md:text-lg font-semibold">price: {player.rating.price}</div>
                    <button onClick={() => {
                        if (!selectedPlayers.includes(player)) {
                            if (selectedPlayers.length >= 6) {
                                toast.error("You can only select up to 6 players");
                                return;
                            }
                            if (coins < player.rating.price) {
                                toast.error("Insufficient coins to select this player");
                                return;
                            }
                            toast.success(`${player.cricketer_name} selected successfully!`);
                            setCoins(coins - player.rating.price);
                            
                            setSelectedPlayers([...selectedPlayers, player]);
                            if (email) {
                                localStorage.setItem("coins", coins - player.rating.price);
                                localStorage.setItem("selectedPlayers", JSON.stringify([...selectedPlayers, player]));
                            }
                        }
                        else {
                            toast.error("Player already selected");
                        }
                    }} className="bg-gray-50 border border-gray-700 text-gray-900 px-4 py-1.5 rounded-lg text-md font-medium transition-colors">
                        Choose Player
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Player;
