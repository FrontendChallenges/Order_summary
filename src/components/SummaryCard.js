import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  media: {
    height: 0,
    paddingTop: '50%',
  },
  card: {
    borderRadius: '1.5rem',
  },
  content: {
    padding: '4rem',
    '& > *:not(:last-child)': { marginBottom: '2.5rem' },
  },
});

function SummaryCard({ children, title, img, content, alt }) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={img} />
      <CardContent className={classes.content}>
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
