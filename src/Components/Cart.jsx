import React, { useContext, useEffect, useState } from "react";
import "/src/App.css";
import axios from "axios";
import { ThemeContext } from "../context/ThemeContext";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";
import { useParams } from "react-router-dom";

const Cart = () => {
  const [getdata, setgetdata] = useState([]);
  const { theme } = useContext(ThemeContext);
  const {id}=useParams()

  const GetCartData = () => {
    axios
      .get("https://tanglee-back.onrender.com/cart")
      .then((res) => {
        console.log(res.data);
        setgetdata(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    GetCartData();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://tanglee-back.onrender.com/cart/${id}`)
      .then((res) => {
        console.log(res.data);
        alert("Data Deleted....");
        GetCartData();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div style={{ paddingBottom: "15.3%" }}>
      <h1 className="" style={{ textAlign: "center", color:theme=="light"? "black" : "white"}}>
        CART PAGE
      </h1>
      
<div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)"}}>
      {getdata.map((el) => (
        <div style={{ width: "90%",border:theme=="light"? "1px solid black":"1px solid white",margin:"10px auto" }}>
          
          <div style={{display:"flex",justifyContent:"space-between",height:"150px",alignItems:"center",padding:"20px"}}>
            <div>
              <div className="hover-switch" style={{width:"10%"}} >
                <img
                  src={el.img1}
                  style={{ height: "100px", width: "100px",marginTop:"8%",border:"1px solid grey" }}
                  alt=""
                />
                <img
                  src={el.img2}
                  style={{ height: "100px", width: "100px",marginTop:"8%",border:"1px solid grey" }}
                  alt=""
                />
              </div>
            </div>
           
            <div style={{width:"30%",marginLeft:"10%"}}>{el.title}</div>
           
            <div style={{width:"5%"}}>{el.price}</div>
            <div>
           <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarHalf /> 
           </div>
            <div>
            <button onClick={()=>handleDelete(el.id)} style={{backgroundColor:theme=="light"? "black":"white",color:theme== "light"? "white":"black",border:"none",borderRadius:"10px",fontSize:"13px",padding:"10px 18px"}}>DELETE</button>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Cart;
