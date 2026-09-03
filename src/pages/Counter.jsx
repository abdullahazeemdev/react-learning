import React, { useReducer } from "react";

const Counter = () => {

    const reducerfn = (state, action) => {

        switch (action.type) {

            case "increment":
                return { ...state, count: state.count + 1 };

            case "decrement":
                return { ...state, count: state.count - 1 };

            case "reset":
                return { ...state, count: 0 };

            default:
                return state;
        }
    };

    const initialVal = {
        count: 0
    };

    const [state, dispatch] = useReducer(reducerfn, initialVal);

    return (
        <div className="w-full h-full flex items-center justify-center">

            <div className="w-[420px] bg-white rounded-2xl shadow-xl border border-gray-200 p-8">

                <div className="text-center mb-8">

                    <h1 className="text-3xl font-bold text-gray-800">
                        Counter
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Manage your counter easily
                    </p>

                </div>

                <div className="bg-gray-100 rounded-2xl p-8 text-center mb-7">

                    <p className="text-gray-500 text-sm mb-3">
                        Current Count
                    </p>

                    <h2 className="text-6xl font-bold text-gray-800">
                        {state.count}
                    </h2>

                </div>

                <div className="flex items-center justify-center gap-4">

                    <button
                        onClick={() => dispatch({ type: "decrement" })}
                        className="w-14 h-14 rounded-xl bg-red-500 text-white text-2xl font-bold hover:bg-red-600 active:scale-95 transition"
                    >
                        −
                    </button>


                    <button
                        onClick={() => dispatch({ type: "reset" })}
                        className="px-7 h-14 rounded-xl bg-gray-800 text-white font-semibold hover:bg-gray-700 active:scale-95 transition"
                    >
                        Reset
                    </button>


                    <button
                        onClick={() => dispatch({ type: "increment" })}
                        className="w-14 h-14 rounded-xl bg-green-500 text-white text-2xl font-bold hover:bg-green-600 active:scale-95 transition"
                    >
                        +
                    </button>

                </div>

                <p className="text-center text-gray-400 text-sm mt-7">
                    Built with React useReducer
                </p>

            </div>

        </div>
    );
};

export default Counter;