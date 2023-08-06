import "../Home/Home.css";
import Logo from "../../Assets/Logo.png";

function Home() {
  return (
    <nav className="main__nav">
      <div className="logo">
        <a href="#Home" className="nav__logo">
          <img src={Logo} alt="" />
        </a>
      </div>
      <div className="Home__nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#Home" className="nav__link">
              Our Programe
            </a>
          </li>
          <li className="nav__item">
            <a href="#SucessStories" className="nav__link">
              Impact
            </a>
          </li>
          <li className="nav__item">
            <a href="#Services" className="nav__link">
              Resources
            </a>
          </li>
          <li className="nav__item">
            <a href="#About" className="nav__link">
              About Us
            </a>
          </li>
          <li className="nav__item">
            <a href="#Footer" className="nav__link">
              Contact
            </a>
          </li>
          <li className="nav__item">
            <a href="#CTC" className="nav__link">
              Donate
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Home;
