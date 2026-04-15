import { useState } from 'react';

function LogoutPageNoMenu() {
    const [message, setMessage] = useState('');

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setMessage('Logged out successfully!');
        setTimeout(() => {
            window.location.href = '/login';
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Logout</h2>
                <p className="text-center mb-6">Are you sure you want to logout?</p>
                <button 
                    onClick={handleLogout}
                    className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600"
                >
                    Logout
                </button>
                {message && <p className="mt-4 text-center text-green-500">{message}</p>}
                <p className="mt-4 text-center">
                    <a href="/" className="text-blue-500">Go back to Home</a>
                </p>
            </div>
        </div>
    );
}

export default LogoutPageNoMenu;
