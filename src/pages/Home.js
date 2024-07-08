import React, { useState, useEffect, useContext } from 'react';
import Timer from '../components/Timer';
import Settings from '../components/Settings';
import SettingSaveModal from '../components/SettingSaveModal';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import config from '../config';

const defaultSettings = [
  { label: 'Pomodoro', workTime: 25, shortBreak: 5, longBreak: 15 },
  { label: 'Short Work', workTime: 15, shortBreak: 3, longBreak: 10 },
  { label: 'Long Work', workTime: 50, shortBreak: 10, longBreak: 30 },
];

const Home = () => {
  const { user } = useContext(AuthContext);
  const [selectedSetting, setSelectedSetting] = useState('Pomodoro');
  const [allSettings, setAllSettings] = useState(defaultSettings);
  const [customSetting, setCustomSetting] = useState(null);
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    const fetchUserSettings = async () => {
      if (user) {
        try {
          const token = localStorage.getItem('token');
          const response = await axios.get(`${config.API_URL}/settings`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          const userSettings = response.data.map(setting => ({
            label: setting.label,
            workTime: setting.workTime,
            shortBreak: setting.shortBreak,
            longBreak: setting.longBreak,
          }));
          setAllSettings([...defaultSettings, ...userSettings]);
        } catch (error) {
          console.error('Error fetching user settings:', error);
        }
      } else {
        setAllSettings(defaultSettings);
      }
    };

    fetchUserSettings();
  }, [user]);

  const applySettings = (newSettings) => {
    setCustomSetting({ ...newSettings, label: 'Custom' });
    setSelectedSetting('Custom');
  };

  const saveSettings = async (newSettings) => {
    if (user) {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.post(`${config.API_URL}/settings/save`, newSettings, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const updatedSettings = [
          ...allSettings,
          { label: newSettings.label, workTime: newSettings.workTime, shortBreak: newSettings.shortBreak, longBreak: newSettings.longBreak },
        ];
        setAllSettings(updatedSettings);
        setCustomSetting(null);
        setSelectedSetting(newSettings.label);
        setModalMessage('Settings saved successfully!');
      } catch (error) {
        setModalMessage('Error saving settings.');
        console.error('Error saving user settings:', error);
      }
    }
  };

  const getCurrentSettings = () => {
    if (selectedSetting === 'Custom' && customSetting) {
      return customSetting;
    }
    return allSettings.find(setting => setting.label === selectedSetting);
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="mb-8">
        <select
          value={selectedSetting}
          onChange={(e) => setSelectedSetting(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded-md shadow-sm"
        >
          {allSettings.map(setting => (
            <option key={setting.label} value={setting.label}>{setting.label}</option>
          ))}
          {customSetting && <option value="Custom">Custom</option>}
        </select>
        <Timer settings={getCurrentSettings()} />
      </div>
      <div className="mb-8">
        <Settings applySettings={applySettings} saveSettings={saveSettings} currentSettings={getCurrentSettings()} />
      </div>
      {modalMessage && (
        <SettingSaveModal message={modalMessage} onClose={() => setModalMessage('')} />
      )}
    </div>
  );
};

export default Home;
