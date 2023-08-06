import "../OurLeader/OurLeader.css";
import LeaderBg from "../../Assets/LeaderBg.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import PicMahi from "../../Assets/AnandMahindra.png";

function OurLeader() {
  return (
    <div className="leader">
      <div
        className="banner"
        style={{
          backgroundImage: `URL(${LeaderBg})`,
          height: "40rem",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="main">
          <h2>
            Our <span>Leader Speak</span>
          </h2>
        </div>
        <div className="bg">
          <>
            <Swiper
              rewind={true}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="mahindra">
                  <div className="pic">
                    <img
                      src={PicMahi}
                      alt=""
                      className="mahi"
                      style={{ height: "12rem", width: "12rem" }}
                    />
                  </div>
                  <div className="name">
                    <h3 style={{ fontSize: "2rem", fontWeight: "600" }}>
                      Anand G. Mahindra
                    </h3>
                    <h3 style={{ fontSize: "1.8rem", fontWeight: "500" }}>
                      Chairman, Mahindra Group
                    </h3>
                    <hr
                      style={{
                        color: "#ff0000",
                        backgroundColor: "#ff0000",
                        height: 2,
                        width: "5rem",
                        borderColor: "#ff0000",
                        marginTop: "1rem",
                        marginBottom: "1rem",
                      }}
                    />
                    <h4 style={{ fontSize: "1.5rem", fontWeight: "500" }}>
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
                  <div className="pic">
                    <img
                      src={PicMahi}
                      alt=""
                      className="mahi"
                      style={{ height: "12rem", width: "12rem" }}
                    />
                  </div>
                  <div className="name">
                    <h3 style={{ fontSize: "2rem", fontWeight: "600" }}>
                      Anand G. Mahindra
                    </h3>
                    <h3 style={{ fontSize: "1.8rem", fontWeight: "500" }}>
                      Chairman, Mahindra Group
                    </h3>
                    <hr
                      style={{
                        color: "#ff0000",
                        backgroundColor: "#ff0000",
                        height: 2,
                        width: "5rem",
                        borderColor: "#ff0000",
                        marginTop: "1rem",
                        marginBottom: "1rem",
                      }}
                    />
                    <h4 style={{ fontSize: "1.5rem", fontWeight: "500" }}>
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
                  <div className="pic">
                    <img
                      src={PicMahi}
                      alt=""
                      className="mahi"
                      style={{ height: "12rem", width: "12rem" }}
                    />
                  </div>
                  <div className="name">
                    <h3 style={{ fontSize: "2rem", fontWeight: "600" }}>
                      Anand G. Mahindra
                    </h3>
                    <h3 style={{ fontSize: "1.8rem", fontWeight: "500" }}>
                      Chairman, Mahindra Group
                    </h3>
                    <hr
                      style={{
                        color: "#ff0000",
                        backgroundColor: "#ff0000",
                        height: 2,
                        width: "5rem",
                        borderColor: "#ff0000",
                        marginTop: "1rem",
                        marginBottom: "1rem",
                      }}
                    />
                    <h4 style={{ fontSize: "1.5rem", fontWeight: "500" }}>
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
                  <div className="pic">
                    <img
                      src={PicMahi}
                      alt=""
                      className="mahi"
                      style={{ height: "12rem", width: "12rem" }}
                    />
                  </div>
                  <div className="name">
                    <h3 style={{ fontSize: "2rem", fontWeight: "600" }}>
                      Anand G. Mahindra
                    </h3>
                    <h3 style={{ fontSize: "1.8rem", fontWeight: "500" }}>
                      Chairman, Mahindra Group
                    </h3>
                    <hr
                      style={{
                        color: "#ff0000",
                        backgroundColor: "#ff0000",
                        height: 2,
                        width: "5rem",
                        borderColor: "#ff0000",
                        marginTop: "1rem",
                        marginBottom: "1rem",
                      }}
                    />
                    <h4 style={{ fontSize: "1.5rem", fontWeight: "500" }}>
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
    </div>
  );
}

export default OurLeader;
