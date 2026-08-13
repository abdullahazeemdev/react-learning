import { useState } from 'react';
import './App.css'

function Card() {
    const [count, setCount] = useState(0)
    return (
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-sm text-center">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
                Shadow Wala Card
            </h2>
            <p className="text-gray-600">
                Is box ke neeche aapko ek khubsurat aur naram box-shadow nazar aayega.
            </p>
            <button 
                className='mt-3 border rounded-full px-4 py-3 cursor-pointer hover:bg-gray-50' 
                onClick={() => setCount(count + 1)}
            >
                Click Me! {count}
            </button>
        </div>
    )
}

function App() {
  return (
    // Teeno cards ko line mein dikhane ke liye flex aur gap yahan lagaya ha
    <div className="bg-gray-100 min-h-screen flex flex-wrap justify-center items-center gap-10 p-6">
      <Card /> 
      <Card />
      <Card />
    </div>
  );
}

export default App;
