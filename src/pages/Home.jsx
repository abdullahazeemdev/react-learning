import React from 'react'
import Navbar from '../components/Navbar'
import { Link, NavLink, Outlet } from 'react-router'
import User from './User'

const Home = () => {
  return (
    <div className='flex flex-col h-screen overflow-hidden'>
      <Navbar />

      <div className='flex flex-1'>

        {/* Sidebar */}
        <ul className='bg-amber-800 w-60 p-4 text-white h-full flex flex-col gap-2 shadow-xl'>
          <li>
            <NavLink
              to="/user"
              className={({ isActive }) => `hover:bg-amber-700 p-2.5 rounded-lg cursor-pointer transition-all font-medium flex ${isActive ? 'bg-white text-amber-800' : 'hover:bg-amber-700'
                }`
              }
            >
              User
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) => `hover:bg-amber-700 p-2.5 rounded-lg cursor-pointer transition-all font-medium flex ${isActive ? 'bg-white text-amber-800' : 'hover:bg-amber-700'
                }`
              }
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              className={({ isActive }) => `hover:bg-amber-700 p-2.5 rounded-lg cursor-pointer transition-all font-medium flex ${isActive ? 'bg-white text-amber-800' : 'hover:bg-amber-700'
                }`
              }
            >
              Settings
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/counter"
              className={({ isActive }) => `hover:bg-amber-700 p-2.5 rounded-lg cursor-pointer transition-all font-medium flex ${isActive ? 'bg-white text-amber-800' : 'hover:bg-amber-700'
                }`
              }
            >
              Counter
            </NavLink>
          </li>
        </ul>

        {/* Child pages yahan render hongi */}
        <main className='flex-1 p-6 overflow-auto'>
          <Outlet />
        </main>

      </div>
    </div>
  )
}

export default Home