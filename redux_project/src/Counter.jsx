import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { increment,decrement,incrementByAmount } from './redux/counterSlice'

export const Counter = () => {
    const count = useSelector ((state) => state.Counter.value)
  return (
    <div>Counter</div>
  )
}
