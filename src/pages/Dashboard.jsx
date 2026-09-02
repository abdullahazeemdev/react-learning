
import React from 'react'

const Dashbaord = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md">

      <h1 className="text-3xl font-bold text-amber-800 mb-3">
        Welcome Home
      </h1>

      <p className="text-gray-600 mb-6">
        Welcome to our website. You can manage your account
        using the sidebar.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl">
          <h2 className="text-xl font-semibold text-amber-800 mb-2">
            Users
          </h2>

          <p className="text-gray-600">
            Manage and view user information.
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl">
          <h2 className="text-xl font-semibold text-amber-800 mb-2">
            Profile
          </h2>

          <p className="text-gray-600">
            View your profile information.
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl">
          <h2 className="text-xl font-semibold text-amber-800 mb-2">
            Settings
          </h2>

          <p className="text-gray-600">
            Manage your account settings.
          </p>
        </div>

      </div>

    </div>
  )
}

export default Dashbaord

