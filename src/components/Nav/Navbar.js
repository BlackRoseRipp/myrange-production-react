import React, { useEffect, useState } from 'react';
import SidebarMenu, {
    SidebarMenuBody,
    SidebarMenuHeader,
    SidebarMenuNav,
    SidebarMenuNavIcon,
    SidebarMenuNavTitle
} from 'react-bootstrap-sidebar-menu';
import { BsFileEarmarkBarGraphFill } from 'react-icons/bs';
import { FaClipboardList } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdSpeedometer } from 'react-icons/io';
import "./Nav.css";
import './NavDashboard.css';
import { useWindowDimensions } from './useWindowDimensions';

const Navbar = (props) => {
    const [sidebarCollapse, setSidebarCollapse] = useState(true)
    //const { height, width } = useWindowDimensions()

    const handleToggleNav = () => {
        setSidebarCollapse(cur => !cur)
    }
    
    
    /* useEffect(() => {

    }, [width]) */

    if (props.path.startsWith('/dashboard')){
        return (
            <div className='d-flex min-vh-100'>
                <nav className='nav flex-column'>
                    <div className='nav-header'>
                        <a className="nav-link" href="/">
                            <span className="nav-text">MyRange</span>
                        </a>
                        <button className='btn btn-toggle-primary' onClick={handleToggleNav}><GiHamburgerMenu /></button>
                    </div>
                    <hr className="navbar-divider"></hr>
                    <div className='nav-content'>
                        <a className='nav-link active' href='/dashboard'>
                            <IoMdSpeedometer />
                            <span className="nav-text">Dashboard</span>
                        </a>
                        <a className='nav-link my-4' href='/dashboard/organs'>
                            <BsFileEarmarkBarGraphFill />
                            <span className='nav-text'>Organs</span>
                        </a>
                        <a className='nav-link' href='/dashboard/tests'>
                            <FaClipboardList />
                            <span className='nav-text'>Tests</span>
                        </a>
                    </div>
                    <div className='nav-footer'>
                        <div className='copyright'>
                            MyRange © {new Date().getFullYear()}
                        </div>
                    </div>
                </nav>
            </div>
        )
    } else {
        return (
            <nav className="navbar navbar-dark navbar-expand-lg" style={{ backgroundColor: '#0C1559'}}>
                <div className="container-lg">
                    {/* Placeholder for future logo */}
                    <a className="navbar-brand" href="/">MyRange</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="bi bi-justify" style={{ color: "white" }}></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-4 me-auto">
                            <li className="nav-item visually-hidden">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav d-flex justify-content-end">
                            <li className="nav-item">
                                <a className="nav-link" href="/dashboard">Dashboard</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar