import React from 'react'

const Navbar = () => {
  return (
   <>
   <nav class="z-50 sticky top-0 bg-zinc-800 text-white px-8 py-4 flex items-center justify-between">
  <div class="flex items-center">
    <img class="h-10 me-4" src="https://cdn-icons-png.flaticon.com/128/10433/10433049.png" alt="" />
    <h1 class="text-2xl font-semibold">MyEcommerce Web</h1>
  </div>
  <div class="nav-links-bookheaven flex items-center gap-4">
    <div class="hidden md:flex gap-4">
      <a href="/home" class="hover:text-blue-500 transition-all duration-300">Home</a>
      <a href="/about" class="hover:text-blue-500 transition-all duration-300">About</a>
      <a href="/contact" class="hover:text-blue-500 transition-all duration-300">Contact</a>
      <a href="/profile" class="px-2 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300">Profile</a>
    </div>
    <div class="hidden md:flex gap-4">
      <a href="/login" class="px-2 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300">Login</a>
      <a href="/signup" class="px-2 py-1 bg-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300">SignUp</a>
    </div>
    <button class="text-white text-2xl md:hidden hover:text-zinc-400">
      ☰
    </button>
  </div>
</nav>


{/* mobile */}
{/* <div class="bg-zinc-800 h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center">
  <a href="/home" class="text-white text-4xl font-semibold mb-4 hover:text-blue-500 transition-all duration-300">Home</a>
  <a href="/about" class="text-white text-4xl font-semibold mb-4 hover:text-blue-500 transition-all duration-300">About</a>
  <a href="/contact" class="text-white text-4xl font-semibold mb-4 hover:text-blue-500 transition-all duration-300">Contact</a>
  <a href="/profile" class="text-white text-4xl font-semibold mb-4 hover:text-blue-500 transition-all duration-300">Profile</a>

  <a href="/login" class="px-8 mb-8 text-3xl font-semibold text-white py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300">Login</a>
  <a href="/signup" class="px-8 mb-8 text-3xl font-semibold text-white py-1 bg-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300">SignUp</a>
</div> */}

   </>
  )
}

export default Navbar