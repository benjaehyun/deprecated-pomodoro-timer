import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './components/Auth';
import Navbar from './components/Navbar';
import HowToUse from './pages/HowToUse';
import Home from './pages/Home';
import HistoryPage from './pages/History';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  useEffect(() => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  }, []);

  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-to-use" element={<HowToUse />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/history" element={<ProtectedRoute component={HistoryPage} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
