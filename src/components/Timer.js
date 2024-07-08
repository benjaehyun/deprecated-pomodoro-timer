import React, { useState, useEffect, useRef } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Timer = ({ settings }) => {
  const [time, setTime] = useState(settings.workTime * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [cycle, setCycle] = useState('work');
  const [volume, setVolume] = useState(localStorage.getItem('volume') || 0.5);
  const [audioOption, setAudioOption] = useState(localStorage.getItem('audioOption') || '/water-droplet.mp3');
  const audioRef = useRef(null);

  useEffect(() => {
    setTime(settings.workTime * 60);
    setIsRunning(false);
    setIsPaused(false);
    setCycle('work');
  }, [settings]);

  useEffect(() => {
    let interval;
    if (isRunning && !isPaused) {
      interval = setInterval(() => {
        setTime(prevTime => {
          if (prevTime === 1) {
            handleCycleEnd();
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, isPaused]);

  useEffect(() => {
    audioRef.current.volume = volume;
    localStorage.setItem('volume', volume);
  }, [volume]);

  useEffect(() => {
    localStorage.setItem('audioOption', audioOption);
  }, [audioOption]);

  const handleCycleEnd = () => {
    audioRef.current.play();
    if (Notification.permission === "granted") {
      new Notification(`${cycle === 'work' ? 'Work' : 'Break'} time is over!`);
    }

    if (cycle === 'work') {
      setCycle('shortBreak');
      setTime(settings.shortBreak * 60);
    } else if (cycle === 'shortBreak') {
      setCycle('longBreak');
      setTime(settings.longBreak * 60);
    } else {
      setCycle('work');
      setTime(settings.workTime * 60);
    }
  };

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsPaused(!isPaused);
  const handleReset = () => {
    setIsRunning(false);
    setIsPaused(false);
    setCycle('work');
    setTime(settings.workTime * 60);
  };

  const handleVolumeChange = (e) => setVolume(e.target.value);
  const handleAudioOptionChange = (e) => setAudioOption(e.target.value);

  const totalTime = cycle === 'work' ? settings.workTime * 60 : cycle === 'shortBreak' ? settings.shortBreak * 60 : settings.longBreak * 60;
  const percentage = 100 - (time / totalTime) * 100;

  const messages = {
    work: "Let's get to work!",
    shortBreak: "Short break, take a breather!",
    longBreak: "Long break, stretch your legs!",
  };

  const progressStyles = buildStyles({
    textColor: '#000',
    pathColor: cycle === 'work' ? '#2196f3' : '#4caf50',
    trailColor: '#d6d6d6',
    rotation: 0.25,
  });

  return (
    <div className={`flex flex-col items-center justify-center space-y-4 p-4 border rounded-md shadow-md`} style={{ backgroundColor: cycle === 'work' ? '#e8f5e9' : '#e3f2fd' }}>
      <audio ref={audioRef} src={audioOption} preload="auto" />
      <h2 className="text-xl font-bold">{messages[cycle]}</h2>
      <div className="w-64 h-64">
        <CircularProgressbar
          value={percentage}
          text={`${Math.floor(time / 60)}:${('0' + time % 60).slice(-2)}`}
          styles={progressStyles}
        />
      </div>
      <div className="flex space-x-4">
        {!isRunning && !isPaused && (
          <button onClick={handleStart} className="btn bg-blue-500 hover:bg-blue-700 text-white">Start</button>
        )}
        {isRunning && !isPaused && (
          <button onClick={handlePause} className="btn bg-red-500 hover:bg-red-700 text-white">Pause</button>
        )}
        {isPaused && (
          <button onClick={handlePause} className="btn bg-blue-500 hover:bg-blue-700 text-white">Resume</button>
        )}
        {(isRunning || isPaused) && (
          <button onClick={handleReset} className="btn">Reset</button>
        )}
      </div>
      <div className="flex items-center space-x-2">
        <label className="text-sm">Volume:</label>
        <input type="range" min="0" max="1" step="0.1" value={volume} onChange={handleVolumeChange} className="slider" />
        <button onClick={() => audioRef.current.play()} className="btn">Test</button>
      </div>
      <div className="flex flex-col space-y-2">
        <label className="text-sm">Select Sound:</label>
        <select value={audioOption} onChange={handleAudioOptionChange} className="p-2 border rounded-md">
          <option value="/water-droplet.mp3">Water Droplet</option>
          <option value="/chirp.mp3">Chirp</option>
          <option value="/bell.mp3">Bell</option>
          <option value="/ring-1.mp3">Ring 1</option>
          <option value="/ring-2.mp3">Ring 2</option>
          <option value="/buzz.mp3">Buzz</option>
        </select>
      </div>
    </div>
  );
};

export default Timer;
