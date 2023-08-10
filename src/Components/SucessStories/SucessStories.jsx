import "../SucessStories/SucessStories.css";
import firstPic from "../../Assets/Empowerment.png";
import secondPic from "../../Assets/Learning.png";
import thirdPic from "../../Assets/Light.png";
import fourthPic from "../../Assets/Life.png";

function SucessStories() {
  return (
    <div className="SucessStories">
      <div className="sucessmoto">
        <div className="upper">
          <div className="heder">
            <h1>
              Rise for{" "}
              <span style={{ fontSize: "4rem", fontWeight: 700 }}>
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
                width: "10rem",
                borderColor: "#ff0000",
                margin: "auto",
                marginTop: "2rem",
                marginBottom: "2rem",
              }}
            />
          </div>
        </div>
        <div className="lower">
          <p>
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
        <div className="div__sml__bnr">
          <img alt="" src={firstPic}></img>
          <div className="bnsi">
            <h3>TOWARDS THE JOURNEY OF EMPOWERMENT</h3>
            <p>
              Pooja had to discontinue her education after completing class 12
              as her parents could not afford further education Her father who
              is a farmer was the sole earning member
            </p>
            <button className="susbutton">Read More</button>
          </div>
        </div>
        <div className="div__sml__bnr">
          <div className="bnsi">
            <h3>
              LEARNING BY <span className="spun">DOING</span>
            </h3>
            <p>
              This is the story of Sanjay, a student at Karnataka Public School
              one of Tech Mahindra Foundation's ARISE projects. In earty days,
              Sanjay was irregular at school ond with the intent....
            </p>
            <button className="susbutton">Read More</button>
          </div>
          <img alt="" src={secondPic}></img>
        </div>
        <div className="div__sml__bnr">
          <img alt="" src={thirdPic}></img>
          <div className="bnsi">
            <h3>
              HOPE MEANS <span className="spun">LIGHT!</span>
            </h3>
            <p>
              Sometimes, a little help in time can change the world around a
              person! Krishna Pradhan is a 4-year-old child from Mulaalasa
              Village of Satyabadi block of Puri district in Odisha.
            </p>
            <button className="susbutton">Read More</button>
          </div>
        </div>
        <div className="div__sml__bnr">
          <div className="bnsi">
            <h3>
              A DAY IN <span className="spun">LIFE</span>
            </h3>
            <p>
              As most offices get ready to absorb their workforce. the
              In-Service Teacher Education Institute does so too! But in doing
              so, it has gone a step further by creating opportunities
            </p>
            <button className="susbutton">Read More</button>
          </div>
          <img alt="" src={fourthPic}></img>
        </div>
      </div>
    </div>
  );
}

export default SucessStories;
