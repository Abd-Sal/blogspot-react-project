import { Col, NavLink, Row } from "react-bootstrap"
import { FaArrowRight } from "react-icons/fa";

const RegisterForm = () => {
  return (
    <>
        <Row className="pt-5 h-75 w-100 d-flex justify-content-center align-items-center">
            <Col lg={12} className="d-flex flex-column justify-conetnt-center align-items-center">
                    <form action="" className="w-100 ">
                        <h2 className="mb-3 text-center">Create your account</h2>
                        <div className="d-flex flex-column justify-conetent-start align-items-center gap-3">
                            {/* first name and last name*/}
                            <div className="d-flex justify-content-between align-items-center gap-2 w-75">
                                <div className="w-50">
                                    <label hidden htmlFor="first-name">FirstName</label>
                                    <input 
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        placeholder="First Name"
                                        className="form-control w-100"
                                    />
                               </div>
                               <div className="w-50">
                                <label hidden htmlFor="last-name">FirstName</label>
                                <input 
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    placeholder="Last Name"
                                    className="form-control w-100"
                                />
                               </div>
                            </div>

                            {/* phone number*/}
                            <div className="d-flex flex-column w-75">
                                <label hidden htmlFor="phone-number">Phone Number</label>
                                <input 
                                    type="text"
                                    name="phone-number"
                                    id="phone-number"
                                    placeholder="ex: 963 000 0000"
                                    className="form-control"
                                />
                            </div>

                            {/* username*/}
                            <div className="d-flex flex-column w-75">
                                <label hidden htmlFor="Username">Username</label>
                                <input 
                                    type="text"
                                    name="username"
                                    id="username"
                                    placeholder="Username..."
                                    className="form-control"
                                />
                            </div>

                            {/* email*/}
                            <div className="d-flex flex-column w-75">
                                <label hidden htmlFor="email">Email</label>
                                <input 
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email Address"
                                    className="form-control"
                                />
                            </div>

                            {/* selecting gender */}
                            <div className="w-75">
                                <select 
                                    name="gender"
                                    id="gender"
                                    defaultChecked='9'
                                    className="form-select w-100"
                                >
                                    <option value="9">Male</option>
                                    <option value="10">Female</option>
                                </select>
                            </div>

                            {/* password and confirm password*/}
                            <div className="d-flex justify-content-between align-items-center gap-2 w-75">
                                <div className="w-50">
                                    <label hidden htmlFor="password">Password</label>
                                    <input 
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Password"
                                        className="form-control"
                                    />
                                </div>
                                <div className="w-50">
                                    <label hidden htmlFor="confirm-password">Confirm Password</label>
                                    <input 
                                        type="password"
                                        name="confirm-password"
                                        id="confirm-password"
                                        placeholder="Confirm Password"
                                        className="form-control"
                                    />
                                </div>
                            </div>

                            {/* submit and agree term and conditions*/}
                            <div className="d-flex justify-content-between align-items-center w-75">
                                <div className="d-flex justify-conetnt-start gap-1">
                                    <input 
                                        type="checkbox"
                                        name="agree-tems-and-conditions"
                                        id="agree-tems-and-conditions"
                                    />
                                    <label className={'agree-tems-and-conditions d-flex gap-1'} htmlFor="agree-tems-and-conditions">I Agree with all of your <span><NavLink to={'#'}>Terms & Conditions</NavLink></span></label>
                                </div>
                                <button 
                                    className="btn btn-purple text-white pt-2 pb-2 ps-2 pe-2"
                                >Create Account <FaArrowRight /></button>
                            </div>

                        </div>
                    </form>
            </Col>
        </Row>
    </>
  )
}

export default RegisterForm