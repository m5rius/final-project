import React, { useEffect, useState } from 'react'
import Container from '../../components/Container/Container'
import axios from 'axios'

const CryptocurrenciesPage = () => {

    const [coins, setCoins] = useState(null)

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en'

    useEffect(() => {
        axios.get(url).then((response) => {
            setCoins(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    console.log(coins)
  return (
    <Container>

    </Container>
  )
}

export default CryptocurrenciesPage