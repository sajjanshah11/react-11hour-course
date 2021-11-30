import logo from "./images.png";
import "./style.css"

const Header = ()=>{
    return(
        <div className = "nav-bar">
            <div className = "logo">
                <img src = {logo} alt = "check your internet connection"/>
                <h1>ReactFacts</h1>
            </div>
            <h2>React Course -Project 1</h2> 
        </div>
    )
}

export default Header;