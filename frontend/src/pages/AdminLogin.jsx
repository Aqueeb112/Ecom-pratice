import React from 'react'
import { Link } from 'react-router-dom'

const adminLogin = () => {
  return (
    <div className="bg-sky-100 flex justify-center items-center h-screen">
    <div className="w-1/2 h-screen hidden lg:block">
      <img
        src="https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg?w=826"
        alt="Placeholder Image"
        className="object-cover w-full h-full"
      />
    </div>
    <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
      <h1 className="text-2xl font-semibold mb-4">Admin Login</h1>
      <form action="#" method="POST">
        <div className="mb-4">
          <label for="username" className="block text-gray-600">
            Email
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            autocomplete="off"
          />
        </div>
        <div className="mb-4">
          <label for="password" className="block text-gray-800">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            autocomplete="off"
          />
        </div>

        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="remember"
            name="remember"
            className="text-red-500"
          />
          <label for="remember" className="text-green-900 ml-2">
            Remember Me
          </label>
        </div>
        <div className="mb-6 text-blue-500">
          <a href="#" className="hover:underline">
            Forgot Password?
          </a>
        </div>

        <button
          type="submit"
          className="bg-red-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
        >
          Login
        </button>
      </form>

      <div className="mt-6 text-green-500 text-center flex flex-col gap-4">
        <Link to="/adminsignup" className="hover:underline">
          Sign up Here As a Admin
        </Link>
        <Link to="/login" className="hover:underline">
          Login as User
        </Link>
      </div>
    </div>
  </div>
  )
}

export default adminLogin