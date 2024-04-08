import React, { useState } from 'react'
import './App.css'
function App() {
  const [value, setValue] = useState('');
  return (
    <div className="container bg-orange-900">
      <div className="calculator">
        <form action="">
          <div className="display">
            <input type="text" value={value} />
          </div>
          <div className='calculations'>
            <input className='button bg-red-950' type="button" value="AC" onClick={e => setValue('')} />
            <input className='button bg-red-950' type="button" value="DEL" onClick={e => setValue(value.slice(0, -1))} />
            <input className='button bg-red-700' type="button" value="." onClick={e => setValue(value + e.target.value)} />
            <input className='button bg-red-700' type="button" value="/" onClick={e => setValue(value + e.target.value)} />
          </div>
          <div>
            <input className='button bg-amber-300' type="button" value="7" onClick={e => setValue(value + e.target.value)} />
            <input className='button bg-amber-300' type="button" value="8" onClick={e => setValue(value + e.target.value)} />
            <input className='button bg-amber-300' type="button" value="9" onClick={e => setValue(value + e.target.value)} />
            <input className='button bg-red-700' type="button" value="*" onClick={e => setValue(value + e.target.value)} />
          </div>
          <div>
            <input className='button bg-amber-300' type="button" value="4" onClick={e => setValue(value + e.target.value)} />
            <input className='button bg-amber-300' type="button" value="5" onClick={e => setValue(value + e.target.value)} />
            <input className='button bg-amber-300' type="button" value="6" onClick={e => setValue(value + e.target.value)} />
            <input className='button bg-red-700' type="button" value="+" onClick={e => setValue(value + e.target.value)} />
          </div>
          <div>
            <input className='button bg-amber-300' type="button" value="1" onClick={e => setValue(value + e.target.value)} />
            <input className='button bg-amber-300' type="button" value="2" onClick={e => setValue(value + e.target.value)} />
            <input className='button bg-amber-300' type="button" value="3" onClick={e => setValue(value + e.target.value)} />
            <input className='button bg-red-700' type="button" value="-" onClick={e => setValue(value + e.target.value)} />
          </div>
          <div>
            <input className='button bg-amber-300' type="button" value="0" onClick={e => setValue(value + e.target.value)} />
            <input className='equal' type="button" value="=" onClick={e => setValue(eval(value))} />
          </div>
        </form>
      </div>
    </div>
  )
}
export default App