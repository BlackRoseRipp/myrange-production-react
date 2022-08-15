import DashboardIcon from '@rsuite/icons/Dashboard';
import LineChartIcon from '@rsuite/icons/LineChart';
import PageIcon from '@rsuite/icons/Page';
import UserBadgeIcon from '@rsuite/icons/UserBadge';
import React, { useEffect, useState } from 'react';
import { BsFileEarmarkBarGraphFill } from 'react-icons/bs';
import { FaClipboardList } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdSpeedometer } from 'react-icons/io';
import { Divider, Nav, Sidenav } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import SidenavHeader from 'rsuite/esm/Sidenav/SidenavHeader';
import "./Nav.css";
import './NavDashboard.css';
import useWindowDimensions from './useWindowDimensions';

const Navbar = (props) => {
    const { height, width } = useWindowDimensions()
    
    
    {/* <nav className='nav flex-column' style={sidebarCollapse ? sideStyle1.nav : sideStyle2.nav }>
                    <div className='nav-header'>
                        <a className="nav-link" href="/">
                            <span className="nav-text" style={sidebarCollapse ? sideStyle1.navText : sideStyle2.navText }>MyRange</span>
                        </a>
                        <button className='btn btn-toggle-primary' onClick={handleToggleNav} style={sidebarCollapse ? sideStyle1.navToggler : sideStyle2.navToggler}><GiHamburgerMenu /></button>
                    </div>
                    <hr className="navbar-divider"></hr>
                    <div className='nav-content'>
                        <a className='nav-link active' href='/dashboard' style={sidebarCollapse ? sideStyle1.navLink : sideStyle2.navLink }>
                            <IoMdSpeedometer />
                            <span className="nav-text" style={sidebarCollapse ? sideStyle1.navText : sideStyle2.navText }>Dashboard</span>
                        </a>
                        <a className='nav-link my-4' href='/dashboard/organs' style={sidebarCollapse ? sideStyle1.navLink : sideStyle2.navLink }>
                            <BsFileEarmarkBarGraphFill />
                            <span className='nav-text' style={sidebarCollapse ? sideStyle1.navText : sideStyle2.navText }>Organs</span>
                        </a>
                        <a className='nav-link' href='/dashboard/tests' style={sidebarCollapse ? sideStyle1.navLink : sideStyle2.navLink }>
                            <FaClipboardList />
                            <span className='nav-text' style={sidebarCollapse ? sideStyle1.navText : sideStyle2.navText }>Tests</span>
                        </a>
                    </div>
                    <div className='nav-footer'>
                        <div className='copyright'>
                            MyRange © {new Date().getFullYear()}
                        </div>
                    </div>
                </nav> */}
    
    const [expanded, setExpanded] = React.useState(true)
    const [activeKey, setActiveKey] = React.useState('1')

    useEffect(() => {
        if (width < 991) {
            setExpanded(false)
        } else {
            setExpanded(true)
        }
    }, [width])

    const toggleExpand = () => {
        setExpanded(cur => !cur)
    }

    if (props.path.startsWith('/dashboard')){
        return (
            <div className='d-flex min-vh-100'>
                <Sidenav expanded={expanded}>
                    <SidenavHeader className='d-inline-flex' style={{justifyContent: 'center', overflow: 'hidden'}}>
                        <button 
                            aria-label="Collapse" 
                            type="button" 
                            className="rs-sidenav-toggle-button rs-btn-icon rs-btn-icon-placement-left rs-btn rs-btn-default" 
                            onClick={toggleExpand}
                            style={{fontSize: '1.5rem', color: '#000', padding: '1.5rem 0'}}
                        >
                            <GiHamburgerMenu />
                        </button>
                        <a className='nav-header align-self-center p-3' href='/' style={expanded ? {display: 'block'} : {display: 'none'}}>MyRange</a>
                        
                    </SidenavHeader>
                    <Divider style={{margin: '3rem 0'}}/>
                    <Sidenav.Body>
                        <Nav activeKey={activeKey} onSelect={setActiveKey}>
                            <Nav.Item eventKey="1" icon={<DashboardIcon />} href='/dashboard'>
                            Dashboard
                            </Nav.Item>
                            <Nav.Item eventKey="2" icon={<LineChartIcon />} href='/dashboard/organs'>
                            Test Results by Organ
                            </Nav.Item>
                            <Nav.Item eventKey="3" icon={<PageIcon />} href='/dashboard/tests'>
                            Test Result Documentation
                            </Nav.Item>
                            <Divider style={{margin: '3rem 0'}}/>
                            <Nav.Menu
                                placement="rightStart"
                                eventKey="4"
                                title="Account Settings"
                                icon={<UserBadgeIcon />}
                            >
                            <Nav.Item eventKey="4-1">Account Info</Nav.Item>
                            <Nav.Item eventKey="4-2">Log Out</Nav.Item>
                            </Nav.Menu>
                        </Nav>
                    </Sidenav.Body>
                    <div className="nav-footer">
                        <div className='copyright'>
                            MyRange © {new Date().getFullYear()}
                        </div>
                    </div>
                </Sidenav>
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