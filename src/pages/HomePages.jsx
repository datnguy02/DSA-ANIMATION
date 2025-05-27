import NavBar from "../components/nav/NavBar";
import Hero from "../components/Hero/Hero";
import DataStructureList from "../components/DataStructureIntro/DataStructureList";
import HomePageFooter from "../components/Footer/HomePageFooter";

const HomePage = () => {
    return (
        <> 
            <NavBar/>
            <Hero/>
            <DataStructureList/>
            <HomePageFooter/>
        </>
    );
};

export default HomePage