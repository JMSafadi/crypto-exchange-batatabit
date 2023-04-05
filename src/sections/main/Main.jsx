import React from 'react';
import CoinsTable from '../../components/CoinsTable';
import './index.css'

const Main = () => {

  const getDate = () => {
    const today = new Date()
    const date = today.toLocaleString()
    return date
  }

  return (
    <section className="main__container">
    <div className="main__backgroundImg"></div>
    <div className="main__container-title">
      <h2>We make all exchange rates visible</h2>
      <p>We bring real-time information from exchange houses and the most important currencies in the market</p>
    </div>
    <section>
      <div className="main__table">
        <p className="main__table-title">Main currencies</p>
          <CoinsTable/>
      </div>
      <div className="main__table-date">
        <p> <b>Updated:</b> {getDate()} </p>
      </div>
      <div>
      </div>
    </section>
  </section>
  );
}

export default Main;
