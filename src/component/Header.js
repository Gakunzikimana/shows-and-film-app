import { Link } from "react-router-dom"
import { useNavigate} from "react-router-dom"

function Header() {
const navigate = useNavigate()

    return(
        <div className="Header">
        <div className="Logo"></div>
        <div className="Navigation">
        <ul className="nobull">
       <li><Link to="/Home">Home</Link></li>
        <li><Link to="/Favorites">Favorites</Link></li>
        <li><Link to="/Upcoming">Upcoming</Link></li>
        </ul>
        </div>

      <div className="Search"></div> 
      <input type="text" onChange=
      {handleSearch} />
        </div>
        ) 
        function handleSearch (event) {
          if (event.target.value === ""){
          navigate("/")
        } else {
        navigate("/search/" +event.target.value )

        }
        
}
}

export default Header