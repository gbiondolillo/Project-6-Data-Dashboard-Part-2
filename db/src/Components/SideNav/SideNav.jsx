import "./SideNav.css";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <div className="Nav">
      <h1>RandoRecipes</h1>
      <hr />
      <li className="selected">
        <Link to={`/`}>🏠 Dashboard</Link>
      </li>
      <li>
        <a>🔎 Search</a>
      </li>
      <li>
        <a>ℹ️ About</a>
      </li>
    </div>
  );
}

export default SideNav;
