import React from 'react';
import firstPic from "../Assets/Empowerment.png";
import secondPic from "../Assets/Learning.png";
import thirdPic from "../Assets/Light.png";
import fourthPic from "../Assets/Life.png";

function SuccessStories() {
    const stories = [
        {
            image: firstPic,
            title: "TOWARDS THE JOURNEY OF EMPOWERMENT",
            text: "Pooja had to discontinue her education after completing class 12 as her parents could not afford further education Her father who is a farmer was the sole earning member",
        },
        {
            image: secondPic,
            title: <>LEARNING BY <span className="spun">DOING</span></>,
            text: "This is the story of Sanjay, a student at Karnataka Public School one of Tech Mahindra Foundation's ARISE projects...",
        },
        {
            image: thirdPic,
            title: <>HOPE MEANS <span className="spun">LIGHT!</span></>,
            text: "Sometimes, a little help in time can change the world around a person! Krishna Pradhan is a 4-year-old child...",
        },
        {
            image: fourthPic,
            title: <>A DAY IN <span className="spun">LIFE</span></>,
            text: "As most offices get ready to absorb their workforce. the In-Service Teacher Education Institute does so too...",
        }
    ];

    return (
        <div className="countDescription">
            <div className="descriptionMain">
                <div className="descriptionBanner d-flex flex-column pt-0">
                    <div className="SuccessStoriesMain">
                        <div className="descriptionNextMain d-flex justify-content-center align-items-center flex-column">
                            <h1> Rise for <span>Success Stories</span> </h1>
                            <hr className="highlight-line" />
                            <p>
                                'Rise for a more equal world', 'Rise to be future-ready', and 'Rise to create value' are our guiding principles.
                                Inspired by this vision, we are striving to create a better world through our education, employability, and
                                disability programs. In this journey, we became catalysts in the lives of individuals who are making a
                                meaningful difference within communities. Read their stories of hard work, grit, passion, and success here.
                            </p>
                        </div>
                    </div>
                    <div className="bannersuccess d-flex flex-wrap justify-content-center gap-4 mt-4">
                        {stories.map((story, index) => (
                            <div className={`div__sml__bnr ${index % 2 !== 0 ? "reverse" : ""}`} key={index}>
                                {index % 2 === 0 && <img src={story.image} alt="story" />}
                                <div className="bnsi">
                                    <h3>{story.title}</h3>
                                    <p>{story.text}</p>
                                    <button className="susbutton">Read More</button>
                                </div>
                                {index % 2 !== 0 && <img src={story.image} alt="story" />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SuccessStories;
