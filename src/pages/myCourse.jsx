import axios from "axios";
import Card from "../components/card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MyCourses() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchData(){
            try {
                setLoading(true)
                const response = await axios("https://server.zoombooz.online/course/my-course", {
                    headers : {
                        "Authorization" : `Bearer ${localStorage.getItem("accessToken")}`
                    }
                })
                setData(response.data.myCourse)
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
        <div className="overflow-y-scroll w-full flex flex-wrap">
            {data.map((item, index) => (
                <div className=" justify-center">
                    <div className=" bg-transparent flex-auto justify-center items-center h-full ml-10 mt-4 ">
                        <div className="w- p-6 bg-green-100 rounded-xl shadow-xl hover:shadow-xl hover:scale-105 transition-all transform duration-500">
                            <img
                            className="w-64 object-cover rounded-t-md"
                            src="https://images.unsplash.com/photo-1509223197845-458d87318791"
                            alt=""
                            />
                            <div className="mt-4">
                                <h1 className="text-2xl font-bold text-gray-700">{item.name}</h1>
                                {/* <p className="text-sm mt-2 text-gray-700">COURSE.DESCRIPTION</p> */}
                    
                                <div className="mt-4 mb-2 flex justify-between pl-4 pr-2">
                                    <Link
                                    to={`/courses/${item.name}`}
                                    className="text-lg w-full font-semibold py-2 text-gray-500 hover:text-green-20 bg-green-50 rounded-lg shadow hover:shadow-md transition duration-300"
                                    style={{textAlign : "center"}}
                                    >
                                    Explore
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
