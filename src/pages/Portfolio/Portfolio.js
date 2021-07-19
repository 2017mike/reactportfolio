import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import inkedin from './inkedin.png';
import songSlang from './songlanglogo.png';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});





export default function Portfolio() {
  const classes = useStyles();

  return (

    <>
      
    <Card className={classes.root}>
      <CardActionArea>
         


        <CardContent>
            <img src={inkedin} width="300" height="200" />
          <Typography gutterBottom variant="h5" component="h2">
            InkedIn
          </Typography>
            
          <Typography variant="body2" color="textSecondary" component="p">
              I developed an app in a team of three people that allows for people to sell and request tattoo designs. This app uses a fully-functional backend to allow users to login and add posts.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
      </CardActions>
    </Card>

    <br/>

      <Card className={classes.root}>
        <CardActionArea>



          <CardContent>
            <img src={inkedin} width="300" height="200" />
            <Typography gutterBottom variant="h5" component="h2">
              InkedIn
          </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              I developed an app in a team of three people that allows for people to sell and request tattoo designs. This app uses a fully-functional backend to allow users to login and add posts.
          </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>

        </CardActions>
      </Card>

     
    </>
  );
}
