import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
  },
}))

const GridLayout = ({ children }) => {
  const classes = useStyles()
  return (
    <main className={classes.content}>
      <Grid container spacing={2}>
        {children}
      </Grid>
    </main>
  )
}

export default GridLayout
