import React, { useEffect, useState } from 'react';
import { dollarFilter, pecentFilter} from '../filters';
import './index.css'

const CoinsTable = () => {

  const url = 'https://api.coincap.io/v2'

  const [data, setData] = useState([]);

  const getAssets = async () => {
    const response = await fetch(`${url}/assets?limit=50`)
    const jsonData = await response.json()
    const coins = jsonData.data
    setData(coins)
  }

  useEffect(() => {
    getAssets()
  }, []);

  return (
    <div className='main__table-container'>
      <div className='table'>
          <div className='header'>#</div>
          <div className='header'>Nombre</div>
          <div className='header'>Precio</div>
          <div className='header disable'>Cap. de mercado</div>
          <div className='header disable'>Variacion 24hs</div>
          {/* <div className='header disable'><input></input></div> */}

          {data.map((item) => ( 
              <>
                <div className='item item__rank'><p className=''>{item.rank}</p></div>
                <div className='item item__symbol'> <img className='item__img' src={`https://static.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`} alt='coinImg'/> <div className='item__name-container'>{item.name}<span className='disable symbol'>{item.symbol}</span></div> </div>
                <div className='item'>{dollarFilter(item.priceUsd)}</div>
                <div className='item disable'>{dollarFilter(item.marketCapUsd)}</div>
                <div className={
                  item.changePercent24Hr.includes('-') ? ' item red disable' : ' item green disable'
                }>{pecentFilter(item.changePercent24Hr)}</div>
              </>
        ))}
      </div>
    </div>
  );
}

export default CoinsTable;
