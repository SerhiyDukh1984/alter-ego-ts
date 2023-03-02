import React from "react";
import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import {
  AppBar,
  Avatar,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import LoginForm from "./LoginForm";
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";
import { logoutUser } from "../redux/auth/authSlice";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  button: {
    marginRight: "8px",
    width: "100px",
  },
  title: {
    flexGrow: 1,
    textDecoration: "none",
    color: "white",
  },
}));

interface NavbarProps {
  isAuth: boolean;
  checkAuth(data: boolean): void;
  checkLogout(data: boolean): void;
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const classes = useStyles();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    localStorage.setItem("login", "");
    localStorage.setItem("password", "");

    dispatch(
      logoutUser({
        login: null,
        password: null,
      })
    );

    setIsOpen(false);
    props.checkAuth(false);
    props.checkLogout(true);
  };

  useEffect(() => {
    if (props.isAuth) {
      setIsOpen(false);
    }
  }, [props.isAuth]);

  return (
    <>
      <AppBar position="fixed">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography className={classes.title} variant="h6" color="primary">
              <Link to="/" className={classes.title}>
                {t("appbar.home")}
              </Link>
            </Typography>

            <Typography className={classes.title} variant="h6" color="primary">
              <NavLink to="news" className={classes.title}>
                {t("appbar.news")}
              </NavLink>
            </Typography>

            <Typography className={classes.title} variant="h6" color="primary">
              <NavLink to="profile" className={classes.title}>
                {t("appbar.profile")}
              </NavLink>
            </Typography>

            <LanguageSwitcher />

            {!props.isAuth ? (
              <Button
                className={classes.button}
                variant="text"
                color="inherit"
                onClick={openModal}
              >
                {t("appbar.logIn")}
              </Button>
            ) : (
              <Button
                className={classes.button}
                variant="text"
                color="inherit"
                onClick={closeModal}
              >
                {t("appbar.logOut")}
              </Button>
            )}
            {!props.isAuth ? (
              <Avatar alt="?" src="" />
            ) : (
              <Avatar alt="avatar" src="./images/avatar.jpg" />
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <LoginForm
        isOpen={isOpen}
        checkAuth={props.checkAuth}
        closeModal={closeModal}
      />
    </>
  );
};

export default Navbar;
