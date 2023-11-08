import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import styles from './HomeCryptocurrencyItem.module.css'

const HomeCryptocurrencyItem = ({data}) => {
    const {id, image, name, current_price, price_change_percentage_24h} = data

    let coinItemElement = (
      <>
      <div className={styles.coinImageAndNameWrapper}>
        <Link to={`/coins/${id}`}>
          <div className={styles.imageWrapper}>
            <img src={image} alt='/'></img>
          </div>
        </Link>

        <div>
          <Link className={styles.coinName} to={`/coins/${id}`}>{name}</Link>
        </div>
      </div>
      <div className={styles.coinPrice}>$ {current_price.toLocaleString()}</div>
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
      </>
    )

  return (
    <li className={styles.coinsListItem}>
      {coinItemElement}
    </li>
  )
}

export default HomeCryptocurrencyItem