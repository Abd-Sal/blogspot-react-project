import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SocialMedia = () => {
  return (
    <div className="social-media d-flex justify-content-start align-items-center gap-2">
        <NavLink to={'https://www.facebook.com'}>
            <FaFacebookF />
        </NavLink>
        <NavLink to={'https://www.instagram.com'}>
            <FaInstagram />
        </NavLink>
        <NavLink to={'https://www.linkedin.com'}>
            <FaLinkedinIn />
        </NavLink>
        <NavLink to={'https://www.x.com'}>
            <FaTwitter />
        </NavLink>
        <NavLink to={'https://www.youtube.com'}>
            <FaYoutube />
        </NavLink>
    </div>
  )
}

export default SocialMedia