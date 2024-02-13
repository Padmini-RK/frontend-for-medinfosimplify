import { useState, useEffect} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, clearAuthError } from '../store/authSlice';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        // This function is called when the component unmounts
        return () => {
            dispatch(clearAuthError());
        };
    }, [dispatch]);

    // Access the loading state
    const { status, error } = useSelector((state) => state.auth);
    const isLoading = status === 'loading';

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({ email, password }))
          .unwrap()
          .then(() => navigate('/dashboard'))
          .catch((error) => {
              // Handle error here if needed
          });
    };

    return (
        <div className="max-w-md mx-auto p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Input fields */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        disabled={isLoading}
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        disabled={isLoading}
                    />
                </div>
                {error && <div className="text-red-500 text-sm text-center">{error}</div>}
                <button
                    type="submit"
                    className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium ${isLoading ? 'bg-gray-500' : 'bg-base-dark-blue hover:bg-bg-lighter-shade'} text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base-dark-blue`}
                    disabled={isLoading}
                >
                    {isLoading ? 'Logging in...' : 'Login'}
                </button>
                <p className="mt-4 text-center text-sm text-gray-600">
                    Don't have an account?{' '}
                    <Link to="/register" className="font-medium text-lighter-shade hover:text-pale-shade">
                        Create now
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
