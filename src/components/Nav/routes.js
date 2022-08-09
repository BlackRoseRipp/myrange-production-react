import React, { Suspense } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("../../pages/Home/Home"))

export const routes = () => {
    const pages = [
      { path: "/", component: <Home /> },
    ]
  
    return (
      <Suspense
        fallback={
          <h3 style={{ textAlign: "center", padding: "50px" }}>Loading...</h3>
        }
      >
        <div style={{ minHeight: "100%" }}>
          <Routes>
            {pages.map((page) => {
              return <Route path={page.path} exact element={page.component} />;
            })}
          </Routes>
        </div>
      </Suspense>
    )
  }