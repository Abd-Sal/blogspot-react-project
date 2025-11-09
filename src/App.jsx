import { Route, Routes } from "react-router-dom"
import Layout from "./Pages/Layout"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import ContactUs from "./Pages/ContactUs"
import AboutUs from "./Pages/AboutUs"
import Articles from "./Pages/Articles"
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from "./Pages/NotFound"

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>} />
            <Route path="/articles" element={<Articles />}/>
            <Route path="/about-us" element={<AboutUs/>} />
            <Route path="/contact-us" element={<ContactUs/>} />
            <Route path="*" element={<NotFound/>} />
          </Route>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
    </>
  )
}

export default App
