import React from "react";
import Navbar from './Navbar'
import {useLocation} from 'react-router-dom';
import { routes } from "./routes";

const Nav = () => {
    const location = useLocation()

    return (
        <React.Fragment>
            <div style={{display: location.pathname.startsWith('/dashboard') ? 'flex' : 'block', minHeight: '100%'}}>
                <Navbar path={location.pathname}/>
                <div id="page-container">
                    {routes()}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Nav