import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 ">
      <Navbar />

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md mt-6">
        <h1 className="text-3xl font-bold text-amber-800 mb-4">
          About Us
        </h1>

        <p className="text-gray-600 leading-7 mb-6">
          Welcome to our website. This is a simple React project
          created using React Router and Tailwind CSS.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">

          <h2 className="text-xl font-semibold text-amber-800 mb-3">
            Our Website
          </h2>

          <p className="text-gray-700 leading-6">
            Our website provides different pages like User, Profile,
            Settings and About. You can easily move between pages
            using the navigation bar and sidebar.
          </p>

        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">



          <Link to={"/user"}>
          <div className="p-4 bg-gray-50 rounded-lg border">
            <h3 className="font-semibold text-amber-800">
              User
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              View user information.
            </p>
          </div>
          </Link>

           <Link to={"/profile"}>
          <div className="p-4 bg-gray-50 rounded-lg border">
            <h3 className="font-semibold text-amber-800">
              Profile
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              View profile details.
            </p>
          </div>
          </Link>


          <Link to={"/settings"}>
          <div className="p-4 bg-gray-50 rounded-lg border">
            <h3 className="font-semibold text-amber-800">
              Settings
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Manage your settings.
            </p>
          </div>
          </Link>

        </div>

      </div>

    </div>
  )
}

export default About

