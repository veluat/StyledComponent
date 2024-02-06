import './App.css';
import {Header} from "@layout/header";
import {MainSection} from "@layout/sections/main-section-1";
import {ArtOfWeekSection} from "@layout/sections/art-of-week-section-2";
import {PopularArtists} from "@layout/sections/pop-artists-section-4";
import {Subscribe} from "@layout/sections/subscribe-section-5";
import {Footer} from "@layout/footer";
import {CreateAndSell} from "@layout/sections/create-and-sell-section-3";

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