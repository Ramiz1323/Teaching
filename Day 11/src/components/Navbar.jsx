import React from 'react'

const Navbar = (props) => {
    
  return (
    <div style={{backgroundColor: props.bgColor}} className="nav flex justify-between items-center p-4 bg-gray-800 text-white m-4 rounded-lg text-2xl">
        <h1>{props.title}</h1>
        <div className="flex gap-10">
            {props.links.map(function(elem, idx){
                return <a key={idx}>{elem}</a>
            })}
        </div>
    </div>
  )
}

export default Navbar