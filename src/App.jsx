import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import Products from "./pages/Products.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import RootLayout from "./layout/RootLayout.jsx";

function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<RootLayout/>}>
                <Route index element={<Home/>}/>
                <Route path='products' element={<Products/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='contact' element={<Contact/>}/>
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
