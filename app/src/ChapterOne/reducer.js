const reducer = (state, action) => {
  const { counter } = state

  switch (action.type) {
    case 1:
      const hello = counter % 2 ? 'hello..' : 'hello...'
      const smile = counter % 2 ? ':' : ':)'
      return {
        counter: state.counter + 1,
        buttonText: smile,
        messageText: hello,
      }
    case 2:
      const laggin =
        counter % 2
          ? `you ain't laggin, this is just a shitty sin`
          : `you ain't laggin, this is just a shitty sin wave`
      const wtf = counter % 2 ? 'wt' : 'wtF'
      return {
        counter: state.counter + 1,
        buttonText: wtf,
        messageText: laggin,
      }
    case 3:
      const swain =
        counter % 2
          ? `oh god, how do I stop swain...`
          : `oh god, how do I stop swaying...`
      const why = counter % 2 ? 'WHYYYY' : 'whyyyy'
      return {
        counter: state.counter + 1,
        buttonText: why,
        messageText: swain,
      }
    case 4:
      const dizzy =
        counter % 2
          ? `well I'm dizzy now, what about YOU`
          : `well I'm dizzy now, what about you?`
      const oface = counter % 2 ? ':' : ':0'
      return {
        counter: state.counter + 1,
        buttonText: oface,
        messageText: dizzy,
      }
    case 5:
      const better = counter % 2 ? `ah much better huh` : `ah much better huh?`
      const smiler = counter % 2 ? ':' : ':D'
      return {
        counter: state.counter + 1,
        buttonText: smiler,
        messageText: better,
      }
    case 6:
      const where = counter % 2 ? `now where were we..` : `now where were we...`
      const thinker = counter % 2 ? ':' : ':/'
      return {
        counter: state.counter + 1,
        buttonText: thinker,
        messageText: where,
      }
    case 7:
      const party =
        counter % 2
          ? `you are interested in a party`
          : `you are interested in a party?`
      const smiley = counter % 2 ? ':' : ':D'
      return {
        counter: state.counter + 1,
        buttonText: smiley,
        messageText: party,
      }
    case 8:
      const pressit =
        counter % 2
          ? `well press the damn button`
          : `well press the damn button!`
      const mebutton = counter % 2 ? 'hehe' : `I'm a button!`
      return {
        counter: state.counter + 1,
        buttonText: mebutton,
        messageText: pressit,
      }
  }
}

export default reducer
