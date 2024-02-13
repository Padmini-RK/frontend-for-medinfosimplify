import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { register } from '../apis/auth';

const Register = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if( password !== confirmPassword ){
            setError("Entered passwords do not match");
            return;
        }
        try {
            await register(userName, email, password);
            navigate('/login');

        }catch(error){
            setError(error.message || 'We are sorry an error occured. Try again!');
        }

    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 rounded-md shadow-md bg-white">
          <h2 className="text-lg font-semibold mb-5 text-center">Register</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
          <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 leading-tight focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 leading-tight focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 leading-tight focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 leading-tight focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {error && <div className="text-red-500 text-sm text-center">{error}</div>}
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-base-dark-blue hover:bg-lighter-shade focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base-dark-blue">
              Create an account now
            </button>
            <p className="mt-4 text-center text-sm text-gray-600">
              Already have an account? {' '}
              <Link to="/login" className="font-medium text-lighter-shade hover:text-pale-shade">
                Login now
              </Link>
            </p>
          </form>
        </div>
      );
};

export default Register;