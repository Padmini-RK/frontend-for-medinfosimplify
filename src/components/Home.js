import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="text-center mt-10">
                <h1 className="text-2xl font-bold">Welcome to Our Application</h1>
                <p className="mt-3">Get started by choosing an option below:</p>
                <div className="mt-5">
                     <Link to="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l mr-2">Login</Link>
                     <Link to="/register" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r">Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;