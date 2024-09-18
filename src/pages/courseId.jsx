import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function CourseId() {

    const {id} = useParams()

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [page, setPage] = useState(0)

    useEffect(() => {
        async function fetchData(){
            try {
                setLoading(true)
                const {data : response} = await axios(`https://server.zoombooz.online/course/my-course/${id}`, {
                    method : "GET",
                    headers : {
                        "Authorization" : `Bearer ${localStorage.getItem("accessToken")}`
                    }
                })
                console.log(response, "<<<<<<<<<<<<<<<<<<");
                setData(response.response)
            } catch (error) {
                console.log(error);
                setError("Something's wrong")
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    async function handleComplete(index){
        try {
            const requestBody = {courseTitle : id, index, section : page}
            console.log();
            const response = await axios.post("https://server.zoombooz.online/course/complete-course", requestBody, {
                headers : {
                    "Authorization" : `Bearer ${localStorage.getItem("accessToken")}`
                }
            })
            console.log(response);
            const {data : response2} = await axios(`https://server.zoombooz.online/course/my-course/${id}`, {
                    method : "GET",
                    headers : {
                        "Authorization" : `Bearer ${localStorage.getItem("accessToken")}`
                    }
            })
            Swal.fire({
                title: "Good Job!",
                text: response.data.message,
                icon: "success"
            });
            setData(response2.response)
        } catch (error) {
            console.log(error);
        }
    }

    if(loading){
        return (<div>Loading ...</div>)
    }

    if(error){
        return (<div>Error : {error}</div>)
    }

    return (
        <div className="overflow-y-scroll w-full p-8">
            <div className="flex justify-between">
                {data.map((item, index) => (
                    <button className="text-xl flex-auto ml-5 mt-5 btn btn-ghost" onClick={() => setPage(index)}
                    >
                        {item.sections.title}
                    </button>
                ))}
            </div>
            <div>
                <div className="hero h-full w-full bg-white flex">
                    <div className="hero-content flex-col lg:flex-row -scroll-mt-2.5 w-full">
                        <div className="w-full">
                            <h1 className="text-5xl text-black font-bold mb-8">{data[page]?.sections.title}</h1>
                            <div className="space-y-4">
                                {data[page]?.sections.content.map((item, index) => (
                                    <details className="group [&_summary::-webkit-details-marker]:hidden" open>
                                        <summary
                                        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                                        >
                                        <h2 className="font-medium">{item.type}</h2>

                                        <svg
                                            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                        </summary>

                                        <p className="mt-4 px-4 leading-relaxed text-gray-700">
                                        {item.type === "video" ? <a href={item.content} target='_blank'>Go to youtube</a> : item.content}
                                        </p>
                                        <button onClick={() => handleComplete(index)} className='bg-gray-100 text-gray-500 p-2 rounded-lg hover:bg-gray-400 hover:text-white ' disabled={item.isComplete}>{item.isComplete ? "Completed" : "Complete"}</button>
                                    </details>
                                ))}
                            </div>
                            <Link to={`/quiz/${id}&&${data[page]?.sections.title}`}>
                                <button className="btn btn-ghost text-black">Quiz!</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
