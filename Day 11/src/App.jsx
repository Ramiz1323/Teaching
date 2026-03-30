import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    <Navbar bgColor="blue" title="My App" links={["Home", "About", "Contact", "Blog"]} />
    <Navbar bgColor="purple" title="Lyra" links={["Home", "Threads", "Chats", "Blogs"]} />
    <Navbar bgColor="red" title="Cineva" links={["Home", "Movies", "Drama", "Recents"]} />
    </>
  )
}

export default App