import React from 'react'

const Settings = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">

      <h1 className="text-2xl font-bold text-amber-800 mb-6">
        Settings
      </h1>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">

        <h2 className="text-xl font-semibold text-amber-800 mb-5">
          Account Settings
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Username
          </label>

          <input
            type="text"
            placeholder="Enter username"
            className="w-full border border-gray-300 p-2.5 rounded-lg outline-none focus:border-amber-700"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter email"
            className="w-full border border-gray-300 p-2.5 rounded-lg outline-none focus:border-amber-700"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter password"
            className="w-full border border-gray-300 p-2.5 rounded-lg outline-none focus:border-amber-700"
          />
        </div>

        <button className="mt-3 bg-amber-800 text-white px-5 py-2.5 rounded-lg hover:bg-amber-700">
          Save Settings
        </button>

      </div>

    </div>
  )
}

export default Settings

