import React, { useEffect, useState } from 'react'

import { fetchGreetings } from '../api'

function App () {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    fetchGreetings()
      .then(greetings => setMessages(greetings))
  }, [])

  return (
    <div className='app-container'>
      <h1 className='app-title'>Hello World!</h1>
      <ul>
        {messages.map(m => <li key={m.id}>{m.text} 👋</li>)}
      </ul>
    </div>
  )
}

export default App
