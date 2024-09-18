import { RouterProvider } from "react-router-dom";
import { router } from "./router"
import UserContext from '../context/user.js'
import { useState } from "react";

function App() {

  const [profile, setProfile] = useState({
    image: "",
    username: "",
    level: 0,
    coin: 0
  })

  return (
    <>
      <UserContext.Provider value={{profile, setProfile}}>
        <RouterProvider router = {router}/>
      </UserContext.Provider>
    </>
  );
}

export default App;
