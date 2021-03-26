import React from 'react'
import logoSmall from '../../assets/logoSmall.png'
import { FiSun } from 'react-icons/fi'
import './styles.css'

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div>
          <img className="logoSmall" src={logoSmall} alt="No_Data" />
        </div>
        <div className="titleHeader">
          <div>Clinica:</div>
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
