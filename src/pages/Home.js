import React, { useState, useEffect } from 'react';
import Timer from '../components/Timer';
import Settings from '../components/Settings';

const defaultPresets = [
  { label: 'Pomodoro', workTime: 25, shortBreak: 5, longBreak: 15 },
  { label: 'Short Work', workTime: 15, shortBreak: 3, longBreak: 10 },
  { label: 'Long Work', workTime: 50, shortBreak: 10, longBreak: 30 },
];

const Home = () => {
  const [settings, setSettings] = useState(defaultPresets[0]);
  const [selectedPreset, setSelectedPreset] = useState('Pomodoro');

  useEffect(() => {
    const preset = defaultPresets.find(p => p.label === selectedPreset);
    setSettings(preset);
  }, [selectedPreset]);

  const saveSettings = (newSettings) => {
    setSettings(newSettings);
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="mb-8">
        <select
          value={selectedPreset}
          onChange={(e) => setSelectedPreset(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded-md shadow-sm"
        >
          {defaultPresets.map(preset => (
            <option key={preset.label} value={preset.label}>{preset.label}</option>
          ))}
        </select>
        <Timer settings={settings} />
      </div>
      <div className="mb-8">
        <Settings saveSettings={saveSettings} />
      </div>
    </div>
  );
};

export default Home;
