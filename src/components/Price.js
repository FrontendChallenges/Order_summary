import React from 'react';
import { Typography, Grid, CardMedia, Link, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return {
    container: {
      backgroundColor: theme.palette.secondary.light,
      borderRadius: '1rem',
      padding: '3rem',
      '& > *': {
        [theme.breakpoints.down('sm')]: { flexGrow: 1 },
      },
    },
    subtitle: {
      fontWeight: theme.typography.fontWeightBold,
      padding: '0 1.5rem',
    },
    link: {
      fontWeight: theme.typography.fontWeightMedium,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSize,
    },
  };
});

function Price({ icon, alt, title, content, link }) {
  const classes = useStyles();
  return (
    <Grid
      container
      item
      className={classes.container}
      justifyContent='space-between'
    >
      <Box display='flex'>
        <Grid item>
          <CardMedia component='img' src={icon} alt={alt} />
        </Grid>
        <Grid item>
          <Typography className={classes.subtitle}>{title}</Typography>
          <Typography variant='body1' color='textSecondary'>
            {content}
          </Typography>
        </Grid>
      </Box>

      <Box alignSelf='center'>
        <Link href='#' className={classes.link} underline='always'>
          {link}
        </Link>
      </Box>
    </Grid>
  );
}

export default Price;
