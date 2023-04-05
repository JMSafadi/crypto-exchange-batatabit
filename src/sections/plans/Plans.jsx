import React from 'react';
import './index.css'

const Plans = () => {
  return (
    <section id="plans" className="main-plans-container">
    <div className="plans--title">
      <h2>Choose the plan that best suits you</h2>
      <p>Any plan gives you full access to our platform</p>
    </div>
    <section className="plans-container--slider">
      <article className="plans-container--card">
        <p className="basic">Basic</p>
        <div className="plan-info-container">
          <h3>Monthly plan</h3>
          <p className="plan-card--price"><span>$</span> 19</p>
          <p className="plan-card--saving">* Plan with all the advantages of the platform</p>
          <button>Buy plan <span className="plan-info--arrow"></span></button>
        </div>
      </article>
      <article className="plans-container--card">
        <p className="recommended">Recommended</p>
        <div className="plan-info-container">
          <h3>Annual Plan</h3>
          <p className="plan-card--price"><span>$</span> 99</p>
          <p className="plan-card--saving">*  Save $129 by purchasing the annual plan</p>
          <button>Buy plan <span className="plan-info--arrow"></span></button>
        </div>
      </article>
      <article className="plans-container--card--unlimited">
        <p className="unlimited">Ilimitado</p>
        <div className="plan-info-container">
          <h3>Lifetime Plan</h3>
          <p className="plan-card--price"><span className="unlimited-span">$</span> 999</p>
          <p className="plan-card--unlimited--saving">You will be a Batatabit member forever with all the benefits</p>
          <button>Buy plan <span className="plan-info--arrow"></span></button>
        </div>
      </article>
    </section>
  </section>
  );
}

export default Plans;
