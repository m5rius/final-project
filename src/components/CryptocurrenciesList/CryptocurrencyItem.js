import React from 'react'
import { Link } from 'react-router-dom'

const CryptocurrencyItem = ({data}) => {
    const {id, image, name, market_cap_rank, current_price, price_change_percentage_24h, market_cap} = data

    let coinItemElement = (
      <>
      <div className="coin-rank">{market_cap_rank}</div>
      <div className='coin-name-image-wrapper'>
        <img src={image} alt='/'></img>
        <div><Link to={`/coins/${id}`}>{name}</Link></div>
      </div>
      <div className="coin-price">{Math.round(current_price * 100) / 100} $</div>
      <div className="price-change">{Math.round(price_change_percentage_24h * 100) / 100} %</div>
      <div className="market-cap">{market_cap.toLocaleString()} $</div>
      </>
    )

  return (
    <li className="coins-list-item">
      {coinItemElement}
    </li>
  )
}

export default CryptocurrencyItem