import React from 'react'
import Navbar from '../components/Navbar'

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 ">

      <Navbar/>

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md mt-2.5">

        <h1 className="text-3xl font-bold text-amber-800 mb-2">
          Contact Us
        </h1>

        <p className="text-gray-600 mb-6">
          Have any questions? Feel free to contact us.
        </p>

        <div className="space-y-4">

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-amber-700"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-amber-700"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>

            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-amber-700"
            ></textarea>
          </div>

          <button className="bg-amber-800 text-white px-6 py-3 rounded-lg hover:bg-amber-700">
            Send Message
          </button>

        </div>

      </div>

    </div>
  )
}

export default Contact

