import React from 'react'
import axios from "axios";

const App = () => {

  function handleViewAllNotes() {
    console.log("View All Notes");
    axios
  }

  return (
    <div>
      <button onClick={handleViewAllNotes} className='bg-blue-500 p-2 rounded-lg'>View All Notes</button>
    </div>
  )
}

export default App