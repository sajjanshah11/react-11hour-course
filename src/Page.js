import Navbar from "./Components/Navbar"
import Card from "./Components/Card";
import data from "./data";
import "./Components/style.css"

 const Page = () => {
    
    const dataElement = data.map((el)=>{
        return (
            <Card 
                key = {el.id}
                item = {el}
           />
        )
    })
    return(
        <div>
           <Navbar />
           <section class = "card-list">
                {dataElement}
           </section>
        </div>
    )
}


export default Page;