import React from 'react';
import './index.css'

const Details = () => {
  return (
    <section className="main-product-detail">
    <span className="product-detail--batata-logo"></span>
    <div className="product-detail--title">
      <h2>We create a unique product</h2>
      <p>Reliable and designed for daily use</p>
    </div>
    <section className="product-cards--container">
      <article className="product-detail--card">
        <span className="clock"></span>
        <p className="product--card-title">Real time</p>
        <p className="product--card-body">Our API takes minute-by-minute information about the rates that most determine behavior</p>
      </article>
      <article className="product-detail--card">
        <span className="eye"></span>
        <p className="product--card-title">No hidden fees</p>
        <p className="product--card-body">Whether buying or selling, Batatabit always shows you the real cost of what you are acquiring</p>
      </article>
      <article className="product-detail--card">
        <span className="coin"></span>
        <p className="product--card-title">Compare currencies</p>
        <p className="product--card-body">No more rumors, with Batatabit you will know the real value of each currency in the current market</p>
      </article>
      <article className="product-detail--card">
        <span className="check"></span>
        <p className="product--card-title">Reliable information</p>
        <p className="product--card-body">Our sources are 100% verified and we continue to audit their content as they update</p>
      </article>
    </section>
    </section>
  );
}

export default Details;
