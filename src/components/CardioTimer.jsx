import React, { useState, useEffect } from 'react';
import { Timer, Play, Pause, RotateCcw, Flame, HeartPulse, Activity, CheckCircle } from 'lucide-react';
import { CARDIO_PRESETS } from '../data/workoutData';

export default function CardioTimer({ dayName, onCompleteCardio, isCardioCompleted }) {
  const DEFAULT_SECONDS = 30 * 60; // 30 minutes = 1800s
  const [secondsLeft, setSecondsLeft] = useState(DEFAULT_SECONDS);
  const [isActive, setIsActive] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState(CARDIO_PRESETS[0]);
  const [caloriesBurned, setCaloriesBurned] = useState(0);

  // Timer countdown effect
  useEffect(() => {
    let interval = null;
    if (isActive && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => {
          const nextVal = prev - 1;
          // Calculate live estimated burn
          const elapsedTime = DEFAULT_SECONDS - nextVal;
          const estBurn = Math.round((elapsedTime / DEFAULT_SECONDS) * selectedPreset.estCaloriesPer30);
          setCaloriesBurned(estBurn);
          return nextVal;
        });
      }, 1000);
    } else if (secondsLeft === 0 && isActive) {
      setIsActive(false);
      onCompleteCardio({
        type: selectedPreset.name,
        duration: 30,
        calories: selectedPreset.estCaloriesPer30,
        timestamp: new Date().toISOString()
      });
    }
    return () => clearInterval(interval);
  }, [isActive, secondsLeft, selectedPreset, DEFAULT_SECONDS, onCompleteCardio]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSecondsLeft(DEFAULT_SECONDS);
    setCaloriesBurned(0);
  };

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainder.toString().padStart(2, '0')}`;
  };

  // Progress percentage
  const progressPercent = Math.min(100, Math.round(((DEFAULT_SECONDS - secondsLeft) / DEFAULT_SECONDS) * 100));

  return (
    <div className="cardio-container">
      <div className="cardio-header">
        <div className="cardio-title">
          <Flame size={24} color="#FF3D00" className="flame-pulse" />
          <div>
            <h3>Mandatory 30-Min Cardio Module</h3>
            <p className="cardio-sub">Daily target for {dayName}: 30 Minutes Continuous Cardio</p>
          </div>
        </div>
        {isCardioCompleted && (
          <div className="cardio-completed-badge">
            <CheckCircle size={18} color="#00E676" />
            <span>30 Min Completed!</span>
          </div>
        )}
      </div>

      {/* Preset Selector */}
      <div className="cardio-presets">
        <span className="preset-label">Choose Equipment / Style:</span>
        <div className="preset-chips">
          {CARDIO_PRESETS.map((preset) => (
            <button
              key={preset.id}
              onClick={() => {
                setSelectedPreset(preset);
                resetTimer();
              }}
              className={`preset-chip ${selectedPreset.id === preset.id ? 'active' : ''}`}
            >
              <span>{preset.name}</span>
              <span className="chip-cal">~{preset.estCaloriesPer30} kcal</span>
            </button>
          ))}
        </div>
      </div>

      {/* Timer Circle Display */}
      <div className="timer-display-card">
        <div className="timer-ring-container">
          <svg className="timer-ring-svg" viewBox="0 0 200 200">
            <circle className="timer-ring-bg" cx="100" cy="100" r="85" />
            <circle
              className="timer-ring-progress"
              cx="100"
              cy="100"
              r="85"
              style={{
                strokeDasharray: 534,
                strokeDashoffset: 534 - (534 * progressPercent) / 100
              }}
            />
          </svg>

          <div className="timer-center-content">
            <span className="timer-time">{formatTime(secondsLeft)}</span>
            <span className="timer-status">
              {isActive ? 'TRAINING IN PROGRESS' : secondsLeft === 0 ? 'GOAL ACHIEVED!' : 'READY TO START'}
            </span>
          </div>
        </div>

        {/* Live Metrics */}
        <div className="timer-stats-grid">
          <div className="stat-box">
            <Flame size={20} color="#FF3D00" />
            <span className="stat-val">{caloriesBurned}</span>
            <span className="stat-lbl">Calories Burned</span>
          </div>
          <div className="stat-box">
            <HeartPulse size={20} color="#00E676" />
            <span className="stat-val">130-150</span>
            <span className="stat-lbl">Target HR (BPM)</span>
          </div>
          <div className="stat-box">
            <Activity size={20} color="#00B0FF" />
            <span className="stat-val">{selectedPreset.speed}</span>
            <span className="stat-lbl">Pace / Level</span>
          </div>
        </div>

        {/* Timer Control Buttons */}
        <div className="timer-actions">
          <button onClick={toggleTimer} className={`btn-primary-action ${isActive ? 'pause' : 'start'}`}>
            {isActive ? <Pause size={20} /> : <Play size={20} />}
            <span>{isActive ? 'PAUSE CARDIO' : 'START 30-MIN TIMER'}</span>
          </button>

          <button onClick={resetTimer} className="btn-secondary-action">
            <RotateCcw size={18} />
            <span>RESET</span>
          </button>

          {!isCardioCompleted && (
            <button
              onClick={() =>
                onCompleteCardio({
                  type: selectedPreset.name,
                  duration: 30,
                  calories: selectedPreset.estCaloriesPer30,
                  timestamp: new Date().toISOString()
                })
              }
              className="btn-mark-done"
            >
              <CheckCircle size={18} />
              <span>MARK 30 MIN AS DONE</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
