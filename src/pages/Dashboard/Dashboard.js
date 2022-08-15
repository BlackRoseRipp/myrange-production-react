import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="container-fluid m-4">
                <div className='card card-top'>
                    <div className='card-header text-center p-5'>
                        Personal Range Info
                    </div>
                </div>
                <div className='row g-4'>
                    <div className='col col-md-12'>
                        <div className='card card-custom'>
                            <div className='card-header text-center p-5'>
                                Personal Range Info
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard