import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './AdminContentManagement'
import AdminContentManagement from './AdminContentManagement'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AdminContentManagement/>
    </>
  )
}

export default App
