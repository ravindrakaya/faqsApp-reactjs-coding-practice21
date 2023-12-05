// Write your code here.
import './index.css'
import {Component} from 'react'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  state = {objectList: []}

  componentDidMount() {
    const {faqsList} = this.props
    this.setState({objectList: faqsList})
  }

  onBtnClicked = id => {
    console.log(id)

    const {objectList} = this.state
    console.log(objectList)
    const newLlist = objectList.map(item => {
      if (id === item.id) {
        return {
          id: item.id,
          questionText: item.questionText,
          answerText: item.answerText,
          isActive: !item.isActive,
        }
      }
      return item
    })
    this.setState({objectList: newLlist})
  }

  render() {
    const {objectList} = this.state

    return (
      <div className="app-container">
        <div className="faqs-container">
          <h1 className="heading">FAQs</h1>
          <ul className="faqs-list-container">
            {objectList.map(eachFaq => (
              <FaqItem
                key={eachFaq.id}
                faqDetails={eachFaq}
                onBtnClicked={this.onBtnClicked}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
