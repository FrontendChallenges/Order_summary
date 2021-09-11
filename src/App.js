import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import theme from './style/theme';
import hero from './images/illustration-hero.svg';
import icon from './images/icon-music.svg';
import Price from './components/Price';
import SummaryCard from './components/SummaryCard';

const useStyles = makeStyles((theme) => {
  return {
    btn: {
      fontWeight: theme.typography.fontWeightRegular,
      textTransform: 'none',
      boxShadow: '0 8px 15px rgb(56 41 224 / 25%)',
      borderRadius: '.8rem',
      width: '100%',
    },

    textBtn: {
      fontWeight: theme.typography.fontWeightBold,
      textTransform: 'none',
      width: '100%',
    },

    container: {
      padding: '3rem 0',
    },

    summaryCard: {
      margin: '3rem',
    },
  };
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Grid
        className={classes.container}
        container
        justifyContent='center'
        alignItems='flex-end'
        align='center'
      >
        <Grid item xs={11} sm={5} md={4}>
          <SummaryCard
            className={classes.summaryCard}
            title='Order Summary'
            img={hero}
            content='You can now listen to millions of songs, 
            audiobooks, and podcasts on any device anywhere you like!'
            alt='hero'
          >
            <Price
              icon={icon}
              alt='icon-music'
              title='Annual Plan'
              content='$59.99/year'
              link='change'
            />

            <Button className={classes.btn} variant='contained' color='primary'>
              Proceed to Payment
            </Button>

            <Button className={classes.textBtn} color='secondary'>
              Cancel Order
            </Button>
          </SummaryCard>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
