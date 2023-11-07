import React from 'react'
import HomeCryptocurrencyItem from '../HomeCryptocurrencyItem/HomeCryptocurrencyItem'
import styles from './HomeCryptocurrenciesList.module.css'

const HomeCryptocurrenciesList = ({ coins }) => {
    let cryptocurrenciesElement = <p>Loading...</p>
    
    if (coins.length > 0) {
        cryptocurrenciesElement = (
        <ul className={styles.coinsList}>
            {coins.map((coin) => <HomeCryptocurrencyItem key={coin.id} data={coin}/>)}
        </ul>
      )
    }
  return (
    <>
        {cryptocurrenciesElement}
    </>
  )
}

export default HomeCryptocurrenciesList