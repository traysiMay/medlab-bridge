import React, { useRef, useEffect, useReducer } from 'react'
import {
  Button,
  HomeContainer,
  MessageContainer,
  MessageWrapper,
} from './styles'
import reducer from './reducer'
import { VR } from './VR2'

const animateShit = () => {
  console.log(Math.sin(Date.now()))
  requestAnimationFrame(animateShit)
}

const Home = ({ history, match }) => {
  console.log(match.params)
  const stato = match.params.stato

  const [state, dispatch] = useReducer(reducer, {
    buttonText: ':)',
    messageText: 'hello...',
    counter: 0,
  })
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
      if (messageEl.current) messageEl.current.style.margin = sinWave + 'rem'
    }
  }

  const loopTextEls = (g, attribute, newVal) => {
    const text = g.getElementsByTagName('text')
    for (let i = 0; i < text.length; i++) {
      text[i].style[attribute] = newVal
    }
  }
  // TO DO STOP SET INTERVAL ON DISMOUNT
  useEffect(() => {
    // blinky()
    if (stato === '1') setTimeout(blinky, 1000)
    if (stato === '2') {
      const svg = document.getElementById('svg')
      const names = document.getElementById('names')
      const dials = document.getElementById('dials')
      const raptor = document.getElementById('raptor')
      const valenciaRoom = document.getElementById('valenciaRoom')
      const medlab = document.getElementById('medlab')
      const bottomLines = document.getElementById('bottomLines')
      const moon = document.getElementById('MOON')
      const moonLines = document.getElementById('moonLines')

      let time = 0
      let rate = 0.001
      let shift1 = 0
      let shift2 = 0
      let shift3 = 0
      let step = 1
      let scale = 1
      const animateShit = () => {
        const wave1 = Math.sin(time * Math.PI * (rate + shift1))
        const wave2 = Math.sin(time * Math.PI * (rate + shift2))
        const wave3 = Math.sin(time * Math.PI * (rate + shift3))

        if (step === 1) {
          moon.style.opacity = wave1
          if (time > 420) {
            valenciaRoom.style.opacity = wave2
          }
          if (time > 1000) {
            rate += 0.0001
            names.style.opacity = wave3
          }
          if (time > 1800) {
            rate += 0.1
          }
          if (time > 2200) {
            rate += 0.1
            shift1 = 1
            shift2 = 2
            shift3 = 3

            if (time % 2) moon.setAttribute('fill', 'red')
            bottomLines.setAttribute('opacity', 0.5)
            if (time % 3) moon.setAttribute('fill', 'red')
            bottomLines.setAttribute('opacity', 1)
            if (time > 2600) {
              medlab.setAttribute('opacity', 1)
              if (time % 4) loopTextEls(raptor, 'fill', 'white')
              if (time % 2) loopTextEls(dials, 'fill', 'white')
              if (time % 3) loopTextEls(stephen, 'fill', 'white')
              if (time % 2) loopTextEls(raptor, 'fill', 'red')
              if (time % 3) loopTextEls(dials, 'fill', 'red')
              if (time % 4) loopTextEls(stephen, 'fill', 'red')
              if (time % 3) loopTextEls(medlab, 'fill', 'white')
              if (time % 5) loopTextEls(medlab, 'fill', 'grey')
            }
          }
        }
        if (time > 2800) {
          step = 2
          moonLines.setAttribute('opacity', 1)
          if (time > 2830) {
            valenciaRoom.style.opacity = 1
            names.style.opacity = 1
            moon.style.opacity = 1
            bottomLines.setAttribute('opacity', 1)
            moon.setAttribute('fill', 'white')
            loopTextEls(raptor, 'fill', 'white')
            loopTextEls(dials, 'fill', 'white')
            loopTextEls(stephen, 'fill', 'white')
            loopTextEls(medlab, 'fill', 'white')
          }
          if (time > 3200) {
            svg.setAttribute('transform', `scale(${(scale += -0.01)})`)
            if (scale < -6) {
              svg.remove()
              return
            }
          }
        }

        time += 1
        requestAnimationFrame(animateShit)
      }
      animateShit()
    }
  }, [stato, state])

  return (
    <HomeContainer>
      {stato === '2' && (
        <MessageWrapper>
          <VR />
          <Button>REGISTER</Button>
          <Button>RSVP</Button>
        </MessageWrapper>
      )}
      {stato === '1' && (
        <MessageContainer>
          <MessageWrapper ref={messageEl}>{state.messageText}</MessageWrapper>
          <Button onClick={() => history.push('/home/2')} ref={buttonEl}>
            {state.buttonText}
          </Button>
        </MessageContainer>
      )}
    </HomeContainer>
  )
}

export { Home }
