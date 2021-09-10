import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from './style/theme';
import SummaryCard from './components/SummaryCard';
import Price from './components/Price';
import { Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import hero from './images/illustration-hero.svg';
import icon from './images/icon-music.svg';

const useStyles = makeStyles({
  btn: {
    fontSize: '1.6rem',
    fontWeight: 500,
    textTransform: 'none',
    boxShadow: '0 8px 15px rgb(56 41 224 / 25%)',
    borderRadius: '.8rem',
    width: '100%',
  },
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        justifyContent='center'
        alignItems='flex-end'
        align='center'
      >
        <Grid item xs={11} sm={5} md={4}>
          <SummaryCard
            title='order summary'
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
          </SummaryCard>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
