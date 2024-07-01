import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get(`${config.API_URL}/auth/me`, { headers: { Authorization: `Bearer ${token}` } })
        .then(response => {
          setUser(response.data);
        })
        .catch(error => {
          console.error(error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    const response = await axios.post(`${config.API_URL}/auth/login`, { email, password });
    localStorage.setItem('token', response.data.token);
    setUser(response.data.user); // Ensure the user is set here
  };

  const register = async (name, email, password) => {
    const response = await axios.post(`${config.API_URL}/auth/register`, { name, email, password });
    localStorage.setItem('token', response.data.token);
    setUser(response.data.user); // Ensure the user is set here
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
