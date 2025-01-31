import React, { useContext, useEffect, useState } from "react";
import "/src/App.css";
import axios from "axios";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import ProductCard from "./ProductCard";


const Products = ({img1,img2,title,price,id}) => {
  

  // pagination
  const [data, setdata] = useState([]);
  const [page, setpage] = useState(1);
  const { theme } = useContext(ThemeContext);
  const [order, setorder] = useState(null);
  const [search, setsearch] = useState("");




  const GetData = () => {
    axios
      .get(`https://tanglee-back.onrender.com/product`, {
        params: {
          _page: page,
          _limit: 6,
          _sort: "price",
          _order: order,
          q: search,
        },
      })
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    GetData();
  }, [page, order, search]);

  
  
  

  return (
    <div>
      <div>
        <h1
          className="mt-4"
          style={{
            color: theme,
            fontFamily: "sans-serif",
            fontSize: "52px",
            fontWeight: "bolder",
            marginLeft: "40px",
          }}
        >
          Products
        </h1>
        <p
          className="mt-4"
          style={{ fontSize: "14px", width: "40%", marginLeft: "40px" }}
        >
          Whether you want to detangle, dry style, blow-dry or care for your
          scalp, we have a hairbrush and tool for every stroke of your routine.
          You can choose by hair type or hair concern. We even have brushes for
          kids and pets to make healthy hair a family affair.
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="mt-5" style={{ marginLeft: "40px" }}>
          <button
            onClick={() => setorder("asc")}
            style={{
              border: theme == "light" ? "none" : "1px solid white",
              backgroundColor: theme == "light" ? "#f3e3e6" : "black",
              color: theme == "light" ? "black" : "white",
              padding: "10px 15px",
              borderRadius: "10px",
              fontSize: "12px",
            }}
          >
            LOW TO HIGH
          </button>
          <button
            onClick={() => setorder("desc")}
            className="ms-3"
            style={{
              border: theme == "light" ? "none" : "1px solid white",
              backgroundColor: theme == "light" ? "#f3e3e6" : "black",
              color: theme == "light" ? "black" : "white",
              padding: "10px 15px",
              borderRadius: "10px",
              fontSize: "12px",
            }}
          >
            HIGH TO LOW
          </button>
        </div>

        <div className="mt-5 me-5">
          <input
            type="text"
            className="input"
            placeholder="SEARCH HERE..."
            onChange={(e) => setsearch(e.target.value)}
            style={{
              border: theme == "light" ? "none" : "1px solid white",
              backgroundColor: theme == "light" ? "#f3e3e6" : "black",
              color: theme == "light" ? "black" : "white",
              padding: "10px 80px 10px 10px",
              borderRadius: "10px",
              fontSize: "12px",
            }}
          />
          <IoSearchOutline
            style={{
              color: theme == "light" ? "grey" : "white",
              marginLeft: "-10%",
            }}
          />
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          marginLeft: "40px",
          marginTop: "20px",
        }}
      >
        {data.map((el) => (

          <div>
            <ProductCard 
            id={el.id}
            img1={el.img1}
            img2={el.img2}
            title={el.title}
            price={el.price}/>
          </div>
         
        ))}
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <button
          className="p-btn"
          disabled={page == 1}
          style={{
            border: theme == "light" ? "1px solid black" : "1px solid white",
            color: theme == "light" ? "black" : "white",
          }}
          onClick={() => setpage(page - 1)}
        >
          <FaChevronLeft />
        </button>
        <span className="m-2 ms-4">{page}</span>
        <button
          className="p-btn ms-3"
          disabled={page == 5}
          style={{
            border: theme == "light" ? "1px solid black" : "1px solid white",
            color: theme == "light" ? "black" : "white",
          }}
          onClick={() => setpage(page + 1)}
        >
          <FaChevronRight />
        </button>
      </div>

      <div>
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-md-12">
              <h1
                style={{
                  textAlign: "center",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                }}
              >
                Shop by hair type
              </h1>
            </div>
            <div
              className="col-md-11  d-lg-flex d-sm-block mt-5"
              style={{ marginLeft: "5%" }}
            >
              <div className="col-3" style={{ fontFamily: "sans-serif" }}>
                <img
                  style={{ borderRadius: "5px" }}
                  src="https://tangleteezer.com/cdn/shop/files/TT.com_Shop_by_Hair_Type_Straight_to_Wavy_318x440_04758105-84d7-4d98-9370-ce9d9d7421cb.jpg?v=1706009758&width=450"
                  alt=""
                />
                <h3 className="mt-3">
                  <b>Straight & Wavy</b>
                </h3>
                <p style={{ fontSize: "12px" }}>
                  <FaArrowRightLong />
                  <span className="ms-3">SHOP NOW</span>
                </p>
              </div>
              <div className="col-3" style={{ fontFamily: "sans-serif" }}>
                <img
                  style={{ borderRadius: "5px" }}
                  src="https://tangleteezer.com/cdn/shop/files/TT.com_Shop_by_Hair_Type_Fine_Fragile_318x440_870c5d4d-61d3-475b-b56b-4e2e2a7bf4c7.jpg?v=1706009740&width=450"
                  alt=""
                />
                <h3 className="mt-3" style={{ fontFamily: "sans-serif" }}>
                  <b>Fine or Fragile</b>
                </h3>
                <p style={{ fontSize: "12px" }}>
                  <FaArrowRightLong />
                  <span className="ms-3">SHOP NOW</span>
                </p>
              </div>
              <div className="col-3" style={{ fontFamily: "sans-serif" }}>
                <img
                  style={{ borderRadius: "5px" }}
                  src="https://tangleteezer.com/cdn/shop/files/TT.com_Shop_by_Hair_Type_Thick_Loose_Waves_318x440_155b275e-b211-417f-93d5-b060e8216c23.jpg?v=1706009776&width=450"
                  alt=""
                />
                <h3 className="mt-3" style={{ fontFamily: "sans-serif" }}>
                  <b>Thick or Curly</b>
                </h3>
                <p style={{ fontSize: "12px" }}>
                  <FaArrowRightLong />
                  <span className="ms-3">SHOP NOW</span>
                </p>
              </div>
              <div className="col-3" style={{ fontFamily: "sans-serif" }}>
                <img
                  style={{ borderRadius: "5px" }}
                  src="https://tangleteezer.com/cdn/shop/files/TT.com_Shop_by_Hair_Type_Curly_to_Coily_318x440_d39554bb-b343-4c6f-9171-7ac2b11646d1.jpg?v=1706009792&width=450"
                  alt=""
                />
                <h3 className="mt-3" style={{ fontFamily: "sans-serif" }}>
                  <b>Tight Curls & Coils</b>
                </h3>
                <p style={{ fontSize: "12px" }}>
                  <FaArrowRightLong />
                  <span className="ms-3">SHOP NOW</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container-fluid mt-5 pt-5">
          <div className="row">
            <div className="col-12 d-flex">
              <div className="col-3 mt-5">
                <h2
                  className="ms-3 mt-5"
                  style={{
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    fontSize: "52px",
                  }}
                >
                  Tips & Tricks
                </h2>
              </div>
              <div className="col-3">
                <img
                  height={350}
                  style={{ borderRadius: "10px" }}
                  src="https://tangleteezer.com/cdn/shop/files/Navigation_Scalp_care_1.jpg?v=1709653296&width=450"
                  alt=""
                />
                <div className="ms-2">
                  <p
                    style={{
                      fontFamily: "sans-serif",
                      fontWeight: "bold",
                      marginTop: "10px",
                    }}
                  >
                    Benefits of A Scalp Massage
                  </p>
                  <p style={{ fontSize: "12px" }}>
                    <FaArrowRightLong />
                    <span className="ms-3">LEARN MORE</span>
                  </p>
                </div>
              </div>
              <div className="col-3">
                <img
                  height={350}
                  style={{ borderRadius: "10px" }}
                  src="https://tangleteezer.com/cdn/shop/files/TT.com_Homepage_Pet_Guide_Dog_460x548_3c33b08a-01ef-48b0-afae-633c815c5db8.jpg?v=1708098112&width=450"
                  alt=""
                />
                <div className="ms-2">
                  <p
                    style={{
                      fontFamily: "sans-serif",
                      fontWeight: "bold",
                      marginTop: "10px",
                    }}
                  >
                    How To Clean Your Brush
                  </p>
                  <p style={{ fontSize: "12px" }}>
                    <FaArrowRightLong />
                    <span className="ms-3">READ GUID</span>
                  </p>
                </div>
              </div>
              <div className="col-3">
                <img
                  height={350}
                  style={{ borderRadius: "10px" }}
                  src="https://tangleteezer.com/cdn/shop/files/Screenshot_2024-03-05_at_15.38.48.png?v=1709653296&width=450"
                  alt=""
                />
                <div className="ms-2">
                  <p
                    style={{
                      fontFamily: "sans-serif",
                      fontWeight: "bold",
                      marginTop: "10px",
                    }}
                  >
                    Dog breed & brush guide
                  </p>
                  <p style={{ fontSize: "12px" }}>
                    <FaArrowRightLong />
                    <span className="ms-3">READ GUID</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container-fluid mt-5 pt-5">
          <div className="row">
            <div
              className="col-12 mt-5 pt-3"
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "70%",
                margin: "auto",
              }}
            >
              <img
                height={80}
                src="https://tangleteezer.com/cdn/shop/files/2024_Beauty_Award_Winner.png?v=1720100331&width=450"
                alt=""
              />
              <img
                height={80}
                src="https://tangleteezer.com/cdn/shop/files/Consumer_Choice_Award_-_Winner_Seal.png?v=1720100331&width=450"
                alt=""
              />
              <img
                height={80}
                src="https://tangleteezer.com/cdn/shop/files/WOMAN_HOME2023_BEAUTY_AWARDS_WINNER_SEAL_240X240_b53fd879-6dec-4558-8165-54d361d5ac73.jpg?v=1714665496&width=450"
                alt=""
              />
              <img
                height={80}
                src="https://tangleteezer.com/cdn/shop/files/Get_The_Gloss_Beauty_Awards_2023_Bronze_Badge.png?v=1714665246&width=450"
                alt=""
              />
              <img
                height={80}
                src="https://tangleteezer.com/cdn/shop/files/2023_Consumer_Choice_Award_WINNER_1.png?v=1714665248&width=450"
                alt=""
              />
              <img
                height={80}
                src="https://tangleteezer.com/cdn/shop/files/CEW_2023_BEAUTY_AWARDS_WINNER_SEAL_2.png?v=1714665246&width=450"
                alt=""
              />
              <img
                height={80}
                src="https://tangleteezer.com/cdn/shop/files/Consumer_Choice_Award_2022.png?v=1714664847&width=450"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container-fluid mt-5 p-5">
          <div className="row">
            <div className="col-12" style={{ display: "flex" }}>
              <div className="col-3">
                <h6 style={{ fontWeight: "bolder" }}>Contact Us</h6>
                <h6 style={{ fontWeight: "bolder" }}>Delivery & Returns</h6>
                <h6 style={{ fontWeight: "bolder" }}>Help and FAQS</h6>
              </div>
              <div className="col-2" style={{ fontSize: "13px" }}>
                <p style={{ fontWeight: "bolder" }}>Tangle Teezer</p>
                <p>About Us</p>
                <p>Recycle Your Hairbrush</p>
                <p>Careers</p>
              </div>
              <div className="col-2" style={{ fontSize: "13px" }}>
                <p style={{ fontWeight: "bolder" }}>Legal</p>
                <p>Terms & Conditions</p>
                <p>Privacy Notice</p>
                <p>Cookie Notice</p>
                <p>Modern Slavery</p>
                <p>Counterfeits/QR Codes</p>
                <p>Corporate Social Responsibility</p>
                <p>Sustainability</p>
              </div>
              <div className="col-5">
                <p>
                  Sign up to our newsletter for<b> 10% off your first order!</b>
                </p>
                <input
                  type="email"
                  style={{ padding: "10px 350px 10px 10px" }}
                  placeholder="Email Address"
                />
                <p className="mt-2" style={{ fontSize: "11px" }}>
                  By submitting your details, you confirm that you agree to the
                  storing and processing of your personal data by<br></br>{" "}
                  Tangle Teezer as described in our ‘Privacy Notice’
                </p>
                <div style={{ fontSize: "30px", marginTop: "15%" }}>
                  <FaInstagram className="ms-2" />
                  <FaYoutube className="ms-5" />
                  <FaFacebook className="ms-5" />
                  <FaXTwitter className="ms-5" />
                  <FaPinterest className="ms-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
