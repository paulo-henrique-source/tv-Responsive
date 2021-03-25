import React from 'react'
import { FaUser } from 'react-icons/fa'
import { RiDoorClosedLine } from 'react-icons/ri'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => {
  return {
    iconUser: {
      color: theme.palette.primary.dark,
      fontSize: '40px',
    },
    iconDoor: {
      color: theme.palette.primary.linear,
      fontSize: '50px',
    },
    container: {
      margin: '40px',
      display: 'grid',
      gridTemplateColumns: '60px 450px 80px 330px',
      background: 'linear-gradient(105deg, #F5F5F5 65%, #D4EEEE 35%)',
      width: '820px',
      paddingLeft: '50px',
      padding: '20px ',
      borderRadius: '426px',
      fontSize: '37px',
      color: theme.palette.black.main,
    },
  }
})

const Card = ({ name }) => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.container}>
        <div>
          <FaUser className={classes.iconUser} />
        </div>
        <div>
          <h6>{name}</h6>
        </div>
        <div>
          <RiDoorClosedLine className={classes.iconDoor} />
        </div>
        <div>
          <h4>Sala 01</h4>
        </div>
      </div>
    </>
  )
}

export default Card
