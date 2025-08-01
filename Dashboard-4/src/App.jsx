import React from 'react'
import Navbar from './components/navbar/Navbar'
import Content1 from './components/content1/Content1'
import Content2 from './components/content2/Content2'
import Content3 from './components/content3/Content3'
const App = () => {
  return (
    <div>
      <Navbar />
      <Content1 />
        <Content2 />
        <Content3 />
    </div>
  )
}

export default App
