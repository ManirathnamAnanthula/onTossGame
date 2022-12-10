import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {headCount: 0, tailCount: 0, isHead: true}

  onTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        headCount: prevState.headCount + 1,
        isHead: true,
      }))
    } else {
      this.setState(prevState => ({
        tailCount: prevState.tailCount + 1,
        isHead: false,
      }))
    }
  }

  render() {
    const {isHead, headCount, tailCount} = this.state
    const totalCount = headCount + tailCount
    const tossImage = isHead
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="bg-container">
        <div className="cointoss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={tossImage} alt="toss result" className="toss-img" />
          <button type="button" className="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headCount}</p>
            <p className="count">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
