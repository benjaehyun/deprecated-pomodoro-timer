import React from 'react';

const History = ({ sessions }) => {
  return (
    <div className="space-y-4 p-4 border border-gray-300 rounded-md shadow-md">
      <h2 className="text-2xl font-bold">Session History</h2>
      <ul className="space-y-2">
        {sessions.map((session, index) => (
          <li key={index} className="p-4 border border-gray-300 rounded-md">
            <div className="font-semibold">{session.label}</div>
            <div>Work Time: {session.workTime} mins</div>
            <div>Short Break: {session.shortBreak} mins</div>
            <div>Long Break: {session.longBreak} mins</div>
            <div>Pauses: {session.pauses.length}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
