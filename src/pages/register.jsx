import Books from "../components/books";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import Swal from "sweetalert2";

export default function Register() {

  const navigate = useNavigate()

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  async function handleRegister(e){
    e.preventDefault()
    console.log("MASUk");
    try {
        const requestBody = {name, username, email, password}
        console.log(name, username, email, password)
        const response = await axios.post("https://server.zoombooz.online/register", requestBody)
        console.log(response)
        Swal.fire({
            title: "Account Created!",
            text: "Please Login!",
            icon: "success"
        });
        navigate("/login")
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
          <h2 className="mb-12 text-center text-5xl font-extrabold text-black" style={{color : "#80BCBD"}}>
            PintarLabs
          </h2>
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label className="block mb-1 text-gray-500" htmlFor="username">
                Username
              </label>
              <input
                id="username"
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="py-2 px-3 border bg-white text-gray-500 border-gray-300 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-gray-500" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="py-2 px-3 border bg-white text-gray-500 border-gray-300 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
              />
            </div>
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
                Sign up
              </button>
            </div>
            <div className="mt-6 text-center">
              <Link to={"/login"} className="underline text-blue-500">
                Sign in with an existing account
              </Link>
            </div>
          </form>
        </div>
        <Books />
      </div>
    </>
  );
}
