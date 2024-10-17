import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import Products from "./pages/Products.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import RootLayout from "./layout/RootLayout.jsx";
import ContactLayout from "./layout/ContactLayout.jsx";
import ContactInfo from "./components/ContactInfo.jsx";
import ContactForm from "./components/ContactForm.jsx";
import NotFound from "./components/NotFound.jsx";
import Jobs, {jobsLoader} from "./pages/Jobs.jsx";
import JobsLayout from "./layout/JobsLayout.jsx";
import JobDetails, {jobDetailsLoader} from "./components/JobDetails.jsx";
import Error from "./components/Error.jsx";

function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<RootLayout/>}>
                <Route index element={<Home/>}/>
                <Route path='products' element={<Products/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='contact' element={<ContactLayout/>}>
                    <Route path='info' element={<ContactInfo/>}/>
                    <Route path='form' element={<ContactForm/>}/>
                </Route>
                <Route path='jobs' element={<JobsLayout/>} errorElement={<Error/>}>
                    <Route index element={<Jobs/>} loader={jobsLoader}/>
                    <Route path=':id' element={<JobDetails/>} loader={jobDetailsLoader}/>
                </Route>
                <Route path='*' element={<NotFound/>}/>
            </Route>
        )
    )

    return (
        <RouterProvider router={router}/>

        // {/*<Navbar/>*/}
        // {/*<div className="container">*/}
        // {/*    <Routes>*/}
        // {/*<Route path='/' element={<Home/>}/>*/}
        // {/*<Route path='/products' element={<Products/>}/>*/}
        // {/*<Route path='/about' element={<About/>}/>*/}
        // {/*<Route path='/contact' element={<Contact/>}/>*/}
        // {/*</Routes>*/}
        // {/*</div>*/}
    )
}

export default App
