import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button"
import { EnvelopeOpenIcon } from '@radix-ui/react-icons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Button>
            <EnvelopeOpenIcon className='mr-2 h-4 w-4' />
            Click Me
        </Button>
    </>
  )
}

export default App
