import React from "react";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Navigate } from "react-router";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { makeStyles } from "@mui/styles";
import { loginUser } from "../redux/auth/authSlice";

const useStyles = makeStyles(() => ({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    width: "150px",
    color: "primary",
  },
}));

interface AuthProps {
  checkAuth: (data: boolean) => void;
}

const Auth: React.FC<AuthProps> = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { t } = useTranslation();
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "login") {
      setLogin(value.toLocaleLowerCase().trim());
    }

    if (name === "password") {
      setPassword(value.toLocaleLowerCase().trim());
    }
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (login === "admin" && password === "12345") {
      dispatch(
        loginUser({
          login,
          password,
        })
      );

      props.checkAuth(true);
      setLoggedIn(true);
    } else alert(`${t("registration.error")}`);

    reset();
  }

  if (loggedIn) {
    return <Navigate to="/profile" />;
  }

  const reset = () => {
    setLogin("");
    setPassword("");
  };

  return (
    <>
      <Box
        component="form"
        className={classes.form}
        sx={{
          "& .MuiTextField-root": { m: 3, width: "35ch" },
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          type="text"
          name="login"
          label="Login"
          variant="outlined"
          autoComplete="no"
          onChange={handleChange}
        />
        <TextField
          type="password"
          name="password"
          id="outlined-password-input"
          label="password"
          variant="outlined"
          autoComplete="no"
          onChange={handleChange}
        />
        <Button
          variant="contained"
          className={classes.button}
          size="large"
          type="submit"
          onSubmit={() => handleSubmit}
        >
          Ok
        </Button>
      </Box>
    </>
  );
};

export default Auth;
