import React from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem/CryptocurrencyItem'

const CryptocurrenciesList = ({ coins }) => {
    let cryptocurrenciesElement = <p>Loading...</p>
    
    if (coins.length > 0) {
        cryptocurrenciesElement = (
        <ul className='cryptos-list'>
            {coins.map((coin) => <CryptocurrencyItem key={coin.id} data={coin}/>)}
        </ul>
      )
    }
  return (
    <div>
        {cryptocurrenciesElement}
    </div>
  )
}

export default CryptocurrenciesList