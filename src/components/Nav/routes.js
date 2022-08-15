import React, { Suspense } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("../../pages/Home/Home"))
const Dashboard = React.lazy(() => import("../../pages/Dashboard/Dashboard"))
const DashboardOrgans = React.lazy(() => import("../Dashboard/DashboardOrgans"))
const DashboardTests = React.lazy(() => import("../Dashboard/DashboardTests"))

export const routes = () => {
    const pages = [
      { path: "/", component: <Home /> },
      { path: "/dashboard", component: <Dashboard /> },
      { path: "/dashboard/organs", component: <DashboardOrgans /> },
      { path: "/dashboard/tests", component: <DashboardTests /> },
    ]
  
    return (
      <Suspense
        fallback={
          <h3 style={{ textAlign: "center", padding: "50px" }}>Loading...</h3>
        }
      >
        <div style={{ minHeight: "100%", width: "100%" }}>
          <Routes>
            {pages.map((page) => {
              return <Route path={page.path} exact element={page.component} />;
            })}
          </Routes>
        </div>
      </Suspense>
    )
  }