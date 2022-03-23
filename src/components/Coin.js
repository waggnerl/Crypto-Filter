import React from 'react'

function Coin({ name, icon, price, symbol }) {
  return (
    <div className="coin">
      <img src={icon} />
      <h1>Name: {name}</h1>
      <h1>Price: ${price.toFixed(2).replaceAll('.', ',')}</h1>
      <h1>Symbol: {symbol}</h1>
    </div>
  )
}

export default Coin
