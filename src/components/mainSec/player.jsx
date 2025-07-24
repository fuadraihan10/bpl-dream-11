  import { toast } from 'react-toastify';

function Player({ coins,setCoins,player, selectedPlayers, setSelectedPlayers }) {
    return (
        <div className="flex flex-col bg-white rounded-xl overflow-hidden border border-gray-300 shadow-sm hover:shadow-md transition-shadow">
            <div className="relative w-full aspect-[4/3] overflow-hidden">
                <img 
                    src={player.player_image} 
                    alt={player.cricketer_name} 
                    className="w-full h-full object-cover rounded-t-xl"
                />
            </div>


            <div className="p-4 space-y-3">

                <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                    </svg>
                    <h3 className="font-semibold text-gray-800">{player.cricketer_name}</h3>
                </div>
                

                <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{player.country}</span>
                    <span className='border border-gray-300 px-2 py-1 rounded-md bg-slate-100'>{player.role}</span>
                </div>
                <hr />

                <h1 className="text-sm text-gray-600 text-xl font-bold">Rating</h1>
                <div className="flex flex-row  justify-between space-y-1">
                    <div>
                        <div className="text-sm font-medium text-gray-800">{player.rating.batting_hand}</div>
                    </div>
                    <div>
                        <div className="text-sm font-medium text-gray-800">{player.rating.bowling_hand}</div>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                    <div className="text-gray-800 font-bold">price: {player.rating.price}</div>
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
                            setCoins(coins - player.rating.price);
                            setSelectedPlayers([...selectedPlayers, player]);
                        }
                        else {
                            toast.error("Player already selected");
                        }
                    }} className="bg-white border border-gray-200 text-black px-4 py-1.5 rounded-lg text-sm font-medium transition-colors">
                        Choose Player
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Player;
