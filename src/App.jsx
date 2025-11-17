import { Route, Routes, Navigate } from "react-router-dom"
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
import { AuthContext } from "./Context/AuthContext"
import Logout from "./Pages/Logout"
import { useContext } from "react"
import CreateArticle from "./Pages/CreateArticle"

function App() {
  const {isInitialized} = useContext(AuthContext)
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="/articles" element={isInitialized ? <Articles /> :  <Navigate to="/sign-in" replace />}/>
          <Route path="/articles/write-article" element={isInitialized ? <CreateArticle /> :  <Navigate to="/sign-in" replace />}/>
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/contact-us" element={<ContactUs/>} />
          <Route path="/me/profile" element={isInitialized ? <Profile/> :  <Navigate to="/sign-in" replace />} />
          <Route path="/sign-out" element={isInitialized ? <Logout/> :  <Navigate to="/" replace />} />
          <Route path="*" element={<NotFound/>} />
        </Route>
        <Route path="/sign-in" element={isInitialized ?  <Navigate to="/" replace /> : <Login/>} />
        <Route path="/register" element={isInitialized ? <Navigate to="/" replace /> : <Register/>} />
      </Routes>
    </>
  )
}

export default App
