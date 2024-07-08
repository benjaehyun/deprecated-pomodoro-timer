import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Settings = ({ applySettings, saveSettings, currentSettings }) => {
  const { user } = useContext(AuthContext);
  const [workTime, setWorkTime] = useState(currentSettings.workTime);
  const [shortBreak, setShortBreak] = useState(currentSettings.shortBreak);
  const [longBreak, setLongBreak] = useState(currentSettings.longBreak);
  const [label, setLabel] = useState(currentSettings.label || '');

  useEffect(() => {
    setWorkTime(currentSettings.workTime);
    setShortBreak(currentSettings.shortBreak);
    setLongBreak(currentSettings.longBreak);
    setLabel(currentSettings.label || '');
  }, [currentSettings]);

  const handleApply = (e) => {
    e.preventDefault();
    applySettings({ workTime, shortBreak, longBreak });
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (user) {
      saveSettings({ workTime, shortBreak, longBreak, label });
    }
  };

  return (
    <form className="space-y-4 p-4 border border-gray-300 rounded-md shadow-md">
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
      {user && (
        <div>
          <label className="block text-sm font-medium text-gray-700">Label:</label>
          <input
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      )}
      <button onClick={handleApply} className="btn">Apply</button>
      {user && <button onClick={handleSave} className="btn ml-4">Save to Profile</button>}
    </form>
  );
};

export default Settings;
