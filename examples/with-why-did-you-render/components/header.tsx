import { useState, useEffect } from 'react'
import Counter from './counter'

const Header = () => {
  const [objState, setObjState] = useState({ name: 'World', count: 0 })

  const handleCountClick = () => {
    setObjState((prevState) => ({
      ...prevState,
      count: prevState.count + 1,
    }))
  }

  const handleUnnecessaryClick = () => {
    setObjState((prevState) => ({ ...prevState }))
  }

  useEffect(() => {
    setObjState({ name: 'World', count: 0 })
  }, [])

  return (
    <header>
      <h1>Hello {objState.name} !</h1>
      <button onClick={handleCountClick}>Increase Count</button>
      <Counter counterState={objState} />
      <br />
      <button onClick={handleUnnecessaryClick}>
        Click here for an unnecessary re-render
      </button>
      <div>Check the console for details about the re-render</div>
    </header>
  )
}

Header.whyDidYouRender = true

export default Header
