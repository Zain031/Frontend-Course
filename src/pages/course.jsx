import axios from "axios";
import Card from "../components/card";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/user";

export default function Courses() {

    const navigate = useNavigate()

    const user = useContext(UserContext)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchData(){
            try {
                setLoading(true)
                const response = await axios("https://server.zoombooz.online/course", {
                    headers : {
                        "Authorization" : `Bearer ${localStorage.getItem("accessToken")}`
                    }
                })
                setData(response.data.courseData)
            } catch (error) {
                console.log(error);
                setError("Something's wrong")
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    async function handleUnlockCourse(id){
        try {
            const response = await axios.post("https://server.zoombooz.online/course/unlock-course", 
                {courseId : id},
                {headers : {
                    "Authorization" : `Bearer ${localStorage.getItem("accessToken")}`
                }}
            )
            const {data : response2} = await axios("https://server.zoombooz.online/profile", {
              method : "GET",
              headers : {
                  "Authorization" : `Bearer ${localStorage.getItem("accessToken")}`
              }
            })
            user.setProfile({
                image : response2.user.image,
                username : response2.user.username,
                level : Math.floor(response2.userStat.stats.exp / 1000),
                coin : response2.userStat.stats.coin
            })
            Swal.fire({
                title: "Good Job!",
                text: "Course Unlocked!",
                icon: "success"
            });
            navigate("/my-courses")
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.response.data.message
            });
        }
    }

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
                                <div className="flex">
                                    <h1 className=" w-1/2 text-2xl font-bold text-gray-700">{item.name}</h1>
                                    <p className="w-1/2  block text-xl font-semibold text-gray-700 cursor-auto" style={{textAlign : "right"}}>
                                    {item.cost} 🪙
                                    </p>
                                </div>
                                {/* <p className="text-sm mt-2 text-gray-700">COURSE.DESCRIPTION</p> */}
                    
                                <div className="mt-4 mb-2 flex justify-between pl-4 pr-2">
                                    
                                    <button
                                    className="w-full text-lg block font-semibold py-2 px-6 text-gray hover:text-green-20 bg-green-50 rounded-lg shadow hover:shadow-md transition duration-300"
                                    onClick={() => handleUnlockCourse(item._id)}
                                    >
                                    Unlock
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
