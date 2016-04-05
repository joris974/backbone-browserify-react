import React from 'react'

const Base = React.createClass({
  displayName: "Base",

  render: function () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
})

export default Base
