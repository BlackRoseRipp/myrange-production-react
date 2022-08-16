import DashboardIcon from '@rsuite/icons/Dashboard';
import LineChartIcon from '@rsuite/icons/LineChart';
import PageIcon from '@rsuite/icons/Page';
import TextImageIcon from '@rsuite/icons/TextImage';
import UserBadgeIcon from '@rsuite/icons/UserBadge';
import React, { useEffect, useState } from 'react';
import { Divider, Nav, Sidenav } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import "./Nav.css";
import './NavDashboard.css';
import useWindowDimensions from './useWindowDimensions';

const Navbar = (props) => {
    const { height, width } = useWindowDimensions()    
    const [expanded, setExpanded] = React.useState(true)
    const [activeKey, setActiveKey] = React.useState('1')

    useEffect(() => {
        if (width < 991) {
            setExpanded(false)
        } else {
            setExpanded(true)
        }
    }, [width])

    if (props.path.startsWith('/dashboard')){
        return (
            <div className='d-flex min-vh-100'>
                <Sidenav expanded={expanded}>
                    <Sidenav.Toggle expanded={expanded} onToggle={expanded => setExpanded(expanded)} style={{marginTop: '0'}}/>
                    <Sidenav.Body>
                        <Nav activeKey={activeKey} onSelect={setActiveKey}>
                            <Nav.Item eventKey="1" icon={<TextImageIcon />} href='/'>
                                Home
                            </Nav.Item>
                            <Divider style={{margin: '3rem 0'}}/>
                            <Nav.Item eventKey="2" icon={<DashboardIcon />} href='/dashboard'>
                            Dashboard
                            </Nav.Item>
                            <Nav.Item eventKey="3" icon={<LineChartIcon />} href='/dashboard/organs'>
                            Test Results by Organ
                            </Nav.Item>
                            <Nav.Item eventKey="4" icon={<PageIcon />} href='/dashboard/tests'>
                            Test Result Documentation
                            </Nav.Item>
                            <Divider style={{margin: '3rem 0'}}/>
                            <Nav.Menu
                                placement="rightStart"
                                eventKey="5"
                                title="Account Settings"
                                icon={<UserBadgeIcon />}
                            >
                            <Nav.Item eventKey="5-1">Account Info</Nav.Item>
                            <Nav.Item eventKey="5-2">Log Out</Nav.Item>
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