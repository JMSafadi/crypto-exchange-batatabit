import React from 'react';
import CoinsTable from '../../components/CoinsTable';
import './index.css'

const Main = () => {

  // const getDate = () => {
  //   const today = new Date()
  //   const day = today.getDate()
  //   const mounth = today.getMonth() + 1
  //   const year = today.getFullYear()
  //   const date = `${day}/${mounth}/${year}`
  //   return date
  // }

  const getDate = () => {
    const today = new Date()
    const date = today.toLocaleString()
    return date
  }

  return (
    <section className="main__container">
    <div className="main__backgroundImg"></div>
    <div className="main__container-title">
      <h2>Visibilizamos todas las tasas de cambio.</h2>
      <p>Traemos informacion en tiempo real de las casas de cambio y las monedas más importantes del mercado.</p>
    </div>
    <section>
      <div className="main__table">
        <p className="main__table-title">Monedas principales</p>
          <CoinsTable/>
      </div>
      <div className="main__table-date">
        <p> <b>Actualizado:</b> {getDate()} </p>
      </div>
      <div>
      </div>
    </section>
  </section>
  );
}

export default Main;
