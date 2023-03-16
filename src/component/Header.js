import { Link } from "react-router-dom"
function Header() {
    return(
        <div className="Header">
        <div className="Logo"></div>
        <div className="Navigation">
        <ul class="nobull">
       <li><Link to="/">Home</Link></li>
        <li><Link to="/Favorites">Favorites</Link></li>
        <li><Link to="/Upcoming">Upcoming</Link></li>
        </ul>
        </div>

      <div className="Search"></div> 
        </div>
        )
}

export default Header