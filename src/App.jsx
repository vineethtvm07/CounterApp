import React, { useEffect, useState } from 'react'
import './App.css'
import Counter from './components/counterSession/Counter'
import Header from './components/header/Header';

function App() {
  
  const [count,setCount] = useState(0)

  useEffect(()=> {
    <Header />
  })

  const onIncrement = () => {
    if(count < 10) {
      setCount((prevCount) => prevCount + 1)
    }else {
      alert("Not allowed")
    }
  };

  const onDecrement = () => {
    if(count > 0) {
      setCount((prevCount) => prevCount - 1)
    }else {
      alert("Not allowed")
    }
  };
   
  const reset = () => setCount(0)

  return (
    <div>
      <Header />
     <Counter count={count} onIncrement={onIncrement} 
              onDecrement={onDecrement} reset={reset} />
    </div>
  )
}

export default App
