import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router'
import axios from 'axios'

const Users = () => {

  const [users, setUsers] = useState([])

  const { id } = useParams()

  const getData = async () => {
    let result = await axios.get("https://dummyjson.com/users")
    setUsers(result.data.users)
  }

  useEffect(() => {
    getData()
  }, [])

  const selectedUser = users.find((user) => user.id == id)

  return (
   <div className="w-full max-h-[calc(100vh-100px)] bg-white p-6 rounded-2xl shadow-lg border border-gray-100 overflow-y-auto">

      <h1 className="text-3xl font-extrabold text-amber-900 mb-6 tracking-tight">
        Users Directory
      </h1>

      {/* User Selection Pills */}
      <div className="flex flex-wrap gap-2 mb-8 p-1">
        {users.map((user) => (
          <NavLink
            key={user.id}
            to={`/user/${user.id}`}
            className={({ isActive }) =>
              `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-amber-900 text-white shadow-md ring-2 ring-amber-700/50 scale-105"
                  : "bg-amber-50 text-amber-900 hover:bg-amber-100 border border-amber-200"
              }`
            }
          >
            {user.firstName}
          </NavLink>
        ))}
      </div>

      {/* Selected User Details Section */}
      {selectedUser ? (
        <div className="bg-gradient-to-br from-amber-50/60 to-amber-100/40 border border-amber-200/80 rounded-2xl p-6 shadow-sm transition-all mb-6">

          <div className="flex items-center gap-5 mb-6 pb-6 border-b border-amber-200/60">
            <img
              src={selectedUser.image}
              alt={selectedUser.firstName}
              className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md bg-amber-200"
            />
            <div>
              <h2 className="text-2xl font-bold text-amber-900">
                {selectedUser.firstName} {selectedUser.lastName}
              </h2>
              <span className="inline-block mt-1 px-3 py-0.5 bg-amber-200/70 text-amber-800 text-xs font-semibold rounded-full">
                Age: {selectedUser.age}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/70 p-4 rounded-xl border border-amber-100 shadow-xs">
              <span className="block text-xs font-semibold text-amber-700 uppercase tracking-wider mb-1">Email Address</span>
              <span className="text-gray-800 font-medium break-all">{selectedUser.email}</span>
            </div>

            <div className="bg-white/70 p-4 rounded-xl border border-amber-100 shadow-xs">
              <span className="block text-xs font-semibold text-amber-700 uppercase tracking-wider mb-1">Phone Number</span>
              <span className="text-gray-800 font-medium">{selectedUser.phone}</span>
            </div>

            <div className="bg-white/70 p-4 rounded-xl border border-amber-100 shadow-xs md:col-span-2">
              <span className="block text-xs font-semibold text-amber-700 uppercase tracking-wider mb-1">City Location</span>
              <span className="text-gray-800 font-medium">{selectedUser.address?.city}</span>
            </div>
          </div>

        </div>
      ) : users.length === 0 ? (
        <div className="flex justify-center items-center py-12">
          <p className="text-amber-700/70 font-medium animate-pulse">Loading users...</p>
        </div>
      ) : (
        <div className="text-center py-12 bg-amber-50/40 rounded-2xl border border-dashed border-amber-200">
          <p className="text-amber-800/70 font-medium">Please select a user from above to view details.</p>
        </div>
      )}

    </div>
  )
}

export default Users