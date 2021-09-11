import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    media: {
      height: 0,
      paddingTop: '50%',
    },
    cardContents: {
      '& > *:not(:last-child)': {
        marginBottom: '2.5rem',
      },
      padding: '3.5rem',
      [theme.breakpoints.down('sm')]: { padding: '2rem' },
    },
  };
});

function SummaryCard({ children, title, img, alt, content }) {
  const classes = useStyles();
  return (
    <Card>
      <CardMedia className={classes.media} image={img} alt={alt} />
      <CardContent className={classes.cardContents}>
        <Typography variant='h3' color='textPrimary'>
          {title}
        </Typography>
        <Typography variant='body1' color='textSecondary'>
          {content}
        </Typography>
        {children}
      </CardContent>
    </Card>
  );
}

export default SummaryCard;
