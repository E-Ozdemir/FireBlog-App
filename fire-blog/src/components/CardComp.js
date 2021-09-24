import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
import MessageIcon from "@mui/icons-material/Message";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const useStyles = makeStyles({
  root: {
    minWidth: 345,
    maxWidth: 345,
  },
  avatar: {
    marginBottom: "0.35em",
    marginRight: "1em",
  },
  cardContent: {
    backgroundColor: "#efeefe",
    height: "125px",
  },
  title: {
    fontFamily: "Girassol",
    color: "#046582",
  },
  media: {
    height: 140,
  },
  module: {
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
    "text-overflow": "ellipsis",
    overflow: "hidden",
    fontSize: ".8rem",
  },
});

const date = new Date();
const CardComp = () => {
  const classes = useStyles();

  return (
    <div>
      <Card sx={{ maxWidth: 345 }} className={classes.root}>
        <CardMedia
          className={classes.media}
          component="img"
          height="194"
          image="https://miro.medium.com/max/800/1*Dno6e7KS5HcdGybg9A0onQ.png"
          alt="Paella dish"
        />
        <CardContent className={classes.cardContent}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.title}
          >
            EXPRESS JS
            {/* {title} */}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {/* {moment(published_date).format("MMM DD, YYYY")} */}
            {date.getMonth()}.{date.getDate()}.{date.getFullYear()}
          </Typography>
          <p className={classes.module}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam odio
            unde assumenda molestiae quo officia corrupti mollitia omnis
            deleniti laboriosam.
          </p>
        </CardContent>

        <CardActions>
          <AccountCircleIcon className={classes.avatar} />
          <Typography gutterBottom variant="h6" component="h2">
            <p>ozzdemir@gmail.com</p>
          </Typography>
        </CardActions>

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <MessageIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default CardComp;
