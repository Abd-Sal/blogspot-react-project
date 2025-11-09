import { NavLink } from "react-router-dom"

const Logo = () => {
  return (
    <NavLink to={'/'}>
        <img src="../../src/assets/Logo.png" alt="Logo" />
    </NavLink>
  )
}

export default Logo