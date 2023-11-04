import React from 'react'
import CryptocurrencyItem from './CryptocurrencyItem'

const CryptocurrenciesList = ({ coins }) => {
    let cryptocurrenciesElement = <p>No posts...</p>
    
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