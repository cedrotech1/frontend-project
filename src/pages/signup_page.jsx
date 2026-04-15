import axios from "axios";
import { useState } from 'react';

function SignupPage() {
    const [names, setNames] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:4000/signup", { names, email, password });
            
            // Check if user already exists
            if (response.data.message === 'User already exists') {
                setMessage('User already exists! Please use a different email.');
            } else if (response.data.message === 'User registered successfully') {
                setMessage('Signup successful! Please login.');
                setTimeout(() => {
                    window.location.href = '/login';
                }, 2000);
            } else {
                setMessage(response.data.error || 'Signup failed');
            }
            
        } catch (error) {
            setMessage(error.response?.data?.error || 'Signup failed');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
                <form onSubmit={handleSignup}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Full Name:</label>
                        <input
                            type="text"
                            value={names}
                            onChange={(e) => setNames(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
                        Sign Up
                    </button>
                </form>
                {message && <p className="mt-4 text-center text-green-500">{message}</p>}
                <p className="mt-4 text-center">
                    Already have an account? <a href="/login" className="text-blue-500">Login</a>
                </p>
            </div>
        </div>
    );
}

export default SignupPage;
