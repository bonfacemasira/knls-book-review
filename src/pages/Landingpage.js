import React from "react";
import Login from "../components/Login";
import SignUp from "../components/SignUP";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function Landingpage() {
    return (
        <Router>
            <div>
                <nav>
                    <div>
                        <Link>positionX</Link>
                        <div>
                            <ul>
                                <li>
                                    <Link to={'/login'}>Login</Link>
                                </li>
                                <li>
                                    <Link to={'/sign-up'}>Sign up</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div>
                    <div>
                        <Routes>
                            <Route path="/login" element={<Login />} />
                            <Route path="/sign-up" element={<SignUp />} />
                            <Route exact path="/" element={<Login />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default Landingpage;