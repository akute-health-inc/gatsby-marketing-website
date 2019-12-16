import React from 'react'
import './styles.scss'

class FaqItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: false,
    }

    this.setExpanded = this.setExpanded.bind(this)
  }

  setExpanded = expanded => {
    this.setState({
      expanded: expanded,
    })
  }

  render() {
    return (
      <article
        className="FaqItem"
        onClick={() => this.setExpanded(!this.state.expanded)}
      >
        <div className="title is-spaced is-4">
          <span className="FaqItem__icon icon is-size-5 has-text-primary">
            <i
              className={
                'fas' +
                (this.state.expanded ? ' fa-minus' : '') +
                (!this.state.expanded ? ' fa-plus' : '')
              }
            />
          </span>
          {this.props.question}
        </div>

        {this.state.expanded && (
          <div className="subtitle">{this.props.answer}</div>
        )}
      </article>
    )
  }
}

export default FaqItem
