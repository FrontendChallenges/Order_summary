import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    footer: {
      fontSize: '1.1rem',
      padding: '2rem',
      color: theme.palette.main,
      textAlign: 'center',
    },
  };
});

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      Challenge by
      <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
        Frontend Mentor
      </a>
      . Coded by <a href='#'>Jinok</a>.
    </footer>
  );
}

export default Footer;
