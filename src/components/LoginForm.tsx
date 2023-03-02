import React from "react";
import { Box, Modal } from "@mui/material";
import Auth from "./Auth";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  modal: {
    top: "250px",
    left: "50%",
    padding: "20px",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    backgroundImage: "url(./images/water-1330252_640.jpg)",
    position: "relative",
    textAlign: "center",
  },
}));

interface LoginFormProps {
  isOpen: boolean;
  checkAuth(data: boolean): void;
  closeModal(data: boolean): void;
}

const LoginForm: React.FC<LoginFormProps> = (props) => {
  const { t } = useTranslation();
  const classes = useStyles();

  if (!props.isOpen) {
    return null;
  }

  return (
    <Modal
      open={props.isOpen}
      onClose={props.closeModal}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ width: "40%" }} className={classes.modal}>
        <h2 id="parent-modal-title">{t("registration.authorization")}</h2>

        <Auth checkAuth={props.checkAuth} />
      </Box>
    </Modal>
  );
};

export default LoginForm;
