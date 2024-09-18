import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import UserContext from "../../context/user";

export default function Quiz() {
    const navigate = useNavigate()
    const params = useParams()
    const charIndex = ["A", "B", "C", "D"]

    const user = useContext(UserContext)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [form, setForm] = useState({
        1 : "",
        2 : "",
        3 : "",
        4 : "",
        5 : "",
        6 : "",
        7 : "",
        8 : "",
        9 : "",
        10 : ""
    })

    useEffect(() => {
        async function fetchData(){
            try {
                setLoading(true)
                const [courseTitle, sectionTitle] = params.id.split("&&")
                const requestBody = {courseTitle, title : sectionTitle}
                const {data : response} = await axios.post("https://server.zoombooz.online/course/get-quiz", requestBody, {
                    headers : {
                        "Authorization" : `Bearer ${localStorage.getItem("accessToken")}`
                    }
                })
                const result = response.response.sections.quiz
                console.log(result);
                setData(result)
            } catch (error) {
                console.log(error);
                setError("Something's wrong")
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    async function handleQuiz(e){
        e.preventDefault()
        try {
            const [courseTitle, sectionTitle] = params.id.split("&&")
            const requestBody = {
                answers : form,
                courseTitle,
                title : sectionTitle
            }
            const response = await axios.post('https://server.zoombooz.online/course/submit-quiz', requestBody, {
                headers : {
                    "Authorization" : `Bearer ${localStorage.getItem("accessToken")}`
                }
            })
            // console.log(response, "SUBMIT QUIZ <<<<<<>>>>>>");
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
                title: "Good job!",
                text: response.data.message,
                icon: "success"
            });
            navigate(`/courses/${courseTitle}`)
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

    return(
        <div className="overflow-y-scroll p-8 w-4/5 bg-gray-100">
            <div className="bg-white rounded-lg p-8 shadow-lg">
                <h1 className="mb-5 text-xl text-black font-bold">Quiz</h1>
                <form onSubmit={handleQuiz}>
                    {data.map((question, index) => (
                        <div key={index}>
                                <h1 className="my-5 text-gray-500">{question.number}. {question.questions}</h1>
                                {question.options.map((option, index) => (
                                    <div className="flex items-center mb-4" key={index}>
                                        <input onChange={(e) => {let answer = {...form}; answer[question.number] = e.target.value; setForm(answer)}} id={`${question.number}-${option[charIndex[index]]}`} type="radio" value={charIndex[index]} name={`${question.number}}`} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"/>
                                        <label htmlFor={`${question.number}-${option[charIndex[index]]}`}  className="ms-2 text-sm font-medium text-gray-500">{option[charIndex[index]]}</label>
                                    </div>
                                ))}
                        </div>
                    ))}
                    <button type="submit" className="bg-emerald-300 text-white p-2 rounded-lg w-full my-16 hover:bg-emerald-400">Submit</button>
                </form>
            </div>
        </div>
    )
}