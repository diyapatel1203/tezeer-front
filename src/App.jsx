import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Allroutes from "./Routes/Allroutes";
import Navbar from "./Components/Navbar";
import { ThemeContext } from "./context/ThemeContext";


function App() {
  const {theme}=useContext(ThemeContext)
  return (
    <>
    <div style={{backgroundColor:theme=="light"?"white":"black",color:theme=="light"?"black":"white"}}>
      <Navbar />
      <Allroutes />
      </div>
    </>
  );
}

export default App;
