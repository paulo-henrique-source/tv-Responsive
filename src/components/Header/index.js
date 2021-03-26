import React, { useState, useEffect } from 'react'
import logoSmall from '../../assets/logoSmall.png'
import { FiSun } from 'react-icons/fi'
import './styles.css'

const Header = () => {
  const [time, setTime] = useState('')
  const [moment, setMoment] = useState('')
  const [interval] = useState(600)

  const [dayMouth, setDayMounth] = useState('Carregando...')

  const dateNow = (date) => {
    var hours = date.getHours()
    var minutes = date.getMinutes()
    var indicatorMoment = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12
    hours = hours ? hours : 12
    minutes = minutes < 10 ? '0' + minutes : minutes
    var fullTime = `${hours}:${minutes}`

    setTime(fullTime)
    setMoment(indicatorMoment)
  }

  const formatarData = () => {
    var dataAtual = new Date(),
      day = dataAtual.getDate().toString(),
      dayFragment = day.length === 1 ? '0' + day : day,
      mouth = (dataAtual.getMonth() + 1).toString(),
      mouthFragment = mouth.length === 1 ? '0' + mouth : mouth,
      yearFragment = dataAtual.getFullYear()
    var dataToString = `${dayFragment}/${mouthFragment}/${yearFragment}`
    var parts = dataToString.split('/').map(Number)
    var data = new Date('20' + parts[2], parts[1] - 1, parts[0])
    setDayMounth(
      data.toLocaleString([], {
        month: 'long',
        day: 'numeric',
      })
    )
  }

  useEffect(() => {
    const realTime = setInterval(() => {
      dateNow(new Date())
      formatarData()
    }, interval)

    return () => clearInterval(realTime)
  }, [interval])

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
            <div className="clock">{dayMouth}</div>
          </div>
          <div className="hour">
            <div>
              <div className="formatHour">
                {time}
                <span className="formatIndicator">{moment}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
