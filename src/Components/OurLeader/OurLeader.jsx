import "../OurLeader/OurLeader.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import PicMahi from "../../Assets/AnandMahindra.png";

function OurLeader() {
  return (
    <div className="banner__led">
      <div className="main">
        <h1>
          Our <span>Leader Speak</span>
        </h1>
      </div>
      <div className="bg__led">
        <>
          <Swiper
            rewind={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="mahindra">
                <div className="red__back"></div>
                <div className="mahi__pic">
                  <img src={PicMahi} alt="" />
                </div>
                <div className="name">
                  <h3>Anand G. Mahindra</h3>
                  <h2>Chairman, Mahindra Group</h2>
                  <hr
                    style={{
                      color: "#ff0000",
                      backgroundColor: "#ff0000",
                      height: 2,
                      width: "10rem",
                      borderColor: "#ff0000",
                      margin: "2rem 0",
                    }}
                  />
                  <h4>
                    <i>
                      We believe that education is the single most powerful
                      intervention for transforming lives.
                    </i>
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mahindra">
                <div className="red__back"></div>
                <div className="mahi__pic">
                  <img src={PicMahi} alt="" />
                </div>
                <div className="name">
                  <h3>Anand G. Mahindra</h3>
                  <h2>Chairman, Mahindra Group</h2>
                  <hr
                    style={{
                      color: "#ff0000",
                      backgroundColor: "#ff0000",
                      height: 2,
                      width: "10rem",
                      borderColor: "#ff0000",
                      margin: "2rem 0",
                    }}
                  />
                  <h4>
                    <i>
                      We believe that education is the single most powerful
                      intervention for transforming lives.
                    </i>
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mahindra">
                <div className="red__back"></div>
                <div className="mahi__pic">
                  <img src={PicMahi} alt="" />
                </div>
                <div className="name">
                  <h3>Anand G. Mahindra</h3>
                  <h2>Chairman, Mahindra Group</h2>
                  <hr
                    style={{
                      color: "#ff0000",
                      backgroundColor: "#ff0000",
                      height: 2,
                      width: "10rem",
                      borderColor: "#ff0000",
                      margin: "2rem 0",
                    }}
                  />
                  <h4>
                    <i>
                      We believe that education is the single most powerful
                      intervention for transforming lives.
                    </i>
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mahindra">
                <div className="red__back"></div>
                <div className="mahi__pic">
                  <img src={PicMahi} alt="" />
                </div>
                <div className="name">
                  <h3>Anand G. Mahindra</h3>
                  <h2>Chairman, Mahindra Group</h2>
                  <hr
                    style={{
                      color: "#ff0000",
                      backgroundColor: "#ff0000",
                      height: 2,
                      width: "10rem",
                      borderColor: "#ff0000",
                      margin: "2rem 0",
                    }}
                  />
                  <h4>
                    <i>
                      We believe that education is the single most powerful
                      intervention for transforming lives.
                    </i>
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </div>
  );
}

export default OurLeader;
