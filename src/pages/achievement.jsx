import axios from "axios";
import { useEffect, useState } from "react"


export default function Achievement() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchData(){
            try {
                setLoading(true)
                const {data : response} = await axios("https://server.zoombooz.online/profile", {
                    method : "GET",
                    headers : {
                        "Authorization" : `Bearer ${localStorage.getItem("accessToken")}`
                    }
                })
                console.log(response, "RESPONSE ACHIEVEMENT");
                setData(response.userAchievement.achievements)
            } catch (error) {
                console.log(error);
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
        <div className="overflow-y-scroll container mx-auto px-4 bg-gray-100">
            <h1 className="text-3xl text-center font-extrabold text-gray-500 mt-8 mb-4">
                Your Achievements
            </h1>
            <div className="grid grid-cols-1 p-8 md:grid-cols-3 gap-4 md:flex md:flex-col">
                {data.map((item, index) => (
                    <div
                    key={index}
                    className="flex w-full bg-white rounded-lg shadow-md p-6 flex items-center flex-wrap justify-center"
                    >
                        <div className="w-11/12">
                            <div className="flex mb-2">
                                <h2 className={item.status ? "text-md bg-purple-100 px-2.5 py-0.5 rounded-full text-purple-700 font-semibold" : "text-md bg-gray-100 px-2.5 py-0.5 rounded-full text-gray-700 font-semibold"}>
                                    {item.name}
                                </h2>
                            </div>
                            <p className="mb-4 text-gray-500">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
