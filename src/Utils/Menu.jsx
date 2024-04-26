import "../css/Menu.css";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu-container">
      <div className="menu-navigation-items">
        <ul className="menu-navigation-list">
          <li className="menu-list-item">
            <Link to={"/"}>Home Page</Link>
          </li>
          <li className="menu-list-item">
            <Link to={"/Hire-me"}>Hire Me</Link>
          </li>
          <li className="menu-list-item">
            <Link to={"https://venaai.com"}>VenaAI</Link>
          </li>
          <li className="menu-list-item">
            <Link to={"https://hirelcube.com"}>Hirelcube</Link>
          </li>
          <li className="menu-list-item">
            <Link to={"/Message"}> Message</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export { Menu };
