import React from 'react'
import { Link } from 'react-router'

export default class Base extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {this.props.children}
      </div>
    )
  }
}
