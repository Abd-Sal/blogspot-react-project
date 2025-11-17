import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { GrLanguage } from "react-icons/gr";
import { NavLink } from 'react-router-dom';
import { IoLogOutOutline } from "react-icons/io5";
import Dropdown from 'react-bootstrap/Dropdown';
import { AuthContext } from '../Context/AuthContext';
import { CgProfile } from "react-icons/cg";
import { TfiLayoutListPost } from "react-icons/tfi";
import { IoCreateSharp } from "react-icons/io5";

const NavActions = () => {
  const {authInfo, isInitialized} = useContext(AuthContext);

  return (
    <div className="w-100 d-flex justify-content-lg-end align-items-center gap-2">
        <Button variant="outline-light"> <GrLanguage /> العربية</Button>
        {
          !isInitialized &&
          <>
            <NavLink to={'/sign-in'}><Button variant="outline-light">Sing In</Button></NavLink>
            <NavLink to={'/register'}><Button variant={`${!isInitialized?'light':'outline-light'}`}>Create Account</Button></NavLink>
          </>
        }
        {
          isInitialized &&
          <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic">
              <div className='d-flex justify-content-between align-items-center gap-1'>
                <div className='profile'>
                  <img src={ authInfo.userInfo.user_picture.length ? authInfo.userInfo.user_picture[0].url :  '../../src/assets/profile.png' } alt="profile image" className='rounded-5'/>
                </div>
                <h5 className='mb-0 text-white'>{authInfo.current_user.name}</h5>
              </div>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} to="/me/profile"><CgProfile /> My Profile</Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/me/articles"><TfiLayoutListPost /> My Articles</Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/articles/write-article"><IoCreateSharp /> Create Article</Dropdown.Item>
              <Dropdown.Item 
                as={NavLink} to="/sign-out"
              ><IoLogOutOutline /> Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        }
    </div>
  )
}

export default NavActions