 import React from 'react'

 class CoordinatesButton extends React.Component {
    constructor(props) {
      super(props)
      
      this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(event) {
      this.props.onReceiveCoordinates([event.screenX,event.screenY])
    }

    render() {
      return(
        <div>
          <button onClick={this.clickHandler}>Click for coordinates</button>
        </div>
      )
    }
 }

module.exports = CoordinatesButton
