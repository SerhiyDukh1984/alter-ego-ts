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

  const checkAuth = (data: boolean) => {
    setIsAuth(data);
  };

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("persist:auth") || "");

    if (auth.login !== "null") {
      setIsAuth(true);
    }
  }, []);

  return (
    <>
      <CssBaseline />
      <Navbar isAuth={isAuth} checkAuth={checkAuth} />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="news" element={<News />} />

        {isAuth && <Route path="profile" element={<Profile />} />}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
