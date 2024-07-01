import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log('User:', user); // Debugging to check user context
  }, [user]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white text-2xl font-bold">Pomodoro Timer</Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="text-white hover:text-blue-200">Home</Link>
            <Link to="/how-to-use" className="text-white hover:text-blue-200">How to Use</Link>
            <Link to="/history" className="text-white hover:text-blue-200">History</Link>
            {user ? (
              <button onClick={logout} className="text-white hover:text-blue-200">Logout</button>
            ) : (
              <Link to="/auth" className="text-white hover:text-blue-200">Login/Register</Link>
            )}
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link to="/" className="block px-4 py-2 text-white hover:bg-blue-700" onClick={toggleMenu}>Home</Link>
          <Link to="/how-to-use" className="block px-4 py-2 text-white hover:bg-blue-700" onClick={toggleMenu}>How to Use</Link>
          <Link to="/history" className="block px-4 py-2 text-white hover:bg-blue-700" onClick={toggleMenu}>History</Link>
          {user ? (
            <button onClick={() => { toggleMenu(); logout(); }} className="block px-4 py-2 text-white hover:bg-blue-700">Logout</button>
          ) : (
            <Link to="/auth" className="block px-4 py-2 text-white hover:bg-blue-700" onClick={toggleMenu}>Login/Register</Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
