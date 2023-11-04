import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

const CryptocurrencyItem = ({data}) => {
    const {id, image, name, market_cap_rank, current_price, price_change_percentage_24h, market_cap} = data

    let coinItemElement = (
      <>
      <div className="coin-rank">{market_cap_rank}</div>
      <div className='coin-name-image-wrapper'>
      <Link to={`/coins/${id}`}><img src={image} alt='/'></img></Link>
        <div><Link to={`/coins/${id}`}>{name}</Link></div>
      </div>
      <div className="coin-price">{current_price.toLocaleString()} $</div>
      <div className="price-change">{price_change_percentage_24h < 0 ? (
            <span className="red">
              <FiArrowDown/>
              {price_change_percentage_24h.toFixed(2)}
            </span>
          ): (
            <span className="green">
              <FiArrowUp/>
              {price_change_percentage_24h.toFixed(2)}
            </span>
          )}</div>
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