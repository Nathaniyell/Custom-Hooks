import React from 'react'
import BackwardCounter from './components/BackwardCounter'
import ForwardCounter from './components/ForwardCounter'

const App = () => {
  return (
    <div>
      <ForwardCounter />
      <BackwardCounter />
    </div>
  )
}

export default App