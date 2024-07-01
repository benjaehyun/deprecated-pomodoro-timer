import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import config from '../config';
import { AuthContext } from '../context/AuthContext';

const HistoryPage = () => {
  const { user } = useContext(AuthContext);
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const fetchSessions = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${config.API_URL}/sessions`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSessions(response.data);
    };

    if (user) {
      fetchSessions();
    }
  }, [user]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Session History</h1>
      {sessions.length > 0 ? (
        <ul>
          {sessions.map(session => (
            <li key={session._id} className="mb-2 p-2 border rounded">
              Work: {session.workTime} minutes, Short Break: {session.shortBreak} minutes, Long Break: {session.longBreak} minutes
            </li>
          ))}
        </ul>
      ) : (
        <p>No sessions found.</p>
      )}
    </div>
  );
};

export default HistoryPage;
