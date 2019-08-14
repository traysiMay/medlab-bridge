import React, { useRef, useEffect, useReducer, useState } from 'react'
import { HomeContainer, MessageWrapper, Button } from './styles'
import reducer from './reducer'

const Home = ({ history }) => {
  console.log('hi', history)
  const [state, dispatch] = useReducer(reducer, {
    buttonText: ':)',
    messageText: 'hello...',
    counter: 0,
  })

  const builtMessage = useRef()

  const messageEl = useRef()
  const buttonEl = useRef()

  const blinky = () => {
    const { counter } = state
    let step = 1
    if (counter > 10) {
      step = 2
    }
    if (counter > 15) {
      step = 3
    }
    if (counter > 20) {
      step = 4
    }
    if (counter > 30) {
      step = 5
    }
    if (counter > 35) {
      step = 6
    }
    if (counter > 40) {
      step = 7
    }
    if (counter > 45) {
      step = 8
      buttonEl.current.style.width = '24rem'
    }
    dispatch({ type: step })

    if (counter > 5 && counter < 30) {
      const sinWave = 10 * Math.sin(counter) + 10
      messageEl.current.style.margin = sinWave + 'rem'
    }
  }

  // TO DO STOP SET INTERVAL ON DISMOUNT
  useEffect(() => {
    // blinky()
    setTimeout(blinky, 1000)
  }, [state])

  return (
    <HomeContainer>
      <div>{builtMessage.current}</div>
      <MessageWrapper ref={messageEl}>{state.messageText}</MessageWrapper>
      <Button ref={buttonEl}>{state.buttonText}</Button>
    </HomeContainer>
  )
}

export { Home }
