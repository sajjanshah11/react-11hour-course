import Header from "./Header";
import Footer from "./Footer";
import Maincontent from "./Maincontent";
import Navbar from "./Navbar";



 const Page = () => {
    return(
        <div>
            <Header />
            <Navbar/>
            <Maincontent/>    
            <Footer/>
        </div>
    )
}


export default Page;