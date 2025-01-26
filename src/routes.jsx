import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
// import EnquiriesPage from "./components/EnquiriesPage";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    // {
    //     path: "/EnquiriesPage",
    //     element: <EnquiriesPage />,
    // },

]);

export default routes;
