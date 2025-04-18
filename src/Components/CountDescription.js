import React from "react";

function CountDescription() {
  return (  
    <div className="underDescription">
      <div className="count">
        <h4>Community health and other</h4>
        <h1>20,734</h1>
        <h4>in FY 23 and counting</h4>
        <hr className="highlight-line" />
        <h4>Employability</h4>
        <h1>1,56,748</h1>
        <h4>Youth Trained</h4>
        <hr className="highlight-line" />
        <h4>Volunteering</h4>
        <h1>57,515</h1>
        <h4>Hours in FY 23</h4>
        <hr className="highlight-line" />
        <h4>Teachers</h4>
        <h1>49,909</h1>
        <h4>Supported</h4>
      </div>
      <div className="descriptionNextMain">
        <h1>
          Description <span>Tech Mahindra Foundation</span>
        </h1>
        <hr className="highlight-line" />
        <h3>
          Impacted 3,94,727 beneficiaries directly across all our programs*
        </h3>
        <p>
          Founded in the year 2006, Tech Mahindra Foundation is the
          Corporate Social Responsibility (CSR) arm of Tech Mahindra
          Limited. We work extensively on the vision of 'Empowerment through
          Education' with three key focus areas - Education, Employability,
          and Disability to empower all to Rise. We are trying to bring
          social change and touch lives through our 150+ projects with the
          help of 90+ partners in 11 locations across India.
        </p>
        <div className="count-Desc-btn">
            <button className="bttn__1">Know More</button>
            <button className="bttn__2">Download Our Brochure</button>
        </div>
      </div>
    </div>
  );
}

export default CountDescription;