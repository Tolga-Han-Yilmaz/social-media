import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import loadingGif from "../assets/loading.gif";
import { useEffect, useState } from "react";
import axios from "axios";

const News = () => {
  const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
  const [loading, setLoading] = useState(true);
  const [newsList, setNewsList] = useState([]);

  const getNews = async () => {
    const url = `https://gnews.io/api/v4/search?q=example&token=${API_KEY}`;
    try {
      const { data } = await axios(url);
      setLoading(false);
      setNewsList(data.articles);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {loading && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
          <img src={loadingGif} alt="gif" width="90%" height="800px" />
        </Box>
      )}
      {!loading && (
        <Box
          xs={{ d: "flex" }}
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          flexWrap="wrap"
        >
          {newsList?.map((item, index) => (
            <Card
              sx={{
                maxWidth: 345,
                maxHeight: 600,
                marginBottom: "1rem",
                display: { xs: "none", sm: "block" },
              }}
              key={index}
            >
              <CardMedia
                component="img"
                height="200"
                image={item?.image}
                alt="img"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item?.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item?.content}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small" href={item?.url} target="_blank">
                  Detail
                </Button>
              </CardActions>
            </Card>
          ))}

          <Box sx={{ display: { xs: "none" } }}>
            <div
              id="carouselExampleInterval"
              className="carousel slide "
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {newsList?.map((item, index) => (
                  <div className="carousel-item ">
                    <img
                      src={item?.urlToImage}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                ))}
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </Box>
        </Box>
      )}
    </>
  );
};

export default News;
