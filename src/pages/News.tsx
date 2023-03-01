import React from "react";
import { useTranslation } from "react-i18next";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getMoreNewsApi, getNewsApi } from "../api/api";
import { makeStyles } from "@mui/styles";
import NewsCard from "../components/NewsCard";

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
  cardActions: {
    justifyContent: "center",
  },
  cardContent: {
    flexGrow: 1,
    textAlign: "center",
  },
  cardGrid: {
    paddingTop: "100px",
    textAlign: "center",
  },
  newsCards: {
    backgroundColor: "lightgrey",
  },
  card: {
    height: "500px",
  },
  gridContainer: {
    marginBottom: "30px",
  },
}));

const News = () => {
  const [news, setNews] = useState<any[]>([]);
  const [newsLength, setNewsLength] = useState<number>(20);
  const classes = useStyles();
  const { t } = useTranslation();

  const handleClick = (e: any) => {
    e.preventDefault();

    getMoreNewsApi(newsLength).then((response) => {
      setNews([...news, ...response.data]);
      setNewsLength(newsLength + 20);
    });
  };

  const removeNews = (e: any) => {
    e.preventDefault();

    const { id } = e.target;
    const shoudRemove = window.confirm("Ви впевнені?");

    if (shoudRemove) {
      // eslint-disable-next-line
      setNews(news.filter((item) => item.id != id));
    }
  };

  useEffect(() => {
    getNewsApi().then((response) => setNews(response.data));
  }, []);

  return (
    <div className={classes.newsCards}>
      <Container className={classes.cardGrid} maxWidth="lg">
        <Grid container spacing={2} className={classes.gridContainer}>
          {news.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <NewsCard title={item.title} text={item.body} />
              <CardActions className={classes.cardActions}>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  id={item.id}
                  onClick={removeNews}
                >
                  {t("news.delete")}
                </Button>
              </CardActions>
            </Grid>
          ))}
        </Grid>
        {news.length === 0 && <CircularProgress />}
        {newsLength < 100 && news.length !== 0 && (
          <Button
            variant="contained"
            size="small"
            onClick={handleClick}
          >
            {t("news.loadMore")}
          </Button>
        )}
      </Container>
    </div>
  );
}

export default News;
