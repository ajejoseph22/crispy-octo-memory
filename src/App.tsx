import React from 'react'
import './App.css'
import DateArea from './components/date-area'
import DisplayArea from './components/display-area'

function App(): JSX.Element {
  return (
    <div>
      <DateArea />
      <DisplayArea />
    </div>
  )
}

export default App
