import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  media: {
    paddingTop: "56.25%",
  },
  cardGrid: {
    paddingTop: "100px",
    textAlign: "center",
  },
  card: {
    width: "450px",
  },
  text: {
    color: "red",
  },
  link: {
    textDecoration: "none",
    color: " inherit",
  },
  gridContainer: {
    marginBottom: "30px",
    background: "inherit",
  },
  gridContent: {
    position: "relative",
    padding: "120px",
    textAlign: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundImage: "url(./images/ukraine-7068221_1920.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
}));

const Profile = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const user = {
    email: "admin@ukr.net",
    avatarUrl: "./images/avatar.jpg",
  };

  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      <div className={classes.overlay}>
        <Grid container>
          <Grid item xs={6} className={classes.gridContent}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={user.avatarUrl}
                title="Dream of UKRAINIANS"
              />

              <CardContent  >
                <Typography
                  component="h1"
                  variant="h5"
                  color="primary"
                  paragraph
                >
                  {t("profile.admin")}
                </Typography>
                <div >
                  <Typography component="h5" variant="h5" color="primary">
                    {t("profile.email")}
                    <span className={classes.text}>
                      <a className={classes.link} href="https://admin@ukr.net">
                        {user.email}
                      </a>
                    </span>
                  </Typography>
                  <Typography component="h5" variant="h5" color="primary">
                    {t("profile.hobby")}
                    <span className={classes.text}>{t("profile.wet")}</span>
                  </Typography>
                  <Typography component="h5" variant="h5" color="primary">
                    {t("profile.bestFriends")}
                    <span className={classes.text}>{t("profile.weapon")}</span>
                  </Typography>
                  <Typography component="h5" variant="h5" color="primary">
                    {t("profile.dream")}
                    <span className={classes.text}>{t("profile.burn")}</span>
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Profile;
