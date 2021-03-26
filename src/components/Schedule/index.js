import React from 'react'
import './styles.css'
import { FaUser } from 'react-icons/fa'
import { RiDoorClosedLine } from 'react-icons/ri'

const Schedule = () => {
  return (
    <>
      <div className="container-schedule">
        <div className="header">
          <h1>PRÓXIMO:</h1>
        </div>
        <div className="gridContainer">
          <div>
            <FaUser className="iconUser" />
          </div>
          <div className="userText">
            <h6>Devon Lane Loren Ipsun dolor</h6>
          </div>
          <div className="iconDoor">
            <RiDoorClosedLine className="iconDoor" />
          </div>
          <div className="doorText">
            <h4>Sala 01</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default Schedule
