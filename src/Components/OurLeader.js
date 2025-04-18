import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import PicMahi from "../Assets/AnandMahindra.png";
import leaderBg from "../Assets/LeaderBg.png";

function OurLeader() {
  return (
    <div className="banner__led">
      <div
        className="ourLeader"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${leaderBg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="descriptionNextMain">
          <h1>
            Our <span>Leaders Speak</span>
          </h1>
        </div>

        <Swiper
          rewind={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {[1, 2, 3, 4].map((_, i) => (
            <SwiperSlide key={i}>
              <div className="mahindraCard">
                <div className="red__back" />
                <div className="mahi__pic">
                  <img src={PicMahi} alt="Anand Mahindra" />
                </div>
                <div className="name">
                  <h3>Anand G. Mahindra</h3>
                  <h2>Chairman, Mahindra Group</h2>
                  <hr />
                  <h4>
                    <i>
                      We believe that education is the single most powerful
                      intervention for transforming lives.
                    </i>
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default OurLeader;
