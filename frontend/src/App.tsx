import {useEffect, useState} from 'react'

import './App.css'

function App() {
  const [data, setData] = useState({

  })

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL)
      .then(res => res.json())
      .then(setData)
  }, [])

  return (
    <div style={{
      'height': '100vh',
      'width': '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {JSON.stringify(data, null, 2)}
    </div>
  )
}

export default App
