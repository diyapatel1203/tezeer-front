import React, { useContext, useEffect, useState } from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";
import { BsRecycle } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { ThemeContext } from "../context/ThemeContext";
import Accordion from "react-bootstrap/Accordion";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";

const Description = () => {
  const { theme } = useContext(ThemeContext);
  const [singledata, setsingledata] = useState({});
  const param = useParams();

  const getsingledata = () => {
    axios
      .get(`https://tanglee-back.onrender.com/product/${param.id}`)
      .then((res) => setsingledata(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getsingledata();
  }, []);

  const addToCart=()=>{
      axios.post("https://tanglee-back.onrender.com/cart",singledata)
      .then((res)=>
      {
        console.log(res)
        alert("add to product")
      })
      .catch((err)=>console.log(err))
  }
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div className="mt-5">
          <div className="ms-2">
            <img
              height={150}
              style={{ border: "1px solid black" }}
              src={singledata.img1}
              alt=""
            />
          </div>
          <div className="mt-4 ms-2">
            <img
              height={150}
              style={{ border: "1px solid black" }}
              src={singledata.img2}
              alt=""
            />
          </div>
        </div>

        <div className="p-4">
          <img height={700} src={singledata.img2} alt="" />
        </div>
        <div className="mt-4" style={{ width: "600px" }}>
          <div>
            <h6
              style={{
                fontSize: "12px",
                border: "1px solid rgb(237 189 219)",
                padding: "5px 10px",
                borderRadius: "5px",
                display: "inline",
              }}
            >
              DETANGLING
            </h6>
          </div>
          <div className="mt-4" style={{ fontSize: "20px" }}>
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarHalf /> <span style={{ fontSize: "14px" }}>(88)</span>
          </div>

          <div
            className="mt-4"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h2 style={{ fontFamily: "sans-serif", fontWeight: "bolder" }}>
              {singledata.title}
            </h2>
            <p className="me-5">{singledata.price}</p>
          </div>

          <div className="mt-4" style={{ display: "flex" }}>
            <BsRecycle className="me-3" />
            <p style={{ fontSize: "13px" }}>
              Recycle and get <b>15% off your next order!</b> -{" "}
              <u>Find out more</u>
            </p>
          </div>

          <div className="mt-2">
            <button
              style={{
                border: theme == "light" ? "none" : "1px solid white",
                backgroundColor: "black",
                color: "white",
                padding: "15px 200px",
              }}
              onClick={addToCart}
            >
              ADD TO BAG - {singledata.price}
            </button>
          </div>

          <h6 className="mt-3">Pair it with</h6>
         
          <div>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  width: "302px",
                  border: "1px solid rgb(234, 234, 234)",
                  marginRight: "10px",
                }}
              >
                
                <div className="hover-switch">
                  <img
                    src="https://tangleteezer.com/cdn/shop/files/WTC_0007s_0000_Lilac_WTD_HeroImage_450x.jpg?v=1718985480"
                    style={{ height: "300px", width: "300px" }}
                    alt=""
                  />
                  <img
                    src="https://tangleteezer.com/cdn/shop/files/WTC_0007s_0001_Lilac_WTD_Angle2_450x.jpg?v=1719823883"
                    style={{ height: "300px", width: "300px" }}
                    alt=""
                  />
                </div>
              
                <div
                  className=""
                  style={{
                    backgroundColor:
                      theme == "light" ? "rgb(245, 244, 244)" : "black",
                    width: "300px",
                  }}
                >
                  <div style={{ fontFamily: "sans-serif" }}>
                    <div
                      className="pt-2"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "85%",
                        margin: "auto ",
                      }}
                    >
                      <p
                        style={{ color: theme == "light" ? "black" : "white" }}
                      >
                        Wide Tooth Comb
                      </p>
                      <p
                        style={{ color: theme == "light" ? "black" : "white" }}
                      >
                        £13.00
                      </p>
                    </div>
                    <button
                      className="button mt-2"
                      style={{
                        color: theme == "light" ? "black" : "white",
                        border:
                          theme == "light"
                            ? "1px solid black"
                            : "1px solid white",
                      }}
                    >
                      ADD TO BAG - £13.00
                    </button>
                  </div>
                </div>
              </div>

              <div
                style={{
                  width: "302px",
                  border: "1px solid rgb(234, 234, 234)",
                  marginRight: "10px",
                }}
              >
                <div className="hover-switch">
                  <img
                    src="https://tangleteezer.com/cdn/shop/files/PDPCarouselRotationsTemplate_Compactstyler_450x.png?v=1706543074"
                    style={{ height: "300px", width: "300px" }}
                    alt=""
                  />
                  <img
                    src="https://tangleteezer.com/cdn/shop/files/Compactstyler_0000s_0003s_0018_HoloHero_450x.jpg?v=1706543074"
                    style={{ height: "300px", width: "300px" }}
                    alt=""
                  />
                </div>

                <div
                  className=""
                  style={{
                    backgroundColor:
                      theme == "light" ? "rgb(245, 244, 244)" : "black",
                    width: "300px",
                  }}
                >
                  <div style={{ fontFamily: "sans-serif" }}>
                    <div
                      className="pt-2"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "85%",
                        margin: "auto ",
                      }}
                    >
                      <p
                        style={{ color: theme == "light" ? "black" : "white" }}
                      >
                        Compact Styler
                      </p>
                      <p
                        style={{ color: theme == "light" ? "black" : "white" }}
                      >
                        £16.00
                      </p>
                    </div>
                    <button
                      className="button mt-2"
                      style={{
                        color: theme == "light" ? "black" : "white",
                        border:
                          theme == "light"
                            ? "1px solid black"
                            : "1px solid white",
                      }}
                      
                    >
                      ADD TO BAG - £13.00
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </div>

      <div>
        <div className="container mt-5 pt-5">
          <div className="row">
            <div
              className="col-md-9 d-flex"
              style={{
                justifyContent: "space-around",
                margin: "auto",
                marginTop: "30px",
              }}
            >
              <div style={{ display: "flex" }}>
                <img
                  height={50}
                  src="https://tangleteezer.com/cdn/shop/files/TUD_-79.png?crop=center&height=40&v=1707729251&width=40"
                  alt=""
                />
                <p style={{ fontSize: "12px" }}>
                  Quick & effortless<br></br> detangling
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <img
                  height={50}
                  src="https://tangleteezer.com/cdn/shop/files/TUD_-81.png?crop=center&height=40&v=1707729251&width=40"
                  alt=""
                />
                <p style={{ fontSize: "12px" }}>
                  Ideal for wet or dry<br></br> hair
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <img
                  height={50}
                  src="https://tangleteezer.com/cdn/shop/files/TUD_-80.png?crop=center&height=40&v=1707729251&width=40"
                  alt=""
                />
                <p style={{ fontSize: "12px" }}>
                  Smooths frizz &<br></br> flyaways
                </p>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  height={50}
                  src="https://tangleteezer.com/cdn/shop/files/TUD_-82.png?crop=center&height=40&v=1707729251&width=40"
                  alt=""
                />
                <p style={{ fontSize: "12px" }}>Slim handle with grip</p>
              </div>
            </div>
            <div
              className="col-9 mt-3"
              style={{ justifyContent: "space-around", margin: "auto" }}
            >
              <hr />
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Description</Accordion.Header>
                  <Accordion.Body>
                    <b>It’s a fan favourite</b><br></br><br></br>
                    <p>Designed for use on wet hair and in the shower, The Ultimate Detangler effortlessly slips through your hair (and thanks to its handle, not out of your wet hands).</p>
                    <p>The patented two-tiered teeth technology is gentle on vulnerable, shower-fresh hair, meaning less breakage, more of that running-your-fingers-through-your-hair feeling. The long teeth detangle, while the shorter teeth smooth - a team effort at its finest.</p>
                    <p>Treating your locks to a conditioning treatment? Use The Ultimate Detangler to evenly draw your products of choice through the lengths of your hair. </p>
                    <p>If you have long, thick or curly hair, let us redirect you to The Large Ultimate Detangler. Sometimes size does matter.  </p>
                    <p>The mini Ultimate Detangler is perfect for travel with a savvy keyring hole on the handle. Although small, it confidently detangles any type of hair, helping to reduce hair breakage. The mini size doesn’t mean it’s just great for kids. It’s perfect for adults too!</p>
                    <p>Hot tip: Keep this hairbrush away from heat!</p>
                    <p>Together with the Ultimate Detangler, avoid breakage and enjoy smooth, detangled hair.</p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>Reviews</Accordion.Header>
                  <Accordion.Body>
                    <button style={{border:"none",backgroundColor:"black",color:"white",padding:"10px 15px"}}>VIEW ALL REVIEW</button>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>Delivery</Accordion.Header>
                  <Accordion.Body>
                    <p>UK Standard Delivery £3.50. Free UK Standard Delivery over £20</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <hr />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 pt-5" style={{display:"flex",marginLeft:"5%"}}>
      <div style={{width:"619px",height:"671px",padding:"56px 50px",backgroundColor:"white",color:theme=="light"?"black":"black",borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px"}}>
        <div style={{width:"464px",display:"flex",justifyContent:"space-between"}}>
          <h2 style={{fontWeight:"bolder",width:"50%"}}>The Ultimate Detangler</h2>
          <p  style={{fontWeight:"bold",fontSize:"12px",width:"50%"}}>Our patented teeth have two-tiered technology with added flex for wet hair. The long, flexible teeth detangle, removing knots and reducing breakage, while the short teeth smooth, for glossy, frizz-free hair.</p>
        </div>
        <div>
          <img style={{height:"464px",width:"464px"}} src={singledata.img2} alt="" />
        </div>
      </div>

      <div >
        <div  style={{backgroundColor:"#f3e3e6",height:"240px",borderTopRightRadius:"10px",padding:"30px 20px"
        }}>
        <div style={{display:"flex",justifyContent:"space-between",padding:"10px",width:"90%",margin:"auto",color:theme=="light"?"black":"black"}}>
        <div style={{display:"flex",alignItems:"center"}}>
          <h2 style={{fontWeight:"bold"}}>80%</h2><span className="ms-2" style={{fontWeight:"bold"}}>Fewer knots and tangles</span>
        </div>
        <div style={{display:"flex",alignItems:"center"}}>
          <h2 style={{fontWeight:"bold"}}>82%</h2><span className="ms-2" style={{fontWeight:"bold"}}>Would recommend to a friend</span>
        </div>
        </div>

        <div style={{display:"flex",justifyContent:"space-between",padding:"10px",width:"90%",margin:"auto",color:theme=="light"?"black":"black"}}>
        <div style={{display:"flex",alignItems:"center"}}>
          <h2 style={{fontWeight:"bold"}}>
          433</h2><span className="ms-2" style={{fontWeight:"bold"}}>Flexible teeth</span>
        </div>
        <div style={{display:"flex",alignItems:"center",marginRight:"12%"}}>
          <h2  style={{fontWeight:"bold"}}>97%</h2><span className="ms-2" style={{fontWeight:"bold"}}>Gentler on the scalp</span>
        </div>
        </div>
        </div>
        <div>
        <img style={{width:"719px",height:"431px",borderBottomRightRadius:"10px"}} src={singledata.image} alt="" />
        </div>
      </div>
      </div>


      <div>
        <div className="container-fluid mt-5 pt-5">
          <div className="row">
            <div className="col-12" style={{textAlign:"center",backgroundColor:"rgb(232, 230, 230)",padding:"70px 0px",color:theme=="light"?"black":"black"}}>
              <h1 style={{fontWeight:"bolder"}}>Tried & Tested</h1>
              <p>Our products are tried and tested by you, our loyal community.</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-12">
              <img
                className="ms-5"
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
                style={{
                  textAlign: "center",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  fontSize: "52px",
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

export default Description;
