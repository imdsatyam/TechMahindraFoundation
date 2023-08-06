import "../FocusArea/FocusArea.css";
import Banner from "../../Assets/Banner.png";

function FocusArea() {
  return (
    <div
      className="FocusArea"
      style={{
        backgroundImage: `URL(${Banner})`,
        height: "50rem",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="tex">
        <h2 style={{fontSize:30, fontWeight:500,margin:0}}>EMPOWERMENT THROUGH</h2>
        <h1 style={{fontSize:80, fontWeight: 700,margin:0}}>EDUCATION</h1>
        <h3 style={{fontSize:25, fontWeight: 400,margin:0}}>
          Education, Employability, and Disability to empower all to Rise.
        </h3>
      </div>
      <div className="button">
        <button className="btn__1">Know More</button>
        <button className="btn__2">Contact Us</button>
      </div>
      <div className="none"></div>
    </div>
  );
}

export default FocusArea;
