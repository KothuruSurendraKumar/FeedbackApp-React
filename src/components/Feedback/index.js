// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    isEmojiSelected: false,
  }

  onClickEmoji = () => {
    this.setState({isEmojiSelected: true})
  }

  renderFeedBackScreen = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-container">
        <h1 className="heading">
          How Satisfied are you with our customer support performance
        </h1>
        <ul className="list-items">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button
                type="button"
                className="button"
                onClick={this.onClickEmoji}
              >
                <img src={emoji.imageUrl} alt={emoji.name} className="emoji" />
                <br />
                <span className="text">{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankuScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="container">
        <img src={loveEmojiUrl} alt="love emoji" className="love" />
        <h1 className="header">Thank You!</h1>
        <p className="para">
          We will use your feedback to improve over customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isEmojiSelected} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          {isEmojiSelected
            ? this.renderThankuScreen()
            : this.renderFeedBackScreen()}
        </div>
      </div>
    )
  }
}
export default Feedback
