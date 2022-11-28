import React from 'react'

function Header() {
  return (
    <header className="text-center mb-16 mx-6 ">
      <div className="flex justify-center">
        <img src="/Dog-icon.png" alt="" />
      </div>
      <h1 className="text-4xl text-blue-600">Dogs Facts App</h1>
      <h2 className="text-blue-300">Just an app with facts of dogs.</h2>
    </header>
  )
}

export default Header
