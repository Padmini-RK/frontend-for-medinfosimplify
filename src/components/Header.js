import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/authSlice'; // ensure this is correctly imported

const Header = () => {
  const [showPopover, setShowPopover] = useState(false);
  const popoverRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, userName, email } = useSelector((state) => ({
    isAuthenticated: state.auth.token,
    userName: state.auth.user,
    email: state.auth.email
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    // Event listener to close popover when clicked outside
    function handleClickOutside(event) {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setShowPopover(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action
    setShowPopover(false); // Close popover
    navigate('/'); //Redirect to homepage
  };

  return (
    <header className="bg-base-dark-blue text-white p-5 relative">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-white no-underline">
          MedInfoSimplify
        </Link>
        {isAuthenticated && (
          <div className="relative">
            <button onClick={() => setShowPopover(!showPopover)} className="flex items-center focus:outline-none hover:underline ">
              <span>{userName}</span>
              {/* Icon for dropdown */}
              <svg className="fill-current h-4 w-4 ml-2" viewBox="0 0 20 20">
                {/* Replace with your dropdown icon */}
              </svg>
            </button>
            {showPopover && (
              <div ref={popoverRef} className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg z-20">
                <div className="px-4 py-2 text-sm text-lighter-shade">
                  <div className="font-bold">{userName || 'Profile'}</div>
                  <div>{email || 'email'}</div>
                </div>
                <div className="border-t border-lighter-shade"></div>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-lighter-shade hover:bg-very-pale-shade"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
        {!isAuthenticated && location.pathname !== '/login' && (
          <Link to="/login" className="text-white no-underline hover:underline">
            Login
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
