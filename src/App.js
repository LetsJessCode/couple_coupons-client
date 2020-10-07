import React, { Component } from 'react'
import CouponForm from './components/CouponForm'
import CouponList from './components/CouponList'
import CouponCard from './components/CouponCard'
export class App extends Component {
  render() {
    return (
      <div>
        <CouponForm />
        <CouponList />
        <CouponCard />
      </div>
    )
  }
}

export default App
