import React, { useEffect, useState } from 'react'
import Container from '../../components/Container/Container'
import { API_URL } from '../../config'
import CryptocurrenciesList from '../../components/CryptocurrenciesList/CryptocurrenciesList'

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
      <h1>Top Cryptocurrencies</h1>
      <div className='crypto-list-top'>
        <div className='coin-nr'>#</div>
        <div className='coin-name'>Coin</div>
        <div className='coin-price'>Price</div>
        <div className='price-change'>24 Change</div>
        <div className='market-cap'>Market Cap</div>
      </div>
      <CryptocurrenciesList coins={coins} />
    </Container>
  )
}

export default CryptocurrenciesPage