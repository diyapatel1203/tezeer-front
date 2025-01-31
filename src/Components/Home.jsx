import React, { useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";
import '/src/App.css'

const Home = () => {
  const { theme, ThemeContextFunction } = useContext(ThemeContext);
  return (
    <div>
     {/* 1 */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Carousel >
            <Carousel.Item>
                <video
                  height={861}
                  src="/src/assets/video1.mp4"
                  controls
                  autoPlay
                  loop
                ></video>
                <Carousel.Caption>
                  <div
                    style={{
                      marginRight: "85%",
                      marginTop: "-15%",
                      color: "white",
                      fontFamily: "sans-serif",
                    }}
                  >
                    <h3 style={{ fontSize: "30px" }}>#GetYourHairInTheGame</h3>
                    <button
                      style={{
                        backgroundColor: "transparent",
                        border: "1px solid white",
                        color: "white",
                        padding: "18px 20px",
                      }}
                    >
                      SHOP NOW
                    </button>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  height={750}
                  src="https://tangleteezer.com/cdn/shop/files/TT.com_Homepage_Banner_Block_1440x700_Plant_Brush.png?v=1719563378&width=1550"
                  alt=""
                />
                <Carousel.Caption>
                  <div
                    style={{
                      marginTop: "-60%",
                      color: "black",
                      fontFamily: "sans-serif",
                      textAlign: "left",
                    }}
                  >
                    <h3 style={{ fontSize: "60px" }}>Meet The Plant Brush</h3>
                    <p style={{ fontSize: "20px" }}>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                      Lorem ipsum dolor sit amet.
                    </p>
                    <button
                      style={{
                        backgroundColor: "transparent",
                        border: "1px solid black",
                        color: "black",
                        padding: "18px 20px",
                      }}
                    >
                      SHOP NOW
                    </button>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  height={750}
                  src="https://tangleteezer.com/cdn/shop/files/TT.com_Homepage_Banner_Block_1440x700_Hair_Types.jpg?v=1706009352&width=1550"
                  alt=""
                />
                <Carousel.Caption>
                  <div
                    style={{
                      marginTop: "-60%",
                      color: "black",
                      fontFamily: "sans-serif",
                      marginLeft: "70%",
                      textAlign: "right",
                      width: "40%",
                    }}
                  >
                    <h3 style={{ fontSize: "60px" }}>
                      Your Hairs,Your Goals,Your Routine
                    </h3>
                    <p style={{ fontSize: "20px" }}>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <button
                      style={{
                        backgroundColor: "transparent",
                        border: "1px solid black",
                        color: "black",
                        padding: "18px 20px",
                      }}
                    >
                      SHOP NOW
                    </button>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="">
                <div className="img">
                  <img
                    height={680}
                    src="https://tangleteezer.com/cdn/shop/files/Sports24_TUD_MP__Comped_2997x1332_42c46a8d-8e35-42bf-96f7-ca9ae3c566ac.jpg?v=1720801527&width=1550"
                    alt=""
                  />
                </div>
                <Carousel.Caption>
                  <div
                    className=""
                    style={{
                      color: "white",
                      fontFamily: "sans-serif",
                      textAlign: "left",
                      marginRight: "30px",
                      marginTop: "-55%",
                    }}
                  >
                    <h3 style={{ fontSize: "60px" }}>
                      Get your hair in the game
                    </h3>
                    <p style={{ fontSize: "20px" }}>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                    <button
                      style={{
                        backgroundColor: "transparent",
                        border: "1px solid white",
                        color: "white",
                        padding: "18px 20px",
                        textDecoration: "none",
                      }}
                    >
                      SHOP NOW
                    </button>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
      
      {/* 2 */}
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
              className="res-2 col-md-12  col-lg-11 d-lg-flex d-sm-block mt-5"
            
            >
              <div className="col-sm-6 m-sm-auto col-md-5 col-lg-3 col-3" style={{ fontFamily: "sans-serif" }}>
                <img 
                className="res-2-img"
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
              <div className="col-sm-6 m-sm-auto col-md-5 col-lg-3 col-3 " style={{ fontFamily: "sans-serif" }}>
                <img
                className="res-2-img"
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
              <div className="col-sm-6 m-sm-auto col-md-5 col-lg-3 col-3" style={{ fontFamily: "sans-serif" }}>
                <img
                className="res-2-img"
                  style={{ borderRadius: "5px" }}
                  src="https://tangleteezer.com/cdn/shop/files/TT.com_Shop_by_Hair_Type_Thick_Loose_Waves_318x440_155b275e-b211-417f-93d5-b060e8216c23.jpg?v=1706009776&width=450"
                  alt=""
                />
                <h3 className="mt-3 " style={{ fontFamily: "sans-serif" }}>
                  <b>Thick or Curly</b>
                </h3>
                <p style={{ fontSize: "12px" }}>
                  <FaArrowRightLong />
                  <span className="ms-3">SHOP NOW</span>
                </p>
              </div>
              <div className="col-sm-6 m-sm-auto col-md-5 col-lg-3 col-3" style={{ fontFamily: "sans-serif" }}>
                <img
                className="res-2-img"
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

{/* 3 */}
      <div>
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-12">
              <img
                className="img-3 ms-5 ms-sm-0 ms-md-0 ms-lg-5"
                style={{ borderRadius: "10px" }}
                height={600}
                src="https://tangleteezer.com/cdn/shop/files/TT.com_Homepage_Healthy_Hair_Quiz_1360x584_a0233d23-02e9-4ec1-8f1f-9bcf33b6f736.jpg?v=1706009859&width=1550"
                alt=""
              />
            </div>
            <div
              className="col-12"
              style={{ textAlign: "center", marginTop: "-38%" }}
            >
              <h1
              className="res-text"
                style={{
                  textAlign: "center",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  color: theme == "light" ? "black" : "black"
                }}
              >
                Restyle your routine
              </h1>
              <p style={{ fontFamily: "sans-serif", fontSize: "16px",color: theme == "light" ? "black" : "black" }}>
                Unsure how to put the care in haircare? Discover the tools you
                need to turn your hair goals into a<br></br> reality.
              </p>
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid black",
                  color: "black",
                  padding: "18px 20px",
                }}
              >
                TAKE THE QUIK
              </button>
            </div>
          </div>
        </div>
      </div>

{/* 4 */}
      <div>
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-12">
              <h1
                style={{
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                As seen in
              </h1>
            </div>
            <div
              style={{
                
                justifyContent: "space-around",
                alignItems: "center",
                width: "80%",
                margin: "auto",
              }}
              className="col-12 mt-5 d-flex d-sm-block d-lg-flex"
            >
              <div>
                {theme=="light"?<img
                  src="https://tangleteezer.com/cdn/shop/files/VOGUE_LOGO_1.png?v=1699462541&width=450"
                  alt=""
                /> :<img
                height={100}
                  src="/src/assets/vogue.png"
                  alt=""
                />}
                
                
              </div>
              <div>
                {theme=="light"?<img
                  src="https://tangleteezer.com/cdn/shop/files/Refinery29_logo_1.png?v=1699462540&width=450"
                  alt=""
                />:<img
                
                src="/src/assets/refinary.png"
                alt=""
              />}
                
              </div>
              <div>
                {theme=="light"?<img
                  src="https://tangleteezer.com/cdn/shop/files/Harper_s_Bazaar_Logo_1.png?v=1699462541&width=450"
                  alt=""
                /> : <img height={100}
                src="/src/assets/bazzar.png"
                alt=""
              />}
                
              </div>
              <div>
                {theme=="light"? <img
                  src="https://tangleteezer.com/cdn/shop/files/Allure_logo_1.png?v=1699462541&width=450"
                  alt=""
                /> : <img
                height={150}
                src="/src/assets/allure.png"
                alt=""
              />}
                
              </div>
            </div>
          </div>
        </div>
      </div>

{/* 5 */}
      <div>
        <div
          className="container-fluid mt-5 p-5"
          style={{ backgroundColor: theme=="light"? "rgb(245, 244, 244)":"black" }}
        >
          <div className="row">
            <div className="col-12">
              <h1
                style={{
                  textAlign: "center",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  fontSize: "52px",
                  
                }}
              >
                Loved by You!
              </h1>
              <p
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "16px",
                  textAlign: "center",
                 
                }}
              >
                Our products are tried and tested by you, our loyal community.
              </p>
            </div>
            <div
              className="col-12 mt-3"
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <img
                style={{ height: "350px" }}
                src="https://cdn-yotpo-images-production.yotpo.com/instagram/43/18029593075871243/low_resolution.jpg"
                alt=""
              />
              <img
                style={{ height: "350px" }}
                src="https://cdn-yotpo-images-production.yotpo.com/instagram/99/18296248927146599/low_resolution.jpg"
                alt=""
              />
              <img
                style={{ height: "350px" }}
                src="https://cdn-yotpo-images-production.yotpo.com/instagram/84/18007116626170684/low_resolution.jpg"
                alt=""
              />
              <img
                style={{ height: "350px" }}
                src="https://cdn-yotpo-images-production.yotpo.com/instagram/74/17939979818633174/low_resolution.jpg"
                alt=""
              />
              <img
                style={{ height: "350px" }}
                src="https://cdn-yotpo-images-production.yotpo.com/instagram/70/17844664164106770/low_resolution.jpg"
                alt=""
              />
            </div>
            <div
              className="col-12 mt-1"
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <img
                style={{ height: "350px" }}
                src="https://cdn-yotpo-images-production.yotpo.com/instagram/72/18020738533880572/low_resolution.jpg"
                alt=""
              />
              <img
                style={{ height: "350px" }}
                src="https://cdn-yotpo-images-production.yotpo.com/instagram/17/17959748936546217/low_resolution.jpg"
                alt=""
              />
              <img
                style={{ height: "350px" }}
                src="https://cdn-yotpo-images-production.yotpo.com/instagram/79/18208025830302179/low_resolution.jpg"
                alt=""
              />
              <img
                style={{ height: "350px" }}
                src="https://cdn-yotpo-images-production.yotpo.com/instagram/16/18019580440837516/low_resolution.jpg"
                alt=""
              />
              <img
                style={{ height: "350px" }}
                src="https://cdn-yotpo-images-production.yotpo.com/instagram/76/17971120592478376/low_resolution.jpg"
                alt=""
              />
            </div>
            <div
              className="col-12 mt-1"
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <img
                style={{ height: "350px" }}
                src="https://cdn-yotpo-images-production.yotpo.com/instagram/74/17939979818633174/low_resolution.jpg"
                alt=""
              />
              <img
                style={{ height: "350px" }}
                src="https://cdn-yotpo-images-production.yotpo.com/instagram/38/17968916711422738/low_resolution.jpg"
                alt=""
              />
              <img
                style={{ height: "350px" }}
                src="https://cdn-yotpo-images-production.yotpo.com/instagram/20/17893599605806620/low_resolution.jpg"
                alt=""
              />
              <img
                style={{ height: "350px" }}
                src="https://cdn-yotpo-images-production.yotpo.com/instagram/99/18296248927146599/low_resolution.jpg"
                alt=""
              />
              <img
                style={{ height: "350px" }}
                src="https://cdn-yotpo-images-production.yotpo.com/instagram/76/17971120592478376/low_resolution.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

{/* 6 */}
      <div>
        <div className="container mt-5 ">
          <div className="row">
            <div className="col-12 mt-5 ms-4" style={{ display: "flex" }}>
              <img
                style={{
                  height: "738px",
                  width: "738px",
                  borderTopLeftRadius: "10px",
                  borderBottomLeftRadius: "10px",
                }}
                src="https://tangleteezer.com/cdn/shop/files/Sports24_Scalp_Pink__21_1.jpg?v=1720808931&width=1550"
                alt=""
              />
              <div>
                <div
                  style={{
                    backgroundColor: "#fae5ef",
                    height: "300px",
                    borderTopRightRadius: "10px",
                  }}
                >
                  <div style={{ display: "flex", width: "492px" }}>
                    <h2
                      style={{
                        fontFamily: "sans-serif",
                        fontSize: "24px",
                        fontWeight: "bold",
                        width: "42%",
                        margin: "60px",
                        color: theme == "light" ? "black" : "black"
                      }}
                    >
                      Dual teeth exfoliate & massage
                    </h2>
                    <div style={{ margin: "60px" }}>
                      <p style={{ fontSize: "14px", fontFamily: "sans-serif",color: theme == "light" ? "black" : "black" }}>
                        The Scalp Exfoliator and Massager
                      </p>
                      <p style={{ fontSize: "12px",color: theme == "light" ? "black" : "black" }}>
                        <FaArrowRightLong />
                        <span className="ms-3">SHOP NOW</span>
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  style={{
                    height: "438px",
                    width: "492px",
                    marginTop: "0%",
                    borderBottomRightRadius: "10px",
                  }}
                  src="https://tangleteezer.com/cdn/shop/files/660x470-Teeth-_0000s_0000s_0005_Pretty-Pink.png?v=1707474716&width=1550"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

{/* 7 */}
      <div>
        <div className="container-fluid mt-5 p-5">
          <div className="row">
            <div className="col-12 ">
              <Carousel fade>
                <Carousel.Item>
                  <h2
                    style={{
                      fontFamily: "sans-serif",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    "Tangle teezer is life saver, it never<br></br> leaves my
                    handbag"
                  </h2>
                  <h4
                    className="mt-5"
                    style={{
                      fontFamily: "sans-serif",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    Maya Jama
                  </h4>
                </Carousel.Item>
                <Carousel.Item>
                  <h2
                    style={{
                      fontFamily: "sans-serif",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    “Oh my god, this brush changed my life. My daughter adores
                    it,<br></br> and it even works on my curly hair. I don’t
                    know who invented it,<br></br> but thank you.”
                  </h2>
                  <h4
                    className="mt-5"
                    style={{
                      fontFamily: "sans-serif",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    Salma Hayek
                  </h4>
                </Carousel.Item>
                <Carousel.Item>
                  <h2
                    style={{
                      fontFamily: "sans-serif",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    "I love the Tangle Teezer; I use that in the shower<br></br>{" "}
                    to comb my hair out because it gets really<br></br> tangled
                    up!"
                  </h2>
                  <h4
                    className="mt-5"
                    style={{
                      fontFamily: "sans-serif",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    Elle Fanning
                  </h4>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

{/* 8 */}
      <div>
        <div className="container-fluid mt-5 ">
          <div className="row">
            <div style={{ backgroundColor: "#ddf0e8", height: "700px" }}>
              <div style={{ marginLeft: "70%", marginTop: "10%" }}>
                <h2
                  style={{
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    textAlign: "left",
                    color: theme == "light" ? "black" : "black"
                  }}
                >
                  Loved by humans,<br></br> adored by pets.
                </h2>
                <p
                  className="mt-5"
                  style={{ fontFamily: "sans-serif", textAlign: "left",color: theme == "light" ? "black" : "black" }}
                >
                  Pet Teezer is designed to gently detangle, de-shed and
                  <br></br> pamper. Find the perfect brush for your pooch or
                  feline<br></br> friend and their fur, whatever the breed.
                </p>
                <button
                  className="mt-3"
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid black",
                    color: "black",
                    padding: "18px 20px",
                  }}
                >
                  TAKE THE QUIK
                </button>
              </div>
            </div>
            <div>
              <img
                style={{
                  height: "800px",
                  borderRadius: "10px",
                  marginTop: "-50%",
                }}
                src="https://tangleteezer.com/cdn/shop/files/TT.com_Homepage_Pet_Block_780x660_c935216d-a2f4-4c98-a872-43a382eedbcf.jpg?v=1706014381&width=1050"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

{/* 9 */}
      <div>
        <div className="container-fluid mt-5 pt-5">
          <div className="row">
            <div className="col-12 d-flex">
              <div className="col-3 mt-5">
                <h2
                  className="ms-5"
                  style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
                >
                  Our pet<br></br> grooming <br></br>guides
                </h2>
                <p className="ms-5 mt-4" style={{ fontFamily: "sans-serif" }}>
                  Want the low-down on how to groom <br></br>your pet as well as
                  top tips from<br></br> professionals on how to care for their
                  <br></br> fur? You’re in the right place. Bring on<br></br>{" "}
                  the pampering!
                </p>
              </div>
              <div className="col-3">
                <img
                  height={420}
                  style={{ borderRadius: "10px" }}
                  src="https://tangleteezer.com/cdn/shop/files/TT.com_Homepage_Pet_Guide_Dog_460x548_58d6a768-b96e-4694-ab8f-96bd465c9335.jpg?v=1706014483&width=450"
                  alt=""
                />
                <div className="ms-2">
                  <h3
                    style={{
                      fontFamily: "sans-serif",
                      fontWeight: "bold",
                      marginTop: "-30%",
                    }}
                  >
                    Dog Breed & Brush<br></br> Guid
                  </h3>
                  <p style={{ fontSize: "12px" }}>
                    <FaArrowRightLong />
                    <span className="ms-3">READ GUID</span>
                  </p>
                </div>
              </div>
              <div className="col-3">
                <img
                  height={420}
                  style={{ borderRadius: "10px" }}
                  src="https://tangleteezer.com/cdn/shop/files/TT.com_Homepage_Pet_Guide_Cat_460x548_eb313506-84c9-4813-bd8a-85f0eb52b461.jpg?v=1706014483&width=450"
                  alt=""
                />
                <div className="ms-2">
                  <h3
                    style={{
                      fontFamily: "sans-serif",
                      fontWeight: "bold",
                      marginTop: "-30%",
                    }}
                  >
                    Cat Breed & Brush<br></br> Guid
                  </h3>
                  <p style={{ fontSize: "12px" }}>
                    <FaArrowRightLong />
                    <span className="ms-3">READ GUID</span>
                  </p>
                </div>
              </div>
              <div className="col-3">
                <img
                  height={420}
                  style={{ borderRadius: "10px" }}
                  src="https://tangleteezer.com/cdn/shop/files/TT.com_Homepage_Pet_Guide_How_to_Groom_460x548_45891582-0e3c-4e8e-a997-44a1817fcc17.jpg?v=1706014484&width=450"
                  alt=""
                />
                <div className="ms-2">
                  <h3
                    style={{
                      fontFamily: "sans-serif",
                      fontWeight: "bold",
                      marginTop: "-20%",
                      
                    }}
                  >
                    How To Groom
                  </h3>
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

{/* 10 */}
      <div>
        <div className=" mt-5 pt-5">
          <div className="">
            <div className="">
              <video
                height={739}
                controls
                autoPlay
                loop
                src="/src/assets/video2.mp4"
              ></video>
              <div className="ms-5" style={{ marginTop: "-20%" }}>
                <h2
                  style={{
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    color: "white",
                    fontSize: "52px",
                  }}
                >
                  Master your routine
                </h2>
                <p style={{ fontFamily: "sans-serif", color: "white" }}>
                  Get inspired with our must-watch how-to videos, interviews
                  <br></br> and stories, and all the answers to your haircare
                  questions.<br></br> It’s like reading a magazine at the salon,
                  only better.
                </p>
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid white",
                    color: "white",
                    padding: "18px 20px",
                    textDecoration: "none",
                  }}
                >
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* 11 */}
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

{/* 12 */}
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

export default Home;
