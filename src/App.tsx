import './App.css';
import {Header} from "./layout/header/Header";
import {MainSection} from "./layout/sections/main-section-1/MainSection";
import {ArtOfWeekSection} from "./layout/sections/art-of-week-section-2/ArtOfWeekSection";
import React from "react";
import {CreateAndSell} from "./layout/sections/create-and-sell-section-3/CreateAndSell";
import {PopularArtists} from "./layout/sections/pop-artists-section-4/PopularArtists";
import {Subscribe} from "./layout/sections/subscribe-section-5/Subscribe";
import {Footer} from "./layout/footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <MainSection/>
            <ArtOfWeekSection/>
            <CreateAndSell/>
            <PopularArtists/>
            <Subscribe/>
            <Footer/>
        </div>
    );
}

export default App;