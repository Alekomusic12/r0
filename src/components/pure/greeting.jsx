import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class greeting extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
    <h1>Hola Mundo</h1>
      </div>
    )
  }

}

