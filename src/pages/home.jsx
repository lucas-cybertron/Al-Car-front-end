import React from "react";
import Footer from "../components/footer"
import Hero from "../components/hero";
import bghero from "../assets/imagens/bghero.jpg"

import Navbar  from "../components/navbar";


const Home = () => {
    return (
        <>
 
            <div className="flex flex-col min-h-screen">
            <Navbar />

            
                <div>
                 <Hero img = {bghero} />
                </div>
                
                <Footer />
            </div>
        </>
    )
}

export default Home;
