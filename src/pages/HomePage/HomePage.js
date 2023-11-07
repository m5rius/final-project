import React, { useEffect, useState } from 'react'
import Container from '../../components/Container/Container'
import { API_URL } from '../../config'
import HomeAlbumsList from '../../components/HomeAlbumsList/HomeAlbumsList'
import styles from './HomePage.module.css'
import HomeCryptocurrenciesList from '../../components/HomeCryptocurrenciesList/HomeCryptocurrenciesList'

const HomePage = () => {
  const [albums, setAlbums] = useState([])
  const [coins, setCoins] = useState('')

  useEffect(() => {
    fetch(`${API_URL}/albums?_expand=user&_embed=photos&_start=2&_limit=4`)
    .then(res => res.json())
    .then(albums => {
      setAlbums(albums)
    })
  }, [])

  useEffect(() => {
    fetch(`${API_URL}/coins/?_start=37&_limit=4`)
    .then(res => res.json())
    .then(data => 
      setCoins(data))
      
    }, [])
    
    console.log(coins)


  return (
    <Container>
      <div className={styles.heroContainer}>
        <div className={styles.heroTextContainer}>
          <h1 className={styles.heroHeading}>Discover, Collect And Sell Most Popular Cryptos And Dive Into The NFT Realm</h1>
          <h2 className={styles.heroBody}>Welcome to the epicenter of the digital frontier, where technology meets art, innovation intersects with finance, and possibilities are limited only by your imagination. This is the realm of NFTs and cryptocurrencies, where the future unfolds in a symphony of blockchain brilliance.</h2>
        </div>

        <div className={styles.coinsContainer}>
          <HomeCryptocurrenciesList coins={coins} />
        </div>

      </div>
        
        <HomeAlbumsList albums={albums}/>
    </Container>
  )
}

export default HomePage