import React, { useEffect, useState } from 'react'
import Container from '../../components/Container/Container'
import { API_URL } from '../../config'
import styles from './CreateCoinPage.module.css'


const CreateCoinPage = () => {

    const[name, setName] = useState('')
    const[coins, setCoins] = useState([])
    const[symbol, setSymbol] = useState([])
    const[image, setImage] = useState([])
    const[marketCap, setMarketCap] = useState([])
    const[ath, setAth] = useState([])
    const[fdv, setFdv] = useState([])
    const[circulatingSupply, setCirculatingSupply] = useState([])
    const[athPercentage, setAthPercentage] = useState([])
    const[marketCapRank, setMarketCapRank] = useState([])
    const[priceChangePercentage, setPriceChangePercentage] = useState([])
    const[price, setPrice] = useState([])
    const[totalSupply, setTotalSupply] = useState([])



    useEffect(() => {
        fetch(`${API_URL}/coins`)
        .then(res => res.json())
        .then(coinsData => {
          setCoins(coinsData)
        })
      }, [])

      console.log(coins)
  
    const nameHandler = event => setName(event.target.value)
    const symbolHandler = event => setSymbol(event.target.value)
    const imageHandler = event => setImage(event.target.value)
    const marketCapHandler = event => setMarketCap(event.target.value)
    const athHandler = event => setAth(event.target.value)
    const fdvHandler = event => setFdv(event.target.value)
    const circulatingSupplyHandler = event => setCirculatingSupply(event.target.value)
    const athPercentageHandler = event => setAthPercentage(event.target.value)
    const marketCapRankHandler = event => setMarketCapRank(event.target.value)
    const priceChangePercentageHandler = event => setPriceChangePercentage(event.target.value)
    const priceHandler = event => setPrice(event.target.value)
    const totalSupplyHandler = event => setTotalSupply(event.target.value)


  
    const newCoinHandler = event => {
      event.preventDefault()
  
      const newCoin= {
        name: name,
        symbol: symbol,
        image: image,
        market_cap: marketCap,
        ath: ath,
        fully_diluted_valuation: fdv,
        circulating_supply: circulatingSupply,
        ath_change_percentage: Number(athPercentage),
        market_cap_rank: marketCapRank,
        price_change_percentage_24h: Number(priceChangePercentage),
        current_price: price,
        id: name,
        total_supply: Number(totalSupply),


      }

      console.log(newCoin)

      fetch(`${API_URL}/coins`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(newCoin)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  
    }
    
    return (
      <Container>
        <h1 className='create-title'>Create New Coin</h1>
        <div className='form-wrapper'>
          <form className='create-coin-form' onSubmit={newCoinHandler}>
            <div className='form-section-wrapper'>
              <h2 className='form-section-title'>Coin Info</h2>
              <div className='form-control'>
                  <label htmlFor='name'>Coin name: </label>
                  <input
                  type='text'
                  name='name'
                  id='name'
                  value={name}
                  onChange={nameHandler}
                  />
              </div>

              <div className='form-control'>
                  <label htmlFor='symbol'>Symbol: </label>
                  <input
                  type='text'
                  name='symbol'
                  id='symbol'
                  value={symbol}
                  onChange={symbolHandler}
                  />
              </div>
              <div className='form-control'>
                  <label htmlFor='price'>Price: </label>
                  <input
                  type='number'
                  name='price'
                  id='price'
                  value={price}
                  onChange={priceHandler}
                  />
              </div>
              <div className='form-control'>
                  <label htmlFor='image'>Image: </label>
                  <input
                  type='url'
                  name='image'
                  id='image'
                  value={image}
                  onChange={imageHandler}
                  />
              </div>
              <div className='form-control'>
                  <label htmlFor='marketCap'>Market Cap: </label>
                  <input
                  type='number'
                  name='marketCap'
                  id='marketCap'
                  value={marketCap}
                  onChange={marketCapHandler}
                  />
              </div>
            
              <div className='form-control'>
                  <label htmlFor='totalSupply'>Total Supply: </label>
                  <input
                  type='number'
                  name='totalSupply'
                  id='totalSupply'
                  value={totalSupply}
                  onChange={totalSupplyHandler}
                  />
              </div>

              <div className='form-control'>
                  <label htmlFor='ath'>All Time High: </label>
                  <input
                  type='number'
                  name='ath'
                  id='ath'
                  value={ath}
                  onChange={athHandler}
                  />
              </div>
              <div className='form-control'>
                  <label htmlFor='ath'>Fully Diluted Val: </label>
                  <input
                  type='number'
                  name='fdv'
                  id='fdv'
                  value={fdv}
                  onChange={fdvHandler}
                  />
              </div>
            

              <div className='form-control'>
                  <label htmlFor='circulatingSupply'>Circulating Supply: </label>
                  <input
                  type='number'
                  name='circulatingSupply'
                  id='circulatingSupply'
                  value={circulatingSupply}
                  onChange={circulatingSupplyHandler}
                  />
              </div>
              <div className='form-control'>
                  <label htmlFor='athPercentage'>Percentage From ATH: </label>
                  <input
                  type='number'
                  name='athPercentage'
                  id='athPercentage'
                  value={athPercentage}
                  onChange={athPercentageHandler}
                  />
              </div>
              <div className='form-control'>
                  <label htmlFor='marketCapRank'>Rank: </label>
                  <input
                  type='number'
                  name='marketCapRank'
                  id='marketCapRank'
                  value={marketCapRank}
                  onChange={marketCapRankHandler}
                  />
              </div>
              <div className='form-control'>
                  <label htmlFor='priceChangePercentage'>24h Price Change: </label>
                  <input
                  type='number'
                  name='priceChangePercentage'
                  id='priceChangePercentage'
                  value={priceChangePercentage}
                  onChange={priceChangePercentageHandler}
                  />
              </div>
            </div>
            <div className='submit-btn-wrapper'>
              <button className='submit-btn' type='submit'>Create</button>
            </div>

          </form>
        </div>
      </Container>
    )
  }

export default CreateCoinPage