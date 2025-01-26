import Header from '../components/Header';
import Footer from '../components/Footer';
import Photo from '../components/photo';
import MissionVision from "../components/MissionVision.jsx";
import RegisterForms from "../components/RegisterForms.jsx";
import EnquiriesPage from "../components/EnquiriesPage.jsx";


const LandingPage = () => {
    return(
        <>
        <Header/>
        <Photo />
            <MissionVision/>
            <RegisterForms/>
            <EnquiriesPage/>
        <Footer />
        </>
    )
}

export default LandingPage;
