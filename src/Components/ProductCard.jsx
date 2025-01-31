import axios from 'axios'
import React, { useContext } from 'react'
import { FaRegHeart } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'

const ProductCard = ({title,img1,img2,price,id}) => {
    const initialize = {title,img1,img2,price}
    const { theme } = useContext(ThemeContext);


    const addToCart = () => {
        axios
          .post("https://tanglee-back.onrender.com/cart",initialize)
          .then((res) => {
            console.log(res.data);
            alert("add to product");
          })
          .catch((err) => console.log(err));
      };
  return (
    <div>
       <div
            key={id}
            style={{
              width: "452px",
              border: "1px solid rgb(234, 234, 234)",
              marginTop: "30px",
            }}
          >
            <Link to={`/description/${id}`}>
              <div className="hover-switch">
                <img
                  src={img1}
                  style={{ height: "450px", width: "450px" }}
                  alt=""
                />
                <img
                  src={img2}
                  style={{ height: "450px", width: "450px" }}
                  alt=""
                />
              </div>
            </Link>
            <div
              className=""
              style={{
                backgroundColor:
                  theme == "light" ? "rgb(245, 244, 244)" : "black",
                width: "450px",
              }}
            >
              <div style={{ fontFamily: "sans-serif", marginTop: "20%" }}>
                <div
                  className="pt-5"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "85%",
                    margin: "auto ",
                  }}
                >
                  <p style={{ color: theme == "light" ? "black" : "white" }}>
                    {title}
                  </p>
                 
                  <p style={{ color: theme == "light" ? "black" : "white" }}>
                    {price}
                  </p>
                  <div ><FaRegHeart /></div>
                </div>

                <button
                  
                  className="button mt-3"
                  onClick={addToCart}
                  style={{
                    color: theme == "light" ? "black" : "white",
                    border:
                      theme == "light" ? "1px solid black" : "1px solid white",
                  }}
                >
                  ADD TO BAG - {price}
                </button>
              </div>
            </div>
          </div>
    </div>
  )
}

export default ProductCard
