import React from 'react'

class DelayedButton extends React.Component {
   constructor(props) {
     super(props)

     this.handleEvent = this.handleEvent.bind(this)
   }

   handleEvent(event) {
     event.persist()
     setTimeout(this.props.onDelayedClick, this.props.delay, event)
   }

  render() {
    return(
      <div>
        <button onClick={this.handleEvent}> </button>
      </div>
    )
  }
}

module.exports = DelayedButton
