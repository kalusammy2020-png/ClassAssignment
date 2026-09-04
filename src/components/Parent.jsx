import React from 'react'
import Child from './Child'

function Parent() {
  return (
    <div className="flex justify-between items-center gap-4 bg-white p-4 rounded-lg shadow-md">
      <Child image="public/Hero.png.jpeg"
             name="Name: Ada Lovelace"
             role="Role: Mathematician"
             description="Say Hello"
      />
      <Child image="public/SecondImage.png.jpeg"
              name="Name: John Ogbonna"
              role="Role: Software developer"
              description="Say Hi"
      />
      <Child image="public/Doctors.jpg.jpeg"
              name="Name: Obinna Okafor"
              role="Role: Chef"
              description="Say Welcome"
      />
    </div>
  )
}

export default Parent