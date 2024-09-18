import { Link, useNavigate } from "react-router-dom";
import '../assets/global.css';
import Books from "../components/books";
import { useState } from "react"
import axios from "axios"
import Swal from "sweetalert2"

export default function Login() {

  const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    async function handleLogin(e){
        e.preventDefault()
        try {
            const requestBody = {email, password}
            console.log(email, password)
            const response = await axios.post("https://server.zoombooz.online/login", requestBody)
            console.log(response.data.accessToken)
            localStorage.setItem("accessToken", response.data.accessToken)
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

  return (
    <>
      <div className="w-full min-h-screen bg-yellow-50 flex sm:flex-row sm:justify-center items-center pt-6 sm:pt-0">
        <Books />
        <div className="w-full sm:max-w-md p-5 mx-auto">
          <h2 className="mb-12 text-center text-5xl font-extrabold" style={{color : "#80BCBD"}}>PintarLabs</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block mb-1 text-gray-500" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="py-2 px-3 border bg-white text-gray-500 border-gray-300 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-gray-500" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="py-2 px-3 border bg-white text-gray-500 border-gray-300 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
              />
            </div>
            <div className="mt-6">
              <button type="submit" className="w-full inline-flex items-center justify-center px-4 py-2 bg-teal-300 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-teal-400 active:bg-teal-700 focus:outline-none focus:border-teal-700 focus:ring focus:ring-teal-200 disabled:opacity-25 transition">
                Sign In
              </button>
            </div>
            <div className="mt-6 text-center">
              <Link to={"/register"} className="underline text-blue-500">
                Sign up for an account
              </Link>
            </div>
          </form>
        </div>
        <Books />
      </div>
    </>
  );
}
