import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from './style/theme';
import SummaryCard from './components/SummaryCard';
import { Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  btn: { fontSize: '1.3rem', fontWeight: 500, textTransform: 'none' },
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Grid container xs={4} mx='auto'>
        <SummaryCard
          title='order summary'
          img='./images/pattern-background-desktop.svg'
          content='You can now listen to millions of songs, audiobooks, and podcasts on
  any device anywhere you like!'
          alt='hero'
        >
          <Button className={classes.btn} variant='contained' color='primary'>
            Proceed to Payment
          </Button>
        </SummaryCard>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
