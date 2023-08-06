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
        <div className="aboutbanner"
        style={{
            background: 'var(--color-primary)',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}>
          <div className="emploability">
            <img
              alt=""
              src={picBanner}
              className="banner__pic"
              style={{ height: "25rem", width: "25rem" }}
            ></img>
          </div>
          <div className="education">
            <img
              alt=""
              src={picBanner_1}
              className="banner__pic"
              style={{ height: "25rem", width: "25rem" }}
            ></img>
          </div>
          <div className="disability">
            <img
              alt=""
              src={picBanner_2}
              className="banner__pic"
              style={{ height: "25rem", width: "25rem" }}
            ></img>
          </div>
        </div>
        <div className="underabout">
          <div className="count">
            <h4 style={{ fontSize: "1rem", fontWeight: 300 }}>
              Community health and other
            </h4>
            <h1
              style={{
                color: "var(--color-black)",
                fontSize: "2rem",
                fontWeight: 600,
              }}
            >
              20,734
            </h1>
            <h4 style={{ fontSize: "1rem", fontWeight: 300 }}>
              in FY 23 and counting
            </h4>
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
            <h4 style={{ fontSize: "1rem", fontWeight: 300 }}>Employability</h4>
            <h1
              style={{
                color: "var(--color-black)",
                fontSize: "2rem",
                fontWeight: 600,
              }}
            >
              1,56,748
            </h1>
            <h4 style={{ fontSize: "1rem", fontWeight: 300 }}>Youth Trained</h4>
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
            <h4 style={{ fontSize: "1rem", fontWeight: 300 }}>Volunteering</h4>
            <h1
              style={{
                color: "var(--color-black)",
                fontSize: "2rem",
                fontWeight: 600,
              }}
            >
              57,515
            </h1>
            <h4 style={{ fontSize: "1rem", fontWeight: 300 }}>
              Hours in FY 23
            </h4>
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
            <h4 style={{ fontSize: "1rem", fontWeight: 300 }}>Teachers</h4>
            <h1
              style={{
                color: "var(--color-black)",
                fontSize: "2rem",
                fontWeight: 600,
              }}
            >
              49,909
            </h1>
            <h4 style={{ fontSize: "1rem", fontWeight: 300 }}>Supported</h4>
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
          </div>
          <div className="aboutmah">
            <h1
              style={{
                color: "var(--color-black)",
                fontSize: "2rem",
                fontWeight: 600,
              }}
            >
              About <span>Tech Mahindra Foundation</span>
            </h1>
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
            <h1
              style={{
                color: "var(--color-black)",
                fontSize: "2rem",
                fontWeight: 400,
              }}
            >
              Impacted 3,94,727 beneficiaries directly acress all our programs*
            </h1>
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: 300,
                paddingTop: "1rem",
              }}
            >
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
