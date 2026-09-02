import React from 'react'

const Profile = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">

      <h1 className="text-2xl font-bold text-amber-800 mb-6">
        My Profile
      </h1>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">

        <div className="mb-5">
          <h2 className="text-xl font-semibold text-amber-800">
            Abdullah Azeem
          </h2>

          <p className="text-gray-600">
            Frontend Developer
          </p>
        </div>

        <div className="space-y-3">

          <p className="text-gray-700">
            <span className="font-semibold">Email:</span>
            abdullahazeemkhi@gmail.com
          </p>

          <p className="text-gray-700">
            <span className="font-semibold">Phone:</span>
            0312-2699533
          </p>

          <p className="text-gray-700">
            <span className="font-semibold">Location:</span>
            Karachi, Pakistan
          </p>

          <p className="text-gray-700">
            <span className="font-semibold">Skills:</span>
            HTML, CSS, JavaScript, React
          </p>

        </div>

        <button className="mt-6 bg-amber-800 cursor-pointer text-white px-5 py-2 rounded-lg hover:bg-amber-700">
           View Details
        </button>

      </div>

    </div>
  )
}

export default Profile

