import { Col, Row } from "react-bootstrap"
import { FaArrowRight } from "react-icons/fa";

const LoginForm = () => {
  return (
    <>
        <Row className="h-75 w-100 d-flex justify-content-center align-items-center">
            <Col lg={12} className="d-flex flex-column justify-conetnt-center align-items-center">
                    <form action="" className="w-100 ">
                        <h2 className="mb-5 text-center">Sign In to your account</h2>
                        <div className="d-flex flex-column justify-conetent-start align-items-center gap-3">
                            {/* Username*/}
                            <div className="d-flex flex-column w-75">
                                <label hidden htmlFor="username">Username</label>
                                <input 
                                    type="text"
                                    name="username"
                                    id="username"
                                    placeholder="Username"
                                    className="form-control w-100"
                                />
                            </div>

                            {/* Password*/}
                            <div className="d-flex flex-column w-75">
                                <label hidden htmlFor="password">Password</label>
                                <input 
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="******"
                                    className="form-control"
                                />
                            </div>

                            {/* submit and remember me*/}
                            <div className="d-flex justify-content-between align-items-center w-75">
                                <div className="d-flex justify-conetnt-start gap-1">
                                    <input 
                                        type="checkbox"
                                        name="remember-me"
                                        id="remember-me"
                                    />
                                    <label className={'remember-me'} htmlFor="remember-me">Remember me</label>
                                </div>
                                <button 
                                    className="btn btn-purple text-white pt-2 pb-2 ps-4 pe-4"
                                >Sign In <FaArrowRight /></button>
                            </div>
                        </div>
                    </form>
            </Col>
        </Row>
    </>
  )
}

export default LoginForm