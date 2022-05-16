import "../App.css";
import home from "../images/home.png";
import logo from "../images/logo.png";
import compass from "../images/compass.png";
import heart from "../images/heart.png";
import send from "../images/send.png";
import story from "../images/story.png";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <img src={logo} alt="instagram logo" />

  <input type="text" placeholder="Search.."></input>
            
            <div className="links">
                <img src={home} alt="home" />
                <img src={send} alt="send" />
                <img src={story} alt="story" />
                <img src={compass} alt="compass" />
                <img src={heart} alt="heart" />
            </div>
        </nav>
     );
}
 
export default Navbar;