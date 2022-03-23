import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Coin from './components/Coin.js'
function App() {
  const [listOfCoins, setListOfCoins] = useState([])
  const [serchWord, setSerchWord] = useState('')
  useEffect(() => {
    axios.get('https://api.coinstats.app/public/v1/coins?skip=0').then(res => {
      setListOfCoins(res.data.coins)
    })
  })

  const filteredCoins = listOfCoins.filter(coin => {
    return coin.name.includes(serchWord)
  })
  return (
    <div className="App">
      <div className="cryptoHeader">
        <input
          type="text"
          placeholder="...Bitcoin?"
          onChange={e => {
            setSerchWord(e.target.value)
          }}
        />
      </div>
      <div className="cryptoDisplay">
        {filteredCoins.map(coin => {
          return (
            <Coin
              name={coin.name}
              icon={coin.icon}
              price={coin.price}
              symbol={coin.symbol}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App
