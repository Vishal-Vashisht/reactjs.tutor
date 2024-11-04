import { useState } from 'react'

function App() {

  // usestate is a method and return two values
  // 1. 1st is variable and second value is a method
  // counter is a variable and setCounter is a function
  // Use state is takes argument so need to give it a value

  const [counter, setCounter] = useState(0)
  // let counter = 15

  /*
    So if we do something like below react actually does not apply changes on the go rather
    it batches these changes.

    so i click on add value buttom value i will get will be 1 not 4

    so function we received from useState also give use a callback and this callback contains the 
    prevValue

    setCounter((prevValue) => prevValue + 1)
    and if we do that we can actually update value the number of time we want

    When managing state in React, particularly with the useState hook, it's crucial to understand that state updates are asynchronous. This means that if you call a state setter function, like setCounter, multiple times in quick succession, all calls may use the initial value of the state, leading to unexpected results. To avoid this stale state issue, you should use the functional form of the state updater, such as setCounter(prevCounter => prevCounter + 1). This approach ensures that each update uses the most recent state value. Additionally, for efficiency, if you want to increment the counter multiple times, you can consolidate the updates into a single call, like setCounter(prevCounter => prevCounter + 4). This reduces unnecessary re-renders and improves performance, making it a best practice for managing state effectively in React applications.
  */
  const addValue = () => {
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }

  // Subtract the value
  const subtractValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1> Starting of the react course</h1>
      <h2> Counter value : {counter}</h2>
      <button
      onClick={addValue}> Add Value </button>
      <button onClick={subtractValue}> Subtract value </button>
      <hr></hr>

    </>
  )
}

export default App
