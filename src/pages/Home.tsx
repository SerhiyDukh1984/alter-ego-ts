import React from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";
import { Container, Grid, Typography } from "@mui/material";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
    color: "red",
  },

  postContent: {
    position: "relative",
    paddingTop: "120px",
    textAlign: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundImage: "url(./images/ufo-1265186.jpg)",
  },
}));

function Home() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <Container>
        <div className={classes.overlay} />
        <Grid container>
          <Grid item md={12}>
            <div className={classes.postContent}>
              <Typography
                component="h1"
                variant="h3"
                color="primary"
                gutterBottom
              >
                {t("home.title")}
              </Typography>
              <Typography
                component="h1"
                variant="h4"
                color="primary"
                gutterBottom
              >
                {t("home.frontend")}
              </Typography>
              <Typography variant="h6" color="white" paragraph>
                <a className={classes.link} href="https://dou.ua/forums/topic/33048/">{t("home.link1")}</a>{t("home.text1")}
              </Typography>
              <Typography variant="h6" color="white" paragraph>
                <a className={classes.link} href="https://dou.ua/forums/topic/34081/">{t("home.link2")}</a>{t("home.text2")}
              </Typography>
              <Typography variant="h6" color="white" paragraph>
                <a className={classes.link} href="https://dou.ua/forums/topic/35796/">{t("home.link3")}</a>{t("home.text3")}.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Home;
