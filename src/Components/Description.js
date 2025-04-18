import React from "react";
import CountDescription from '../Components/CountDescription';
import picBanner from "../Assets/Employability.png";
import picBanner_1 from "../Assets/Education.png";
import picBanner_2 from "../Assets/Disability.png";

function Description() {
  return (
    <>
      <div className="Description">
        <div className="descriptionMain">
          <div className="descriptionBanner">
            <div className="cards-container">
              <div className="card">
                <img src={picBanner} alt="Employability" className="banner__pic" />
                <div className="card-content">
                  <div className="card-content-right">
                    <div className="card-content-left">
                      <h3>Employability</h3>
                      <p className="tex__p ">The Foundation under its endeavour SMART (Skills for Market Training) program is making the...</p>
                    </div>
                    <span className="arrow">→</span>
                  </div>
                </div>
              </div>
              <div className="card">
                <img src={picBanner_1} alt="Education" className="banner__pic" />
                <div className="card-content">
                  <div className="card-content-right">
                    <div className="card-content-left">
                      <h3>Education</h3>
                      <p className="tex__p ">With our vision of ‘Empowerment through Education’, the Foundation has extended its support to various...</p>
                    </div>
                    <span className="arrow">→</span>
                  </div>
                </div>
              </div>
              <div className="card">
                <img src={picBanner_2} alt="Disability" className="banner__pic" />
                <div className="card-content">
                  <div className="card-content-right">
                    <div className="card-content-left">
                      <h3>Disability</h3>
                      <p className="tex__p ">The Foundation believes that there is Ability in Disability. With the focus on creating an inclusive world and...</p>
                    </div>
                    <span className="arrow">→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="countDescription">
        <div className="descriptionMain">
          <div className="descriptionBanner">
            <CountDescription />
          </div>
        </div>
      </div>
    </>
  );
}

export default Description;
