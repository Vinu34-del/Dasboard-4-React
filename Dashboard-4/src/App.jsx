import React from 'react'
import Navbar from './components/navbar/Navbar'
import Content1 from './components/content1/Content1'
import Content2 from './components/content2/Content2'
const App = () => {
  return (
    <div>
      <Navbar />
      <Content1 />
        <Content2 />
    </div>
  )
}

export default App
