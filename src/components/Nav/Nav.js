import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { routes } from "./routes";

const Nav = () => {
    return (
        <React.Fragment>
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
                                <a className="nav-link" href="#">Dashboard</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div id="page-container">
                {routes()}
            </div>
        </React.Fragment>
    )
}

export default Nav