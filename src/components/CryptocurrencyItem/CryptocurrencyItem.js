import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import styles from './CryptocurrencyItem.module.css'

const CryptocurrencyItem = ({data}) => {
    const {id, image, name, market_cap_rank, current_price, price_change_percentage_24h, market_cap} = data

    let coinItemElement = (
      <>
      <div className={styles.coinRank}>{market_cap_rank}</div>
      <div className={styles.coinImageAndNameWrapper}>
      <Link to={`/coins/${id}`}><img src={image} alt='/'></img></Link>
        <div><Link to={`/coins/${id}`}>{name}</Link></div>
      </div>
      <div className={styles.coinPrice}>{current_price.toLocaleString()} $</div>
      <div className={styles.coinPriceChange}>{price_change_percentage_24h < 0 ? (
            <span className={styles.red}>
              <FiArrowDown/>
              {price_change_percentage_24h.toFixed(2)}
            </span>
          ): (
            <span className={styles.green}>
              <FiArrowUp/>
              {price_change_percentage_24h.toFixed(2)}
            </span>
          )}</div>
      <div className={styles.coinMarketCap}>{market_cap.toLocaleString()} $</div>
      </>
    )

  return (
    <li className={styles.coinsListItem}>
      {coinItemElement}
    </li>
  )
}

export default CryptocurrencyItem