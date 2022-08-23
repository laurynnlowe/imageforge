import React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import App from "./App";
import Draw from "./Draw";
import AllPages from "./AllPages";
import Login from "./Login";

const Nav = () => {

    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    {/* <li>
                        <Link to="/about">About</Link>
                    </li> */}
                    <li>
                        <Link to="/draw">Draw</Link>
                    </li>
                    <li>
                        <Link to="/allpages">View Pages</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
                <Routes>
                    <Route path='/'>
                        <App />
                    </Route>
                    {/* <Route path='/about'>
                        <About />
                    </Route> */}
                    <Route path='/draw'>
                        <Draw />
                    </Route>
                    <Route path='/allpages'>
                        <AllPages />
                    </Route>
                    <Route path='/login'>
                        <Login />
                    </Route>
                </Routes>
            </div>
        </Router>
    )
}

export default Nav;