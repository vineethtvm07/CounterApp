import './counter.css'

function Counter({count, onIncrement, onDecrement, reset}) {
  return (
    <div>
        <h2>Counter: {count} </h2>
      <button className='increase' onClick={onIncrement}> Increment </button>
      <button className='decrease' onClick={onDecrement}> Decrement </button>
      <button className='reset' onClick={reset}> Reset </button>
    </div>
  )
}

export default Counter
