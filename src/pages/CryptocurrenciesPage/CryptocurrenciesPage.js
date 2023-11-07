import React, { useEffect, useState } from 'react'
import Container from '../../components/Container/Container'
import { API_URL } from '../../config'
import CryptocurrenciesList from '../../components/CryptocurrenciesList/CryptocurrenciesList'
import styles from './CryptocurrenciesPage.module.css'
import { Link } from 'react-router-dom'

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
      <div className={styles.buttons}>
        <div className='add-btn-wrapper'>
          <Link className='add-btn' to='/create-coin'> Add Coin </Link>
        </div>
      </div>
      <ul className={styles.cryptosListTopWrapper}>
        <li className={styles.coinNr}>#</li>
        <li className={styles.coinName}>Coin</li>
        <li className={styles.coinPrice}>Price</li>
        <li className={styles.coinPriceChange}>24 Change</li>
        <li className={styles.coinMarketCap}>Market Cap</li>
      </ul>
      <CryptocurrenciesList coins={coins} />
    </Container>
  )
}

export default CryptocurrenciesPage