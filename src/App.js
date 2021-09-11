import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { Grid, Button, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import theme from './style/theme';
import hero from './images/illustration-hero.svg';
import icon from './images/icon-music.svg';
import Price from './components/Price';
import SummaryCard from './components/SummaryCard';
import Footer from './components/Footer';

const useStyles = makeStyles((theme) => {
  return {
    btn: {
      boxShadow: '0 8px 15px rgb(56 41 224 / 25%)',
      borderRadius: '.8rem',
      fontWeight: theme.typography.fontWeightRegular,
    },
    container: {
      padding: '2rem',
    },
  };
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Grid container justifyContent='center' className={classes.container}>
          <Grid container item xs={12} sm={7} md={6} lg={4} align='center'>
            <SummaryCard
              title='Order Summary'
              img={hero}
              alt='illustration-hero'
              content='You can now listen to millions of songs, 
            audiobooks, and podcasts on any device anywhere you like!'
            >
              <Price
                icon={icon}
                alt='icon-music'
                title='Annual Plan'
                content='$59.99/year'
                link='change'
              />
              <Button
                variant='contained'
                color='primary'
                className={classes.btn}
              >
                Proceed to Payment
              </Button>
              <Button color='secondary'>Cancel Order</Button>
            </SummaryCard>
          </Grid>
        </Grid>
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
