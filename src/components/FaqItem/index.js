// Write your code here.
import './index.css'

const FaqItem = props => {
  const {faqDetails, onBtnClicked} = props
  const {questionText, answerText, id, isActive} = faqDetails

  const onClickBtn = () => {
    onBtnClicked(id)
  }

  return (
    <li className="faq-list-item">
      <div className="question-container">
        <h1 className="question-text">{questionText}</h1>

        {isActive ? (
          <button type="button" className="button" onClick={onClickBtn}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
              alt="minus"
              className="image-icon"
            />
          </button>
        ) : (
          <button type="button" className="button" onClick={onClickBtn}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
              alt="plus"
              className="image-icon"
            />
          </button>
        )}
      </div>
      {isActive && (
        <div className="answer-container">
          <hr className="head-rise" />
          <p className="answer-text">{answerText} </p>
        </div>
      )}
    </li>
  )
}
export default FaqItem
