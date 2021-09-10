import React from 'react';
import { Typography, Grid, CardMedia, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => {
  return {
    container: { backgroundColor: theme.palette.secondary.light },
    subtitle: {
      fontWeight: theme.typography.fontWeightMedium,
    },
    link: {
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: theme.typography.body1.fontSize,
      fontFamily: theme.typography.fontFamily,
    },
  };
});

function Price({ icon, alt, title, content, link }) {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item>
        <CardMedia component='img' src={icon} height='100%' alt={alt} />
      </Grid>
      <Grid item>
        <Typography className={classes.subtitle}>{title}</Typography>
        <Typography variant='body1' color='textSecondary'>
          {content}
        </Typography>
      </Grid>
      <Grid item>
        <Link href='#' className={classes.link} underline='always'>
          {link}
        </Link>
      </Grid>
    </Grid>
  );
}

export default Price;
