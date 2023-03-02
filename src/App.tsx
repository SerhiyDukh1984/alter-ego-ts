import React, { lazy } from "react";
import { useEffect, useState } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
const Home = lazy(() => import("./pages/Home"));
const News = lazy(() => import("./pages/News"));
const Profile = lazy(() => import("./pages/Profile"));

const App: React.FC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [getIsAuth, setGetIsAuth] = useState<boolean>(false);
  const [logout, setLogout] = useState<boolean>(false);

  const checkAuth = (data: boolean) => {
    setIsAuth(data);
  };

  const checkLogout = (data: boolean) => {
    setLogout(data);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "");

    if (user.login === "admin" && user.password === "12345") {
      setGetIsAuth(true);
      setIsAuth(true);
    }
  }, []);

  return (
    <>
      <CssBaseline />
      <Navbar isAuth={isAuth} checkAuth={checkAuth} checkLogout={checkLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="news" element={<News />} />
        {isAuth || (getIsAuth && !logout) ? (
          <Route path="profile" element={<Profile />} />
        ) : (
          <Route path="/" />
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
