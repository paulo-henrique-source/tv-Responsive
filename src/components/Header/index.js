import React from 'react'
import logoSmall from '../../assets/logoSmall.png'
import { makeStyles } from '@material-ui/core'
import { FiSun } from 'react-icons/fi'
import './styles.css'

const useStyles = makeStyles((theme) => {
  return {
    container: {
      display: 'grid',
      gridTemplateColumns: '160px 860px 880px',
      background:
        'linear-gradient(to right, #219A97 0, #219A97 8%, #26ACA9 8%, #26ACA9 50%, #D4EEEE 50%, #D4EEEE 100%)',
      width: '100vw',
      height: '164px',
      padding: '20px ',
      fontSize: '37px',
      color: theme.palette.black.main,
    },
    logoSmall: {
      width: '120px',
      height: '120px',
    },
    titleHeader: {
      display: 'grid',
      gridTemplateRows: '40px 52px',
      height: '85px',
      marginTop: '15px',
      width: '500px',
      fontSize: '30px',
      color: theme.palette.background.main,
    },
    companyHeader: {
      fontWeight: '700',
      marginTop: '15px',
    },
    timer: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      fontSize: '35px',
      marginTop: '20px',
    },
    clock: {
      color: '#16171A',
      fontWeight: '500',
    },
    hour: {
      display: 'grid',
      gridTemplateColumns: '230px 100px',
    },
    formatHour: {
      fontSize: '95px',
      color: '#16171A',
    },
    formatIndicator: {
      fontSize: '42px',
      color: '#16171A',
      paddingTop: '55px',
    },
  }
})

const Header = () => {
  const classes = useStyles()
  return (
    <>
      <div className="container">
        <div>
          <img className="logoSmall" src={logoSmall} alt="No_Data" />
        </div>
        <div className="titleHeader">
          <div className="titleHeader">Clinica:</div>
          <div className="companyHeader">Loren Ipsun dolor Mists</div>
        </div>
        <div className="timer">
          <div>
            <div className="localZone">
              Maringá - PR | 24 °C <FiSun color="#F9BE73" />
            </div>
            <div className="clock">03 de Março</div>
          </div>
          <div className="hour">
            <div className="formatHour">12:54</div>
            <div className="formatIndicator">PM</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
