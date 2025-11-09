import Button from 'react-bootstrap/Button';
import { GrLanguage } from "react-icons/gr";

const NavActions = () => {
  return (
    <div className="w-100 d-flex justify-content-lg-end align-items-center gap-2">
        <Button variant="outline-light"> <GrLanguage /> العربية</Button>
        <Button variant="outline-light">Sing In</Button>
        <Button variant="light">Create Account</Button>
    </div>
  )
}

export default NavActions