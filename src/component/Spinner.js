import React, { Component } from 'react'
import preview from '../preview.gif'
export default class Spinner extends Component {
  render() {
    return (
     <>
     <div className="text-center">     <img src={preview} alt="Loding...." />
</div>
     </>
    )
  }
}
