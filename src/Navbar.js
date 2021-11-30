import logo from "./images.png"

 const Navbar = () => {
    return(
        <div>
            <img src = {logo} alt = "check your internet connection"/>
            <h1>Fun Facts About React</h1>
                <ul>
                    <li>Was Released in 2013</li>
                    <li>Was Originally Created by Jordan Walke </li>
                    <li>Has Well Over 100k star on Github</li>
                    <li>Is Maintained By Facebook</li>
                </ul>
        </div>
    )
}


export default Navbar;