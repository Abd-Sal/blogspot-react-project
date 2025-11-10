import Button from 'react-bootstrap/Button';
import { GrLanguage } from "react-icons/gr";
import { NavLink } from 'react-router-dom';

const NavActions = () => {
  return (
    <div className="w-100 d-flex justify-content-lg-end align-items-center gap-2">
        <Button variant="outline-light"> <GrLanguage /> العربية</Button>
        <NavLink to={'/sign-in'}><Button variant="outline-light">Sing In</Button></NavLink>
        <NavLink to={'/register'}><Button variant="light">Create Account</Button></NavLink>
    </div>
  )
}

export default NavActions