import React from 'react'
import './styles.css'
import logoBig from '../../assets/logoBig.png'
import MedicineCuate from '../../assets/MedicineCuate.png'

const Login = () => {
  return (
    <>
      <div className="container">
        <div className="img">
          <div className="gridImage">
            <div className="imageItem">
              <img className="logo" src={logoBig} alt="No_Data" />
            </div>
            <div className="imageItem">
              <img
                className="medicineCuate"
                src={MedicineCuate}
                alt="No_Data"
              />
            </div>
          </div>
        </div>
        <div className="login-content">
          <div className="login-text">
            <div className="text-component-title">
              <h2>Vincular com código da TV Health</h2>
            </div>
            <div className="text-component">
              <p>
                Para sincronizar seu sistema de fila de atendimento com a sua
                TV, siga os passos abaixo:
              </p>
            </div>
            <div className="text-component">
              <p>
                01. Acesse seu sistema:
                <br />
                <b>sistema.homologação.apphealth.com.br/#/perfil/unidade</b>
              </p>
            </div>
            <div className="text-component">
              <p>
                02. Adicione uma nova tela para exibir a fila de atendimento da
                sua clínica
              </p>
            </div>
            <div className="text-component">
              <p>
                03. Clique em <b>ADICIONAR CODIGO DA TV</b> e digite o código
                abaixo:
              </p>
            </div>
            <div className="code-component">
              <h1>236 GA 234</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
