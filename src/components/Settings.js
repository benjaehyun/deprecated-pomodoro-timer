import React, { useState } from 'react';

const Settings = ({ saveSettings }) => {
  const [workTime, setWorkTime] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);
  const [label, setLabel] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    saveSettings({ workTime, shortBreak, longBreak, label });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border border-gray-300 rounded-md shadow-md">
      <div>
        <label className="block text-sm font-medium text-gray-700">Work Time (minutes):</label>
        <input
          type="number"
          value={workTime}
          onChange={(e) => setWorkTime(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Short Break (minutes):</label>
        <input
          type="number"
          value={shortBreak}
          onChange={(e) => setShortBreak(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Long Break (minutes):</label>
        <input
          type="number"
          value={longBreak}
          onChange={(e) => setLongBreak(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Label:</label>
        <input
          type="text"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <button type="submit" className="btn">Save Settings</button>
    </form>
  );
};

export default Settings;
