import { createBrowserRouter, redirect } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Login from "./pages/login";
import Register from "./pages/register";
import Courses from "./pages/course";
import Layout from "./pages/layout";
import CourseId from "./pages/courseId";
import Quiz from "./pages/quiz";
import Achievement from "./pages/achievement";
import Shop from "./pages/shop";
import Profile from "./pages/profile";
import MyCourses from "./pages/myCourse";
import LeaderBoard from "./pages/leaderboard";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    loader : async () => {
      if(localStorage.getItem("accessToken")){
          throw redirect("/my-courses")
      }
      return null
    }
  },
  {
    path: "/login",
    element: <Login />,
    loader : async () => {
      if(localStorage.getItem("accessToken")){
          throw redirect("/my-courses")
      }
      return null
    }
  },
  {
    path: "/register",
    element: <Register />,
    loader : async () => {
      if(localStorage.getItem("accessToken")){
          throw redirect("/my-courses")
      }
      return null
    }
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/courses",
        element: <Courses />,
        loader : async () => {
          if(!localStorage.getItem("accessToken")){
              throw redirect("/login")
          }
          return null
        }
      },
      {
        path: "/my-courses",
        element: <MyCourses />,
        loader : async () => {
          if(!localStorage.getItem("accessToken")){
              throw redirect("/login")
          }
          return null
        }
      },
      {
        path: "/courses/:id",
        element: <CourseId />,
        loader : async () => {
          if(!localStorage.getItem("accessToken")){
              throw redirect("/login")
          }
          return null
        }
      },
      {
        path: "/quiz/:id",
        element: <Quiz />,
        loader : async () => {
          if(!localStorage.getItem("accessToken")){
              throw redirect("/login")
          }
          return null
        }
      },
      {
        path: "/achievements",
        element: <Achievement />,
        loader : async () => {
          if(!localStorage.getItem("accessToken")){
              throw redirect("/login")
          }
          return null
        }
      },
      {
        path: "/users",
        element: <Profile />,
        loader : async () => {
          if(!localStorage.getItem("accessToken")){
              throw redirect("/login")
          }
          return null
        }
      },
      {
        path: "/shop",
        element: <Shop />,
        loader : async () => {
          if(!localStorage.getItem("accessToken")){
              throw redirect("/login")
          }
          return null
        }
      },
      {
        path: "/leaderboard",
        element: <LeaderBoard />,
        loader : async () => {
          if(!localStorage.getItem("accessToken")){
              throw redirect("/login")
          }
          return null
        }
      }
    ],
  },
]);
