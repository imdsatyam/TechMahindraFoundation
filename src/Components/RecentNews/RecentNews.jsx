import "../RecentNews/RecentNews.css";
import NewsBg from '../../Assets/NewsBg.png';
import news_1 from "../../Assets/News_1.png";
import news_2 from "../../Assets/News_2.png";
import news_3 from "../../Assets/News_3.png";
import { BiCalendar } from "react-icons/bi";

function RecentNews() {
  return (
    <div className="RecentNews"
    style={{
        backgroundImage: `URL(${NewsBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}>
      <div className="main__recent">
        <h1 style={{ color: "var(--color-black)", fontSize:'2.5rem', fontWeight:400 }}>
          Recent <span style={{ fontSize:'2.5rem', fontWeight:600 }}>News & Updates</span>
          <hr
            style={{
              color: "#ff0000",
              backgroundColor: "#ff0000",
              height: 2,
              width: "5rem",
              borderColor: "#ff0000",
              marginTop: "1rem",
              marginBottom: "2rem",
              marginLeft: '12rem'
            }}
          />
        </h1>
      </div>
      <div className="pic__recentnews">
        <div className="recent__bnr1">
          <img
            alt=""
            src={news_1}
            className="banner__recent"
            style={{ height: "20rem", width: "27rem" }}
          ></img>
          <div className="recentne__text">
            <h5 style={{ fontSize:'1rem', fontWeight:300 }}>
              <BiCalendar /> June 14,2023
            </h5>
            <h3 style={{ fontSize:'1.5rem', fontWeight:600, paddingTop:'0.5rem'}}>
              Skills for Market Traing for persons with Disabilities (SMART+)
            </h3>
            <p style={{ fontSize:'1.1rem', fontWeight:400, paddingTop:'0.5rem' }}>
              Launched in the year 2013 past the sucess of our SMART program, the SMART+ is a
              special program working towards the skills training for person
              with Disabilities.
            </p>
          </div>
        </div>
        <div className="recent__bnr2">
          <img
            alt=""
            src={news_2}
            className="banner__recent"
            style={{ height: "20rem", width: "27rem" }}
          ></img>
          <div className="recentne__text">
            <h5 style={{ fontSize:'1rem', fontWeight:300 }}>
              <BiCalendar /> June 14,2023
            </h5>
            <h3 style={{ fontSize:'1.5rem', fontWeight:600, paddingTop:'0.5rem'}}>
              Skills for Market Traing for persons with Disabilities (SMART+)
            </h3>
            <p style={{ fontSize:'1.1rem', fontWeight:400, paddingTop:'0.5rem' }}>
              Launched in the year 2013 past the sucess of our SMART program, the SMART+ is a
              special program working towards the skills training for person
              with Disabilities.
            </p>
          </div>
        </div>
        <div className="recent__bnr3">
          <img
            alt=""
            src={news_3}
            className="banner__recent"
            style={{ height: "20rem", width: "27rem" }}
          ></img>
          <div className="recentne__text">
            <h5 style={{ fontSize:'1rem', fontWeight:300 }}>
              <BiCalendar /> June 14,2023
            </h5>
            <h3 style={{ fontSize:'1.5rem', fontWeight:600, paddingTop:'0.5rem'}}>
              Skills for Market Traing for persons with Disabilities (SMART+)
            </h3>
            <p style={{ fontSize:'1.1rem', fontWeight:400, paddingTop:'0.5rem' }}>
              Launched in the year 2013 past the sucess of our SMART program, the SMART+ is a
              special program working towards the skills training for person
              with Disabilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentNews;
