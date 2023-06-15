import './index.css'

const FaqItem = props => {
  const {faqItem, showItem} = props
  const {answerText, id, questionText, showAnswer} = faqItem
  const faqItemImageAlt = showAnswer === false ? 'plus' : 'minus'
  const faqItemImageSrc =
    showAnswer === false
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

  const updateItem = () => {
    showItem(id)
  }

  return (
    <li className="faq-item-bg-container">
      <div className="faq-item-question-container">
        <h1 className="faq-item-question">{questionText}</h1>
        <button
          type="button"
          className="plus-minus-button"
          onClick={updateItem}
        >
          <img
            alt={faqItemImageAlt}
            className="faq-item-plus-minus-image"
            src={faqItemImageSrc}
          />
        </button>
      </div>
      {showAnswer === true && (
        <div className="faq-item-answer-container">
          <p className="faq-item-answer">{answerText}</p>
        </div>
      )}
    </li>
  )
}

export default FaqItem
