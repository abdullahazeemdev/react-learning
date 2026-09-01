// import { useState } from 'react';
// import './App.css'

// function Card() {
//   const [count, setCount] = useState(0)
//   return (
//     <div className="bg-white p-8 rounded-2xl shadow-xl max-w-sm text-center">
//       <h2 className="text-xl font-bold text-gray-800 mb-2">
//         React State Isolator
//       </h2>
//       <p className="text-gray-600 text-sm">
//         Stop making all your cards click at once! This reusable component uses local hooks to isolate state, giving you independent control per element
//       </p>
//       <button
//         className='mt-4 border rounded-full px-5 py-2.5 bg-blue-600 text-white font-medium cursor-pointer hover:bg-blue-700 transition-all'
//         onClick={() => setCount(count + 1)}
//       >
//         Click Me! {count}
//       </button>
//     </div>
//   )
// }

// function App() {
//   return (
//     // Teeno cards ko line mein dikhane ke liye flex aur gap yahan lagaya ha
//     <div className="bg-gray-100 min-h-screen flex flex-wrap justify-center items-center gap-10 p-6">
//       <Card />
//       <Card />
//       <Card />
//     </div>
//   );
// }

// export default App;


import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import User from './pages/User'
import Profile from './pages/Profile'
import Settings from './pages/Settings'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          < Route path='user' element={<User />} />
          < Route path='profile' element={<Profile />} />
          < Route path='settings' element={<Settings />} />
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
