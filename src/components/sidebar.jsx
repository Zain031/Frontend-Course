import { Link, useNavigate } from "react-router-dom";
import profileLogo from "../assets/profile.svg"
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import UserContext from "../../context/user";

const navListStyle = "flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-green-50 hover:bg-opacity-80 focus:bg-green-50 focus:bg-opacity-80 active:bg-green-50 active:bg-opacity-80 text-white hover:text-gray-400 hover:border hover:border-gray-300 focus:text-green-900 active:text-green-900 outline-none"

export default function SideBar() {

  const navigate = useNavigate();

  // const [profile, setProfile] = useState({
  //   image: "",
  //   username: "",
  //   level: 0,
  //   coin: 0
  // })
  
  const user = useContext(UserContext)

  const [loading, setLoading] = useState(false)

  useEffect(() => {
      async function fetchData(){
          const {data : response} = await axios("https://server.zoombooz.online/profile", {
              method : "GET",
              headers : {
                  "Authorization" : `Bearer ${localStorage.getItem("accessToken")}`
              }
          })
          user.setProfile({
              image : response.user.image,
              username : response.user.username,
              level : Math.floor(response.userStat.stats.exp / 1000),
              coin : response.userStat.stats.coin
          })
      }
      fetchData()
  }, [])

  return (
      <div className=" relative flex flex-col bg-clip-border text-gray-700 h-min-full w-full max-w-[20rem] p-4 shadow-xl shadow-green-900/5" style={{backgroundColor : "#80BCBD"}}>
        <div className="mb-2 p-4">
          <h5 className="block antialiased tracking-normal font-extrabold text-3xl text-white">
            Pintar Lab
          </h5>
        </div>
        <div className="flex flex-col mr-16 mb-8 mt-4" style={{alignItems : "center", justifyContent : "center"}}>
          <img src={profileLogo} style={{height : 100, width : 100}} />
          <h1 className="text-white text-xl">{user.profile.username}</h1>
          <h1 className="text-white">Level : {user.profile.level}</h1>
          <h1 className="text-white">Coin : {user.profile.coin} 🪙</h1>
        </div>
        <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
          <div
            role="button"
            tabIndex={0}
            className={navListStyle}
          >
            <div className="grid place-items-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="h-5 w-5"
                stroke="white"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <Link to={"/users"}> Profile </Link>
          </div>
          <div
            role="button"
            tabIndex={0}
            className={navListStyle}
          >
            <div className="grid place-items-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>
            </div>
            <Link to={"/my-courses"} className=""> My Courses </Link>
          </div>
          <div
            role="button"
            tabIndex={0}
            className={navListStyle}
          >
            <div className="grid place-items-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>
            </div>
            <Link to={"/courses"}> Courses </Link>
          </div>
          <div
            role="button"
            tabIndex={0}
            className={navListStyle}
          >
            <div className="grid place-items-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
                />
              </svg>
            </div>
            <Link to={"/achievements"}> Achievement </Link>
          </div>

          <div
            role="button"
            tabIndex={0}
            className={navListStyle}
          >
            <div className="grid place-items-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
                />
              </svg>
            </div>
            <Link to={"/leaderboard"}> Leaderboard </Link>
          </div>
          {/* <div
            role="button"
            tabIndex={0}
            className={navListStyle}
          >
            <div className="grid place-items-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </div>
            <Link to={"/shop"}> Shop </Link>
          </div> */}
          <div
            role="button"
            tabIndex={0}
            className={navListStyle}
          >
            <div className="grid place-items-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                aria-hidden="true"
                className="h-5 w-5"
                stroke="white"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <button
              className=""
              onClick={() => {
                localStorage.removeItem("accessToken");
                localStorage.removeItem("id");
                localStorage.removeItem("status");
                navigate("/");
              }}
            >
              Log Out
            </button>
          </div>
        </nav>
      </div>
  );
}
