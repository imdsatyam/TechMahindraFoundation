import Bann from "../Assets/Donate.png";

function DonateNow() {
    return (
        <div className="descriptionNextMain">
            <div
                className="DonateNow "
                style={{
                    background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${Bann})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >
                <div className="main">
                    <div className="moto">
                        <h1 className="m-0">Your support can make a difference.</h1>
                    </div>
                    <div className="button__ctc">
                        <button className="susbutton">Donate Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DonateNow;