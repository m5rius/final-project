import { useEffect, useState } from "react"
import Container from "../../components/Container/Container"
import { Link, useParams } from "react-router-dom"
import { API_URL } from "../../config"
import { Oval } from "react-loader-spinner"
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import styles from './CryptocurrencyPage.module.css'

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
        <div className={styles.coinUpperBlock}>
          <div className={styles.upperBlock1}>
            <div className={styles.nameAndSymbol}>
              <h2 className={styles.coinName}>{coin.name.toUpperCase()}</h2>
              <span className={styles.coinSymbol}>{coin.symbol}</span>
            </div>
            <img className={styles.coinImage} src={coin.image} alt="/"></img>
            <span className={styles.coinRank}>Rank #{coin.market_cap_rank}</span>
            <div className={styles.priceAndChange}>
              <span className={styles.coinPrice}>{coin.current_price.toLocaleString()} $</span>
              <div className={styles.coinPriceChange}>
                {coin.price_change_percentage_24h < 0 ? (
                <span className={styles.red}>
                  <FiArrowDown/>
                  {coin.price_change_percentage_24h.toFixed(2)} %
                </span>
              ): (
                <span className={styles.green}>
                  <FiArrowUp/>
                  {coin.price_change_percentage_24h.toFixed(2)} %
                </span>
              )}
              </div>
            </div>
          </div>

        </div>
        <div className={styles.coinMiddleBlock}>
          <div className={styles.middleBlock1}>
            <div className={styles.coinInfoWrapper}>
              <span>Market Cap</span>
              <span className={styles.marketCap}>{coin.market_cap.toLocaleString()} $</span>
            </div>

            <div className={styles.coinInfoWrapper}>
              <span>Fullly Diluted Valuation</span>
              <span className={styles.fdv}>{coin.fully_diluted_valuation.toLocaleString()} $</span>
            </div>


            <div className={styles.coinInfoWrapper}>
              <span>Circulating Supply</span>
              <span className={styles.circulatingSupply}>{coin.circulating_supply.toLocaleString()}</span>
            </div>
          </div>

          <div className={styles.middleBlock2}>
            <div className={styles.coinInfoWrapper}>
                <span>Total Supply</span>
                <span className={styles.TotalSupply}>{coin.total_supply.toLocaleString()}</span>
              </div>

              <div className={styles.coinInfoWrapper}>
                <span>All Time High Price</span>
                <span className={styles.ath}>{coin.ath.toLocaleString()} $</span>
              </div>

              <div className={styles.coinInfoWrapper}>
                <span>Percentage From All Time High</span>
                <span className={styles.percentageFromAth}>{coin.ath_change_percentage.toFixed(2)} %</span>
              </div>
          </div>

        </div>
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