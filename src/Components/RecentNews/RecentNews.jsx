import "../RecentNews/RecentNews.css";
import news_1 from "../../Assets/News_1.png";
import news_2 from "../../Assets/News_2.png";
import news_3 from "../../Assets/News_3.png";
import { BiCalendar } from "react-icons/bi";

function RecentNews() {
  return (
    <div className="RecentNews">
      <div className="main__recent">
        <h1>
          Recent <span>News & Updates</span>
          <hr
            style={{
              color: "#ff0000",
              backgroundColor: "#ff0000",
              height: 2,
              width: "10rem",
              borderColor: "#ff0000",
              margin: "auto",
              marginBottom: "1rem",
            }}
          />
        </h1>
      </div>
      <div className="pic__recentnews">
        <div className="recent__bnr">
          <img alt="" src={news_1}></img>
          <div className="recentne__text">
            <h5>
              <BiCalendar /> June 14,2023
            </h5>
            <h3>
              Skills for Market Traing for persons with Disabilities (SMART+)
            </h3>
            <p>
              Launched in the year 2013 past the sucess of our SMART program,
              the SMART+ is a special program working towards the skills
              training for person with Disabilities.
            </p>
          </div>
        </div>
        <div className="recent__bnr">
          <img alt="" src={news_2}></img>
          <div className="recentne__text">
            <h5>
              <BiCalendar /> June 14,2023
            </h5>
            <h3>
              Skills for Market Traing for persons with Disabilities (SMART+)
            </h3>
            <p>
              Launched in the year 2013 past the sucess of our SMART program,
              the SMART+ is a special program working towards the skills
              training for person with Disabilities.
            </p>
          </div>
        </div>
        <div className="recent__bnr__3">
          <img alt="" src={news_3}></img>
          <div className="recentne__text">
            <h5>
              <BiCalendar /> June 14,2023
            </h5>
            <h3>
              Skills for Market Traing for persons with Disabilities (SMART+)
            </h3>
            <p>
              Launched in the year 2013 past the sucess of our SMART program,
              the SMART+ is a special program working towards the skills
              training for person with Disabilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentNews;
