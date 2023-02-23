import React from 'react';
import './index.css'

const Main = () => {
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
        <div className="main__table-container">
          {/* <table>
            <thead>
              <td className="table__top-left">Bitcoin</td>
              <td className="table__top-right table__right">$ 21.285 <span className="up"></span> </td>
            </thead>
            <thead>
              <td>Ethereum</td>
              <td className="table__right">$ 1.495 <span className="down"></span> </td>
            </thead>
            <thead>
              <td>Binance Coin</td>
              <td className="table__right">$ 326 <span className="down"></span> </td>
            </thead>
            <thead>
              <td className="table__bottom-left">Solana</td>
              <td className="table__bottom-right table__right">$ 28 <span className="down"></span> </td>
            </thead>
          </table> */}
        </div>
      </div>
      <div className="main__table-date">
        <p> <b>Actualizado:</b> 17 Julio 21:00 </p>
      </div>
      <div>
      </div>
    </section>
  </section>
  );
}

export default Main;
