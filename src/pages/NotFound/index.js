import React from 'react'
import { Container, Grid, makeStyles, Typography } from '@material-ui/core'

import notFoundd from '../../assets/notFoundd.svg'

const useStyles = makeStyles(() => {
  return {
    notFound: {
      display: 'flex',
      height: '100vh',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    notFoundGrid: {
      display: 'flex',
      gridTemplateRows: '1fr 1fr',
      justifyContent: 'center',
      margin: '0 auto',
    },
    text: {
      textAlign: 'center',
      fontSize: '80px',
    },
    gridTextNotFound: {
      margin: '0 auto',
    },
  }
})

const NotFound = () => {
  const classes = useStyles()

  return (
    <Container
      container
      alignItems="center"
      justify="center"
      direction="column"
      className={classes.notFound}
    >
      <Grid container>
        <Grid item className={classes.notFoundGrid}>
          <img src={notFoundd} alt="404" width="450" />
        </Grid>
        <Grid item className={classes.gridTextNotFound}>
          <Typography className={classes.text} variant="h5">
            Página não encontrada
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default NotFound
