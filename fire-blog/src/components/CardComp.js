import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';




const useStyles = makeStyles({
  avatar: {
    marginBottom: "0.35em",
  },
});



const CardComp = () => {
    const classes = useStyles();

    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="194"
                image="https://miro.medium.com/max/800/1*Dno6e7KS5HcdGybg9A0onQ.png"
                alt="Paella dish"
              />
              <CardHeader
                title="EXPRESS JS"
                subheader="September 14, 2016"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal to cook
                  together with your guests. Add 1 cup of frozen peas along with the mussels,
                  if you like.
                </Typography>
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
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
        </div>
    )
}

export default CardComp
