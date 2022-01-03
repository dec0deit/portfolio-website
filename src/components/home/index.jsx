import react from "react";
import Body from "../body/index";
import Header from "../header/index";
import Footer from '../footer/index'
function Home(){

    return <div>
        <div>
        <Header/>
        </div>
        <div>
            <Body/>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
}

export default Home;