import React from 'react';
import DashboardHome from '../Dashboard/DashboardHome';
import DashboardOrgans from '../Dashboard/DashboardOrgans';
import DashboardTests from '../Dashboard/DashboardTests';

const NavDashboard = () => {
    return (
        <div className="d-flex align-items-start">
            <div className="nav flex-column" id="dashboard-tab" role="tablist" aria-orientation="vertical">
                <button 
                    className="nav-link active" 
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
                    className="nav-link" 
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
                    className="nav-link" 
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

        </div>
    )
}

export default NavDashboard