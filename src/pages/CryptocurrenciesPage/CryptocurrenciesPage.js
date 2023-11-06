import React, { useEffect, useState } from 'react'
import Container from '../../components/Container/Container'
import { API_URL } from '../../config'
import CryptocurrenciesList from '../../components/CryptocurrenciesList/CryptocurrenciesList'
import styles from './CryptocurrenciesPage.module.css'

const CryptocurrenciesPage = () => {

    const [coins, setCoins] = useState('')

    useEffect(() => {
      fetch(`${API_URL}/coins/`)
      .then(res => res.json())
      .then(data => 
        setCoins(data))
        
      }, [])
      
      console.log(coins)

  return (
    <Container>
      <h1 className={styles.topCryptosText}>Top Cryptocurrencies</h1>
      <div className={styles.cryptosListTopWrapper}>
        <div className={styles.coinNr}>#</div>
        <div className={styles.coinName}>Coin</div>
        <div className={styles.coinPrice}>Price</div>
        <div className={styles.coinPriceChange}>24 Change</div>
        <div className={styles.coinMarketCap}>Market Cap</div>
      </div>
      <CryptocurrenciesList coins={coins} />
    </Container>
  )
}

export default CryptocurrenciesPage