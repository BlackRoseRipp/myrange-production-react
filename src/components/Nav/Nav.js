import React from "react";
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import { routes } from "./routes";

const Nav = () => {
    const location = useLocation()

    return (
        <React.Fragment>
            <div style={{display: location.pathname.startsWith('/dashboard') ? 'flex' : 'block', minHeight: '100%', flex: '0 0 100%'}}>
                <Navbar path={location.pathname}/>
                <div id="page-container" style={{flexShrink: '0'}}>
                    {routes()}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Nav