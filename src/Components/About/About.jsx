import "../About/About.css";
import Aboutbg from "../../Assets/AboutBg.png";
import picBanner from "../../Assets/Employability.png";
import picBanner_1 from "../../Assets/Education.png";
import picBanner_2 from "../../Assets/Disability.png";

function About() {
  return (
    <div
      className="About"
      style={{
        backgroundImage: `URL(${Aboutbg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="about__main">
        <div className="aboutbanner">
          <div className="img__ban_1">
            <img alt="" src={picBanner} className="banner__pic__1"></img>
            <img alt="" src={picBanner_1} className="banner__pic__1"></img>
            <img alt="" src={picBanner_2} className="banner__pic__1"></img>
          </div>
        </div>
        <div className="underabout">
          <div className="count">
            <h4>Community health and other</h4>
            <h1>20,734</h1>
            <h4>in FY 23 and counting</h4>
            <hr
              style={{
                color: "#ff0000",
                backgroundColor: "#ff0000",
                height: 1.5,
                width: "10rem",
                borderColor: "#ff0000",
                margin: "2rem 0",
              }}
            />
            <h4>Employability</h4>
            <h1>1,56,748</h1>
            <h4>Youth Trained</h4>
            <hr
              style={{
                color: "#ff0000",
                backgroundColor: "#ff0000",
                height: 1.5,
                width: "10rem",
                borderColor: "#ff0000",
                margin: "2rem 0",
              }}
            />
            <h4>Volunteering</h4>
            <h1>57,515</h1>
            <h4>Hours in FY 23</h4>
            <hr
              style={{
                color: "#ff0000",
                backgroundColor: "#ff0000",
                height: 1.5,
                width: "10rem",
                borderColor: "#ff0000",
                margin: "2rem 0",
              }}
            />
            <h4>Teachers</h4>
            <h1>49,909</h1>
            <h4>Supported</h4>
          </div>
          <div className="aboutmah">
            <h1>
              About <span>Tech Mahindra Foundation</span>
            </h1>
            <hr
              style={{
                color: "#ff0000",
                backgroundColor: "#ff0000",
                height: 1.5,
                width: "10rem",
                borderColor: "#ff0000",
                margin: "2rem 0",
              }}
            />
            <h3>
              Impacted 3,94,727 beneficiaries directly acress all our programs*
            </h3>
            <p>
              Founded in the year 2006, Tech Mahindra Foundation is the
              Corporate Social Responsibility (CSR) arm of Tech Mahindra
              Limited. We work extensively on the vision of 'Empowerment through
              Education' with three key focus are - Education, Employability,
              and Disability to empower all to Rise. We are trying to bring
              social change and touch lives through our 150+ projects with the
              help of 90+ partners in 11 locations across india.
            </p>
            <button className="bttn__1">Know More</button>
            <button className="bttn__2">Download Our Brochure</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
