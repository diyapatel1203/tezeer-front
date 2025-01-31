import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "/src/App.css";
import { IoPersonOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { ThemeContext } from "../context/ThemeContext";
import { IoSunnySharp } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { signOut } from 'firebase/auth'
import { auth } from '../services/firebase'

const Navbar = () => {
  const { theme, ThemeContextFunction } = useContext(ThemeContext);

  const handleLogout=()=>{
    signOut(auth)
    .then((res)=>{
        console.log(res)
        alert("Logout...")
    })
    .catch((err)=>console.log(err))
}

  return (
    <div
      className="d-sm-none d-lg-flex"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        margin: "auto",

        backgroundColor: theme == "light" ? "white" : "black",
        // position:"fixed",
        // zIndex:"1",
        padding: "10px",
      }}
    >
      <div className="menu ms-3">
        <NavLink
          style={{ color: theme == "light" ? "black" : "white" }}
          to={"/hairtype"}
        >
          Hair Type
        </NavLink>
        <NavLink
          style={{ color: theme == "light" ? "black" : "white" }}
          to={"/hairconcern"}
        >
          Hair Concern
        </NavLink>
        <NavLink
          style={{ color: theme == "light" ? "black" : "white" }}
          to={"/product"}
        >
          Products
        </NavLink>
        <NavLink
          style={{ color: theme == "light" ? "black" : "white" }}
          to={"/petteezer"}
        >
          Pet Teezer
        </NavLink>
      </div>

      
        <div>
        <NavLink to={"/"}>
          {theme == "light" ? (
            <img
              style={{  }}
              height={70}
              src="/src/assets/logo.png"
              alt=""
            />
          ) : (
            <img
              style={{ }}
              height={75}
              src="/src/assets/logo1.png"
              alt=""
            />
          )}
        </NavLink>
        </div>
    
      <div className="menu d-flex me-4" >
        
        <div>
        <NavLink
        
          style={{ color: theme == "light" ? "black" : "white" }}
          onClick={ThemeContextFunction}
        >
          {theme == "light" ? <FaMoon className="mt-2 fs-7"/> : <IoSunnySharp className="fs-6 mt-1"/>}
        </NavLink>
        </div>
        <NavLink style={{ color: theme == "light" ? "black" : "white",fontSize: "20px" }} to={"/login"}>
          <IoPersonOutline />
        </NavLink>
        <div>
        <NavLink
          style={{
            color: theme == "light" ? "black" : "white",
            fontSize: "20px",
    
          }}
          to={"/cart"}
        >
          <IoCartOutline />
        </NavLink>
        <button style={{border:"none",backgroundColor:"transparent",fontSize:"13px",fontFamily:"sans-serif",color:theme=="light"?"black":"white"}} onClick={handleLogout}>LOGOUT</button>
        </div>
        
      </div>

    </div>
  );
};

export default Navbar;
