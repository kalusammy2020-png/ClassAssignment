import React from 'react'



function Child({ image, name, role, description }) {
  return (
    <div className="flex flex-col py-4 font-mono gap-3 text-start">
      <img src={image} alt={name} className="w-100 h-80 rounded-lg shadow-md" />
      <h3 className="text-lg mt-2 text-gray-950">{name}</h3>
      <p className="text-gray-950">{role}</p>
      <p className="bg-gray-900 text-center w-30 text-white rounded-lg">{description}</p>
    </div>
  )
}

export default Child