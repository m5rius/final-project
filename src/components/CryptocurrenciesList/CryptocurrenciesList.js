import React from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem/CryptocurrencyItem'
import styles from './CryptocurrenciesList.module.css'

const CryptocurrenciesList = ({ coins }) => {
    let cryptocurrenciesElement = <p>Loading...</p>
    
    if (coins.length > 0) {
        cryptocurrenciesElement = (
        <ul className={styles.coinsList}>
            {coins.map((coin) => <CryptocurrencyItem key={coin.id} data={coin}/>)}
        </ul>
      )
    }
  return (
    <>
        {cryptocurrenciesElement}
    </>
  )
}

export default CryptocurrenciesList