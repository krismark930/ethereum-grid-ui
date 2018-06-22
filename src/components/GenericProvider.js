import React, { Component } from 'react'

// Wrapper around redux provider implementations
// that allows to use different approaches for renderer-main sync
class Provider extends Component {
  constructor(){
    super()
  }
  render(){
    // set props on children: https://stackoverflow.com/a/32371612
    const { children } = this.props
    const childrenWithProps = React.Children.map(children, child => React.cloneElement(child, { 
      ...window.store
    }))
    return (
      <div>
        {childrenWithProps}
      </div>
    )
  }
}

export default Provider