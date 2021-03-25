import React, { useState, useEffect } from 'react'
import './styles.css'
import Header from '../../components/Header'
import Schedule from '../../components/Schedule'
import Card from '../../components/Card'

const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    setData([
      {
        name: 'Rafael Neves',
      },
      {
        name: 'Lucas Camara',
      },
      {
        name: 'Giovani De Ganello Dias',
      },
      {
        name: 'Jacob Jones',
      },
      {
        name: 'Lorem Ipsun dolor Siatne...',
      },
    ])
  }, [])

  const renderCards = () => {
    let cards = []

    Object.keys(data).map((x, i) => {
      cards.push(
        <div className="CardCollection">
          <Card name={data[i]['name']} />
        </div>
      )
      return cards
    })
    return cards
  }
  return (
    <>
      <Header />
      <div className="container">
        <div className="img">
          <Schedule />
        </div>
        <div className="gridTemplateTwo">
          <div className="login-text">
            <div>
              <h3 className="patients">Pacientes Chamados:</h3>
            </div>
            <div>{renderCards()}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
