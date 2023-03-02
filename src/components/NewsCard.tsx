import React from "react";
import { makeStyles } from "@mui/styles";
import { Card } from "@mui/material";
import { CardMedia } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";

const useStyles = makeStyles(() => ({
  media: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
    textAlign: "center",
  },
  card: {
    height: "450px",
  },
}));

interface NewsCardProps {
    title: string
    text: string
}

export const NewsCard: React.FC<NewsCardProps> = (props) => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="./images/earth-1756274_1280.jpg"
          title="image title"
        />

        <CardContent className={classes.cardContent}>
          <Typography component="h1" color="primary" gutterBottom>
            {props.title}
          </Typography>
          <Typography component="h5" color="inherit" paragraph>
            {props.text}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default NewsCard;
