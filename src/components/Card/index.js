import React from 'react'
import './styles.css'
import { FaUser } from 'react-icons/fa'
import { RiDoorClosedLine } from 'react-icons/ri'

const Card = ({ name }) => {
  return (
    <>
      <div className="card-container">
        <div>
          <FaUser className="iconUserCard" />
        </div>
        <div className="nameIndicator">
          <h6>{name}</h6>
        </div>
        <div>
          <RiDoorClosedLine className="iconDoorCard" />
        </div>
        <div className="roomIndicator">
          <h4>Sala 01</h4>
        </div>
      </div>
    </>
  )
}

export default Card
