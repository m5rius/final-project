import { useEffect, useState } from "react"
import Container from "../../components/Container/Container"
import { Link, useParams } from "react-router-dom"
import { API_URL } from "../../config"
import { Oval } from "react-loader-spinner"

const PostPage = () => {

  const { id } = useParams()

  const [coin, setCoin] = useState('')
  const[coinDeleted, setCoinDeleted] = useState(false)

  useEffect(() => {
      fetch(`${API_URL}/coins/${id}`)
      .then(res => res.json())
      .then(coinData => {
        setCoin(coinData)
      })
  }, [id])

  if (!coin)
  return(
    <Oval
    height={80}
    width={80}
    color="black"
    wrapperStyle={{
      disply: 'flex',
      justifyContent: 'center'
    }}
    wrapperClass=""
    visible={true}
    ariaLabel='oval-loading'
    secondaryColor="white"
    strokeWidth={2}
    strokeWidthSecondary={2}
    />

  ) 

  if(Object.keys(coin).length === 0){
    return 'Something went wrong...'
  }

  const removeCoinHandler = () => {
  fetch(`${API_URL}/coins/${id}`, {
    method: 'DELETE',
  })

  setCoinDeleted(true)
  }
  console.log(coin)

  return (
    <Container>
      {coinDeleted ? (
        <>
          <p>Cryptocurrency was deleted</p>
          <Link to={'/cryptocurrencies'}>Go back to cryptocurrencies page</Link>
        </>
      ) : (
        <>
          <div className="coin-rank">{coin.market_cap_rank}</div>
          <h2 className="title-text">{coin.name.toUpperCase()}</h2>
          <img src={coin.image} alt="/"></img>
          <div className="coin-price">{coin.current_price} $</div>
          <div className="price-change">{Math.round(coin.price_change_percentage_24h * 100) / 100} %</div>
          <div className="market-cap">{coin.market_cap.toLocaleString()} $</div>
          <div className="post-page-buttons">
            <Link className="edit-post-link" to={`/edit-coin/${id}`}>Edit Coin</Link>
            <button className="delete-post-btn" onClick={removeCoinHandler}>Delete Coin</button>
          </div>
        </>

      )}
    </Container>
  )
}

export default PostPage