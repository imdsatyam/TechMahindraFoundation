import "../CTC/CTC.css";
import Bann from "../../Assets/Donate.png";

function CTC() {
  return (
    <div
      className="CTC"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${Bann})`,
        height: '20rem',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="main">
        <div className="moto">
          <h1 style={{fontSize:'4.8rem',fontWeight:500}}>Your support can make a difference.</h1>
        </div>
        <div className="button__ctc">
          <button className="btn__c" style={{fontWeight:600, textTransform:'capitalize'}}>Donate Now</button>
        </div>
      </div>
    </div>
  );
}

export default CTC;
