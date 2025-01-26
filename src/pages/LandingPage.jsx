import Header from '../components/Header';
import Footer from '../components/Footer';
import Photo from '../components/photo';
import MissionVision from "../components/MissionVision.jsx";


const LandingPage = () => {
    return(
        <>
        <Header/>
        <Photo />
            <MissionVision/>
        <Footer />
        </>
    )
}

export default LandingPage;
