import React from 'react';

const App = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="p-8 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-blue-600 mb-4">Hello from React!</h1>
                <p className="text-gray-700">
                    If you can see this, React is successfully configured in your Laravel project.
                </p>
                <button 
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                    onClick={() => alert('Interactivity working!')}
                >
                    Test Interaction
                </button>
            </div>
        </div>
    );
};

export default App;
