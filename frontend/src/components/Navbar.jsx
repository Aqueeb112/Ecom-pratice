import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
   <nav className="z-50 sticky top-0 bg-zinc-800 text-white px-8 py-4 flex items-center justify-between">
  <div className="flex items-center">
    <img className="h-10 me-4" src="https://cdn-icons-png.flaticon.com/128/10433/10433049.png" alt="" />
    <h1 className="text-2xl font-semibold">MyEcommerce Web</h1>
  </div>
  <div className="nav-links-bookheaven flex items-center gap-4">
    <div className="hidden md:flex gap-4">
      <a href="/" className="hover:text-blue-500 transition-all duration-300">Home</a>
      <a href="/about" className="hover:text-blue-500 transition-all duration-300">About</a>
      <a href="/contact" className="hover:text-blue-500 transition-all duration-300">Contact</a>
      <a href="/profile" className="px-2 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300">Profile</a>
    </div>
    <div className="hidden md:flex gap-4">
      <Link to="/login" className="px-2 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300">Login</Link>
      <Link to="/signup" className="px-2 py-1 bg-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300">SignUp</Link>
    </div>
    <button className="text-white text-2xl md:hidden hover:text-zinc-400">
      ☰
    </button>
  </div>
</nav>


{/* mobile */}
{/* <div className="bg-zinc-800 h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center">
  <a href="/home" className="text-white text-4xl font-semibold mb-4 hover:text-blue-500 transition-all duration-300">Home</a>
  <a href="/about" className="text-white text-4xl font-semibold mb-4 hover:text-blue-500 transition-all duration-300">About</a>
  <a href="/contact" className="text-white text-4xl font-semibold mb-4 hover:text-blue-500 transition-all duration-300">Contact</a>
  <a href="/profile" className="text-white text-4xl font-semibold mb-4 hover:text-blue-500 transition-all duration-300">Profile</a>

  <a href="/login" className="px-8 mb-8 text-3xl font-semibold text-white py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300">Login</a>
  <a href="/signup" className="px-8 mb-8 text-3xl font-semibold text-white py-1 bg-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300">SignUp</a>
</div> */}

   </>
  )
}

export default Navbar