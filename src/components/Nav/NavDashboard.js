import {
    CDBSidebar,
    CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem
} from 'cdbreact';
import React from 'react';
import DashboardHome from '../Dashboard/DashboardHome';
import DashboardOrgans from '../Dashboard/DashboardOrgans';
import DashboardTests from '../Dashboard/DashboardTests';
import './NavDashboard.css';

const NavDashboard = () => {
    /* <div className="d-flex">
            <div className="nav navbar-expand-md flex-column side-nav" id="dashboard-tab" role="tablist" aria-orientation="vertical">
                <div className="container navigation-container">
                    <button 
                        className="nav-link btn btn-nav-primary active" 
                        id="dashboard-home-tab" 
                        data-bs-toggle="tab" 
                        data-bs-target="#dashboard-home" 
                        type='button'
                        role="tab" 
                        aria-controls='dashboard-home'
                        aria-selected="true"
                    >
                        Home
                    </button>
                    <button 
                        className="nav-link btn btn-nav-primary" 
                        id="dashboard-organs-tab" 
                        data-bs-toggle="tab" 
                        data-bs-target="#dashboard-organs" 
                        type='button'
                        role="tab" 
                        aria-controls='dashboard-organs'
                        aria-selected="false"
                    >
                        Test Results by Organ
                    </button>
                    <button 
                        className="nav-link btn btn-nav-primary" 
                        id="dashboard-tests-tab" 
                        data-bs-toggle="tab" 
                        data-bs-target="#dashboard-tests" 
                        type='button'
                        role="tab" 
                        aria-controls='dashboard-tests'
                        aria-selected="false"
                    >
                        Tests
                    </button>
                </div>
                <div className='footer-clean'>
                    <div className="container">
                        <p className="copyright">
                            MyRange © {new Date().getFullYear()}
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="tab-content" id="dashboard-tab-content">
                <div 
                    className="tab-pane fade show active" 
                    id='dashboard-home' 
                    role="tabpanel" 
                    aria-labelledby='dashboard-home-tab' 
                    tabIndex='0'
                >
                    <DashboardHome />
                </div>
                <div 
                    className="tab-pane fade" 
                    id='dashboard-organs' 
                    role="tabpanel" 
                    aria-labelledby='dashboard-organs-tab' 
                    tabIndex='0'
                >
                    <DashboardOrgans />
                </div>
                <div 
                    className="tab-pane fade" 
                    id='dashboard-tests' 
                    role="tabpanel" 
                    aria-labelledby='dashboard-tests-tab' 
                    tabIndex='0'
                >
                    <DashboardTests />
                </div>
                
                
            </div>

        </div> */


    return (
        <div style={{height: '100%'}}>
            <CDBSidebar style={{height: '100%'}}>
                <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Dashboard Menu</CDBSidebarHeader>
                <CDBSidebarContent>
                    <CDBSidebarMenu>
                        <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
                        <CDBSidebarMenuItem icon="sticky-note">Organs</CDBSidebarMenuItem>
                        <CDBSidebarMenuItem icon="credit-card" iconType="solid">
                        Tests
                        </CDBSidebarMenuItem>
                    </CDBSidebarMenu>
                </CDBSidebarContent>

                <CDBSidebarFooter style={{ textAlign: 'center', marginTop: 'auto'}}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{padding: '20px 5px'}}
                    >
                        MyRange © {new Date().getFullYear()}
                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>
    )
}

export default NavDashboard