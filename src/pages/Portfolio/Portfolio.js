import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import inkedin from './inkedin.png';
import songSlang from './songslanglogo.png';
import weather from './vector-weather-symbols.jpg';
import forever21 from './forever21.jpg';
import zap from './Zap register.png'

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
      
      <Grid
        container
        spacing={1}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
    <Card className={classes.root}>
      <CardActionArea>
         
        <CardContent>
            <img src={inkedin} width="300" height="200"/>
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

        <Box m={0.5} />
    
      <Card className={classes.root}>
        <CardActionArea>



          <CardContent>
            <img src={songSlang} width="300" height="200"/>
            <Typography gutterBottom variant="h5" component="h2">
              SongSlang
          </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              SongSlang is an app that I created with my team that allows users to search for song lyrics as well as search both Merriam Webster and Urban Dictionary in order to be able to understand both the denotation and connotation of words in songs.
          </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>

        </CardActions>
      </Card>

        <Box m={0.5} />

        <Card className={classes.root}>
          <CardActionArea>



            <CardContent>
              <img src={zap} width="300" height="200" />
              <Typography gutterBottom variant="h5" component="h2">
                Zap
          </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
                Zap is a bug-tracking app that I helped develop in a team of four. It is a MERN stack app that can be used to make projects, create issues within those projects, then have those issues made public if chosen by the issue's creator. 
          </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>

          </CardActions>
        </Card>


        <Box m={0.5} />

        <Card className={classes.root}>
          <CardActionArea>



            <CardContent>
              <img src={weather} width="300" height="200" />
              <Typography gutterBottom variant="h5" component="h2">
                WeatherApp
          </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
                WeatherApp is an app that I created that allows users to search for the weather in any city. It uses a third-party API and also includes some helpful information including previous searches and UV index info.
          </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>

          </CardActions>
        </Card>



      </Grid>

     
    </>
  );
}
