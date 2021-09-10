import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function SummaryCard({ children, title, img, content, alt }) {
  // const classes = useStyles();
  return (
    <Card>
      {/* <CardMedia  image={img} height='140' /> */}
      <CardContent>
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
