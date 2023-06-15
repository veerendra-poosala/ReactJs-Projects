import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  constructor(props) {
    super(props)
    const {faqsList} = this.props
    const updatedFaqsList = faqsList.map(eachItem => ({
      ...eachItem,
      showAnswer: false,
    }))
    this.state = {
      faqsList: [...updatedFaqsList],
    }
  }

  showItem = id => {
    const {faqsList} = this.state
    const updateFaqsList = faqsList.map(item => {
      if (item.id === id) {
        return {
          id: item.id,
          answerText: item.answerText,
          questionText: item.questionText,
          showAnswer: !item.showAnswer,
        }
      }
      return item
    })
    this.setState({faqsList: [...updateFaqsList]})
  }

  render() {
    const {faqsList} = this.state
    // console.log(faqsList)

    return (
      <div className="faqs-bg-container">
        <div className="faqs-content-container">
          <h1 className="faqs-main-heading">FAQS</h1>
          <ul className="faqs-list-container">
            {faqsList.map(faqItem => (
              <FaqItem
                key={faqItem.id}
                faqItem={faqItem}
                showItem={this.showItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
