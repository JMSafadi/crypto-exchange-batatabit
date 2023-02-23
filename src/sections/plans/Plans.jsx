import React from 'react';
import './index.css'

const Plans = () => {
  return (
    <section id="plans" className="main-plans-container">
    <div className="plans--title">
      <h2>Escoge el plan que mejor se ajuste a ti.</h2>
      <p>Cualquier plan te da accesso completo a nuestra plataforma.</p>
    </div>
    <section className="plans-container--slider">
      <article className="plans-container--card">
        <p className="basic">Basico</p>
        <div className="plan-info-container">
          <h3>Plan Mensual</h3>
          <p className="plan-card--price"><span>$</span> 19</p>
          <p className="plan-card--saving">* Plan con todas las ventajas de la plataforma.</p>
          <button>Comprar plan <span className="plan-info--arrow"></span></button>
        </div>
      </article>
      <article className="plans-container--card">
        <p className="recommended">Recomendado</p>
        <div className="plan-info-container">
          <h3>Plan Anual</h3>
          <p className="plan-card--price"><span>$</span> 99</p>
          <p className="plan-card--saving">* Ahorras $129 comprando al plan mensual.</p>
          <button>Comprar plan <span className="plan-info--arrow"></span></button>
        </div>
      </article>
      <article className="plans-container--card--unlimited">
        <p className="unlimited">Ilimitado</p>
        <div className="plan-info-container">
          <h3>Plan de por vida</h3>
          <p className="plan-card--price"><span className="unlimited-span">$</span> 999</p>
          <p className="plan-card--unlimited--saving">* Seras miembra Batatabit por siempre y con todos los beneficios.</p>
          <button>Comprar plan <span className="plan-info--arrow"></span></button>
        </div>
      </article>
    </section>
  </section>
  );
}

export default Plans;
