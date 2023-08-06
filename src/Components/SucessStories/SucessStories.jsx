import "../SucessStories/SucessStories.css";
import NewsBg from "../../Assets/NewsBg.png";
import firstPic from "../../Assets/Empowerment.png";
import secondPic from "../../Assets/Learning.png";
import thirdPic from "../../Assets/Light.png";
import fourthPic from "../../Assets/Life.png";

function SucessStories() {
  return (
    <div
      className="SucessStories"
      style={{
        backgroundImage: `URL(${NewsBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="sucessmoto">
        <div className="upper">
            <div className="heder">
          <h1
            style={{
              color: "var(--color-black)",
              fontSize: "2.5rem",
              fontWeight: 400,
              textAlign:'center'
            }}
          >
            Rise for{" "}
            <span style={{ fontSize: "2.5rem", fontWeight: 600 }}>
              Success Stories
            </span>
          </h1>
          </div>
          <div className="horizo">
          <hr
            style={{
              color: "#ff0000",
              backgroundColor: "#ff0000",
              height: 2,
              width: "5rem",
              borderColor: "#ff0000",
              marginTop:'1rem',
              marginBottom: '1rem',
              marginLeft:'40rem'
            }}
          />
          </div>
        </div>
        <div className="lower">
          <p
            style={{
              paddingLeft: "5rem",
              paddingRight: "5rem",
              fontSize: "1.4rem",
              fontWeight: 300,
            }}
          >
            Rise for a more equal world', 'Rise to be future-ready, and 'Rise to
            create value' are our guiding principles. Inspired by this vision,
            we are striving to create a better world through our education,
            employability and disability programs. In this journey, we became
            catalysts in the lives ot individuals who are making a meaningful
            difference within communities. Read their stories of hard work,
            grit, passion and success here.
          </p>
        </div>
      </div>
      <div className="bannersucess">
        <div
          className="first"
          style={{ background: "#ecf0f1", textAlign: "center" }}
        >
          <img
            alt=""
            src={firstPic}
            className="success__recent"
            style={{ height: "20rem", width: "20rem" }}
          ></img>
          <h3 className="hhh" style={{ fontSize: "1.6rem", fontWeight: 600 }}>
            TOWARDS THE JOURNEY OF EMPOWERMENT
          </h3>
          <p style={{ fontSize: "1.1rem", fontWeight: 400 }}>
            Pooja had to discontinue her education after completing class 12 as
            her parents could not afford further education Her father who is a
            farmer was the sole earning member
          </p>
          <button className="susbutton">Read More</button>
        </div>
        <div
          className="second"
          style={{ background: "#ecf0f1", textAlign: "center" }}
        >
          <h3 className="hhh" style={{ fontSize: "1.6rem", fontWeight: 600 }}>
            LEARNING BY DOING
          </h3>
          <p style={{ fontSize: "1.1rem", fontWeight: 400 }}>
            This is the story of Sanjay, a student at Karnataka Public School
            one of Tech Mahindra Foundation's ARISE projects. In earty days,
            Sanjay was irregular at school ond with the intent....
          </p>
          <button className="susbutton">Read More</button>
          <img
            alt=""
            src={secondPic}
            className="success__recent"
            style={{ height: "20rem", width: "20rem" }}
          ></img>
        </div>
        <div
          className="third"
          style={{ background: "#ecf0f1", textAlign: "center" }}
        >
          <img
            alt=""
            src={thirdPic}
            className="success__recent"
            style={{ height: "20rem", width: "20rem" }}
          ></img>
          <h3 className="hhh" style={{ fontSize: "1.6rem", fontWeight: 600 }}>
            HOPE MEANS LIGHT!
          </h3>
          <p style={{ fontSize: "1.1rem", fontWeight: 400 }}>
            Sometimes, a little help in time can change the world around a
            person! Krishna Pradhan is a 4-year-old child from Mulaalasa Village
            of Satyabadi block of Puri district in Odisha.
          </p>
          <button className="susbutton">Read More</button>
        </div>
        <div
          className="fourth"
          style={{ background: "#ecf0f1", textAlign: "center" }}
        >
          <h3 className="hhh" style={{ fontSize: "1.6rem", fontWeight: 600 }}>A DAY IN LIFE</h3>
          <p style={{ fontSize: "1.1rem", fontWeight: 400 }}>
            As most offices get ready to absorb their workforce. the In-Service
            Teacher Education Institute does so too! But in doing so, it has
            gone a step further by creating opportunities
          </p>
          <button className="susbutton">Read More</button>
          <img
            alt=""
            src={fourthPic}
            className="banner__recent"
            style={{ height: "20rem", width: "20rem" }}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default SucessStories;
