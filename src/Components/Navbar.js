import "./style.css";

const Navbar = ()=>{
    return(
        <>
            <div className = "nav-items">
                <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png" alt = "check your internet connection"/>
            </div>
            <div className = "image-collections">
                <img src = "https://content.fortune.com/wp-content/uploads/2014/12/27496569_original.jpg" alt = "Internet Missing" />
            </div>
            <div className = "text">
                <h2>Online Experience</h2>
                <p>Join Unique Interactive activities led by one of a kind host -all without leaving home</p>
            </div>
        </>
    )
}

export default Navbar;