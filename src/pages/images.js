import React, { Component } from 'react'
import SSIMG from '../images/ssimg.png'

export default class images extends Component {
  render() {
    return (
      <div>
        <img src={SSIMG} alt='img'/>
      </div>
    )
  }
}
