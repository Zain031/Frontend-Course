import axios from "axios";
import { useEffect, useState } from "react";

// const user = {
//     name: 'Tony Simatupang',
//     email: 'tompang@example.com',
//     location: "Cirebon",
//     username: 'sitoni',
//     avatar: 'https://png.pngtree.com/png-clipart/20230308/ourmid/pngtree-cool-logo-with-retro-character-png-image_6639995.png',
//     achievements: [
//         "Completed Level 1",
//         "Reached 100 Points",
//         "Featured in Top 10",
//         "Earned Gold Badge",
//     ]
// };

export default function Profile() {

    const [data, setData] = useState({})
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
                console.log(response.userStat.stats.exp, "<<<");
                setData(response)
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
        <div className="overflow-y-scroll bg-gray-100 w-full p-8">
            <div className="bg-white  w-full h-full shadow-md rounded-lg overflow-hidden">
                <div className="flex flex-col px-6 py-4">
                    <div className="flex justify-center">
                        <img
                            className="h-24 w-24 rounded-full"
                            src={data.user?.image ? data.user.image : "https://picsum.photos/200"}
                            alt={data.user?.name}
                        />
                    </div>
                    <div className="h-full mt-4" style={{textAlign : "center"}}>
                        <h2 className="text-xl font-semibold text-gray-500">{data.user?.name}</h2>
                        <p className="text-gray-600 text-sm">{data.user?.username}</p>
                        <p className="text-gray-600 text-sm">{data.user?.email}</p>
                    </div>
                </div>

                <span className="relative flex justify-center">
                    <div
                        className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                    ></div>

                    <span className="relative z-10 bg-white px-6">* * *</span>
                </span>

                <div className="px-6 py-4 flex justify-center">
                    <div className="flow-root w-full">
                        <h2 className="text-xl font-semibold text-gray-500 mb-8" style={{textAlign : "center"}}>User Stats</h2>
                        <dl className="-my-3 divide-y divide-gray-100 text-sm">
                            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-gray-900">Exp</dt>
                                <dd className="text-gray-700 sm:col-span-2">{data.userStat?.stats.exp}</dd>
                            </div>

                            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-gray-900">Coins</dt>
                                <dd className="text-gray-700 sm:col-span-2">{data.userStat?.stats.coin}</dd>
                            </div>

                            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-gray-900">Unlocked Course</dt>
                                <dd className="text-gray-700 sm:col-span-2">{data.userStat?.stats.courseUnlocked}</dd>
                            </div>

                            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-gray-900">Quiz Answered</dt>
                                <dd className="text-gray-700 sm:col-span-2">{data.userStat?.stats.quizAnswered}</dd>
                            </div>

                            {/* <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-gray-900">Bio</dt>
                                <dd className="text-gray-700 sm:col-span-2">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et facilis debitis explicabo
                                    doloremque impedit nesciunt dolorem facere, dolor quasi veritatis quia fugit aperiam
                                    aspernatur neque molestiae labore aliquam soluta architecto?
                                </dd>
                            </div> */}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
        
    )
}