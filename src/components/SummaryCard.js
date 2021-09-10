import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  card: {
    borderRadius: '1.5rem',
  },

  item: {
    width: '100%',
  },
});

function SummaryCard({ children, title, img, content, alt }) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={img} />
      <CardContent>
        <Grid container justifyContent='center'>
          <Grid item>
            <Typography variant='h3' color='textPrimary'>
              {title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1' color='textSecondary'>
              {content}
            </Typography>
          </Grid>
          <Grid item className={classes.item}>
            {children}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default SummaryCard;
