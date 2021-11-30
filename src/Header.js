import logo from "./images.png"
import "./Navbar.css"

const Header = ()=>{
    return(
        <div>
            <img className = "image" src = {logo} alt = "check your internet connection" />
            <h1>Fun Facts About React</h1>
        </div>
    )
}

export default Header