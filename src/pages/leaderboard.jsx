import axios from "axios"
import { useEffect, useState } from "react"  

export default function LeaderBoard() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchData(){
            try {
                setLoading(true)
                const {data} = await axios("https://server.zoombooz.online/leaderboard", {
                    method : "GET", 
                    headers : {
                        "Authorization" : `Bearer ${localStorage.getItem("accessToken")}`
                    }
                })
                console.log(data, "RESPONSE LEADERBOARD");
                setData(data.user)
            } catch (error) {
                console.log(error);
                setError("Something's wrong")
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    if(loading){
        return (<div>Loading ...</div>)
    }

    if(error){
        return (<div>Error : {error}</div>)
    }

    return (
        <div className="overflow-y-scroll w-full bg-gray-100 p-8">
            <div className="bg-white shadow-md rounded-lg overflow-hidden ">
                <div className="bg-emerald-200 px-4 py-2 font-bold text-gray-500">Leaderboard</div>
                <ul>
                    {data.map((item, index) => (
                        <li key={index} className="border-b border-gray-200">
                            <div className="bg-white flex items-center justify-between px-4 py-3">
                                <div className="flex items-center">
                                    <span className="font-semibold mr-2 text-gray-500">{++index}.</span>
                                    <span className="font-semibold mr-2 text-gray-500">{item.username}</span>
                                </div>
                                <span className="text-gray-600">{item.Stats.stats.exp} exp</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}