import news_1 from "../Assets/News_1.png";
import news_2 from "../Assets/News_2.png";
import news_3 from "../Assets/News_3.png";
import newBg from "../Assets/NewsBg.png";
import { BiCalendar } from "react-icons/bi";

function RecentNews() {
  return (
    <div style={{
      backgroundImage: `url(${newBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "white",
      opacity: ' 0.9'
    }}>
      <div className="descriptionNextMain d-flex justify-content-center align-items-center flex-column">
        <h1> Recent <span>News & Updates</span> </h1>
        <hr className="highlight-line" />
      </div>
      <div className="bannersuccess d-flex flex-wrap justify-content-center gap-4 mt-4">
        <div className="div__sml__bnr h-auto ">
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
        <div className="div__sml__bnr h-auto">
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
        <div className="div__sml__bnr h-auto">
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