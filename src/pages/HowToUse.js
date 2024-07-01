import React from 'react';

const HowToUse = () => {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl font-bold mb-4">How to Use the Pomodoro Timer</h1>
      
      <h2 className="text-xl font-semibold mb-2">What is the Pomodoro Technique?</h2>
      <p className="mb-4">
        The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s.
        It uses a timer to break work into intervals, typically 25 minutes in length, separated by short breaks.
        These intervals are known as "Pomodoros". The technique aims to improve productivity by encouraging focused work periods
        followed by rest, helping to prevent burnout and maintain high levels of concentration.
      </p>
      
      <h2 className="text-xl font-semibold mb-2">Why is the Pomodoro Technique Useful?</h2>
      <ul className="list-disc list-inside space-y-2 mb-4">
        <li><strong>Improved Focus:</strong> By working in short, timed intervals, you can maintain high levels of concentration and avoid distractions.</li>
        <li><strong>Better Time Management:</strong> The Pomodoro Technique encourages you to plan your work around short, manageable bursts, making it easier to handle tasks efficiently.</li>
        <li><strong>Reduced Burnout:</strong> Regular breaks help to prevent burnout and keep your mind fresh, ensuring sustained productivity over longer periods.</li>
        <li><strong>Enhanced Motivation:</strong> The sense of accomplishment from completing each Pomodoro can boost motivation and help you stay on track.</li>
      </ul>
      
      <h2 className="text-xl font-semibold mb-2">How This Tool Fits into the Pomodoro Method</h2>
      <p className="mb-4">
        Our Pomodoro Timer tool is designed to help you implement the Pomodoro Technique seamlessly. Here’s how it works:
      </p>
      <ul className="list-disc list-inside space-y-2 mb-4">
        <li><strong>Preset Intervals:</strong> Choose from different preset intervals that align with traditional Pomodoro cycles or customize your own.</li>
        <li><strong>Custom Timers:</strong> Create custom work, short break, and long break intervals to suit your personal workflow and preferences.</li>
        <li><strong>Start, Pause, and Resume:</strong> Easily control your sessions with start, pause, and resume buttons to manage your work and break times effectively.</li>
        <li><strong>Progress Tracking:</strong> Visualize your progress with a circular progress bar that shows how much time is left in each interval.</li>
        <li><strong>Notifications:</strong> Receive audio and browser notifications to alert you when it’s time to take a break or get back to work, ensuring you stay on schedule.</li>
        <li><strong>Save Sessions:</strong> Optionally save your Pomodoro sessions to review your productivity history and analyze your work patterns.</li>
      </ul>
      
      <h2 className="text-xl font-semibold mb-2">Getting Started</h2>
      <p className="mb-4">
        To get started with the Pomodoro Timer tool, follow these steps:
      </p>
      <ol className="list-decimal list-inside space-y-2 mb-4">
        <li>Select a preset interval or create a custom timer by entering your desired work and break times.</li>
        <li>Click the <strong>Start</strong> button to begin your first Pomodoro session.</li>
        <li>Work on your task until the timer signals the end of the interval with a notification and sound.</li>
        <li>Take a short break when prompted. Use this time to relax and recharge.</li>
        <li>Repeat the process. After completing a set number of Pomodoros, take a longer break to rest more deeply.</li>
        <li>Optionally, save your session to track your productivity over time.</li>
      </ol>
      
      <h2 className="text-xl font-semibold mb-2">Advantages of Creating an Account</h2>
      <p className="mb-4">
        By creating an account, you can:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Save your custom Pomodoro settings for future use.</li>
        <li>Keep track of your past Pomodoro sessions and analyze your productivity.</li>
        <li>Access your settings and sessions from any device.</li>
      </ul>
    </div>
  );
};

export default HowToUse;
