import { Route, Routes } from "react-router-dom"
import Layout from "./Pages/Layout"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import ContactUs from "./Pages/ContactUs"
import AboutUs from "./Pages/AboutUs"
import Articles from "./Pages/Articles"
import NotFound from "./Pages/NotFound"
import Profile from "./Pages/Profile"
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from "./Context/AuthContext"
import Logout from "./Pages/Logout"

function App() {

  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>} />
            <Route path="/articles" element={<Articles />}/>
            <Route path="/about-us" element={<AboutUs/>} />
            <Route path="/contact-us" element={<ContactUs/>} />
            <Route path="/me/profile" element={<Profile/>} />
            <Route path="/sign-out" element={<Logout/>} />
            <Route path="*" element={<NotFound/>} />
          </Route>
          <Route path="/sign-in" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
