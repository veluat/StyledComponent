import './App.css';
import {Header} from "./layout/header/Header";
import {MainSection1} from "./layout/sections/main-section-1/Main-section-1";
import {ArtOfWeekSection2} from "./layout/sections/art-of-week-section-2/ArtOfWeek-section-2";
import React from "react";
import {CreateAndSell} from "./layout/sections/create-and-sell-section-3/CreateAndSell";
import {PopularArtists} from "./layout/sections/pop-artists-section-4/PopularArtists";
import {Subscribe} from "./layout/sections/subscribe-section-5/Subscribe";
import {Footer} from "./layout/footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <MainSection1/>
            <ArtOfWeekSection2/>
            <CreateAndSell/>
            <PopularArtists/>
            <Subscribe/>
            <Footer/>
        </div>
    );
}

export default App;