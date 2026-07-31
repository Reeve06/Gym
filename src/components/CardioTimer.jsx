import React, { useState, useEffect } from 'react';
import { Timer, Play, Pause, RotateCcw, Flame, HeartPulse, Activity, CheckCircle, Sparkles } from 'lucide-react';
import { CARDIO_PRESETS } from '../data/workoutData';

export default function CardioTimer({ dayName, onCompleteCardio, isCardioCompleted }) {
  const FULL_30_MIN_SECONDS = 30 * 60; // 1800 seconds
  const [targetDurationSeconds, setTargetDurationSeconds] = useState(FULL_30_MIN_SECONDS);
  const [secondsLeft, setSecondsLeft] = useState(FULL_30_MIN_SECONDS);
  const [isActive, setIsActive] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState(CARDIO_PRESETS[0]);
  const [caloriesBurned, setCaloriesBurned] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);

  // Timer effect
  useEffect(() => {
    let interval = null;
    if (isActive && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            setIsActive(false);
            handleFinishCardio();
            return 0;
          }
          const nextVal = prev - 1;
          const elapsedTime = targetDurationSeconds - nextVal;
          const estBurn = Math.round((elapsedTime / targetDurationSeconds) * selectedPreset.estCaloriesPer30);
          setCaloriesBurned(estBurn);
          return nextVal;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, secondsLeft, targetDurationSeconds, selectedPreset]);

  // Complete Cardio Handler
  const handleFinishCardio = () => {
    setShowCelebration(true);
    onCompleteCardio({
      type: selectedPreset.name,
      duration: 30,
      calories: selectedPreset.estCaloriesPer30,
      timestamp: new Date().toISOString()
    });
  };

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSecondsLeft(targetDurationSeconds);
    setCaloriesBurned(0);
    setShowCelebration(false);
  };

  const setTestMode = (seconds) => {
    setIsActive(false);
    setTargetDurationSeconds(seconds);
    setSecondsLeft(seconds);
    setCaloriesBurned(0);
    setShowCelebration(false);
  };

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainder.toString().padStart(2, '0')}`;
  };

  // Progress percentage (SVG dashoffset)
  const progressPercent = Math.min(100, Math.round(((targetDurationSeconds - secondsLeft) / targetDurationSeconds) * 100));
  const strokeDashoffset = 534 - (534 * progressPercent) / 100;

  return (
    <div className="cardio-container">
      {/* Top Header */}
      <div className="cardio-header">
        <div className="cardio-title">
          <div className="cardio-icon-badge">
            <Flame size={24} color="#FF3D00" className="flame-pulse" />
          </div>
          <div>
            <h3>30-Min Cardio Module</h3>
            <p className="cardio-sub">Mandatory Daily Session for {dayName}</p>
          </div>
        </div>

        {(isCardioCompleted || showCelebration) ? (
          <div className="cardio-completed-badge glow-green">
            <CheckCircle size={18} color="#00E676" />
            <span>30 MIN COMPLETED!</span>
          </div>
        ) : (
          <div className="cardio-pending-badge">
            <Sparkles size={16} color="#FF3D00" />
            <span>30 MIN REQUIRED</span>
          </div>
        )}
      </div>

      {/* Equipment Selector */}
      <div className="cardio-presets">
        <span className="preset-label">Select Equipment / Exercise:</span>
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
              <span className="chip-title">{preset.name}</span>
              <span className="chip-cal">~{preset.estCaloriesPer30} kcal</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Timer Visual Circle */}
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
                strokeDashoffset: strokeDashoffset
              }}
            />
          </svg>

          <div className="timer-center-content">
            <span className="timer-time">{formatTime(secondsLeft)}</span>
            <span className="timer-status">
              {isActive ? 'CARDIO SESSION RUNNING' : secondsLeft === 0 ? 'GOAL ACHIEVED!' : 'READY TO START'}
            </span>
          </div>
        </div>

        {/* Live Metrics Grid */}
        <div className="timer-stats-grid">
          <div className="stat-box">
            <Flame size={20} color="#FF3D00" />
            <span className="stat-val">{caloriesBurned}</span>
            <span className="stat-lbl">Calories Burned</span>
          </div>

          <div className="stat-box">
            <HeartPulse size={20} color="#00E676" />
            <span className="stat-val">130 - 150</span>
            <span className="stat-lbl">Target HR (BPM)</span>
          </div>

          <div className="stat-box">
            <Activity size={20} color="#00B0FF" />
            <span className="stat-val">{selectedPreset.speed}</span>
            <span className="stat-lbl">Target Pace</span>
          </div>
        </div>

        {/* Primary Controls */}
        <div className="timer-actions">
          <button onClick={toggleTimer} className={`btn-primary-action ${isActive ? 'pause' : 'start'}`}>
            {isActive ? <Pause size={20} /> : <Play size={20} />}
            <span>{isActive ? 'PAUSE TIMER' : 'START 30-MIN TIMER'}</span>
          </button>

          <button onClick={resetTimer} className="btn-secondary-action">
            <RotateCcw size={18} />
            <span>RESET</span>
          </button>

          <button onClick={handleFinishCardio} className="btn-mark-done">
            <CheckCircle size={18} />
            <span>MARK 30 MIN AS DONE</span>
          </button>
        </div>

        {/* Quick Test Timer Toggle (For fast testing) */}
        <div className="quick-test-row">
          <span className="test-label">Timer Mode:</span>
          <button
            onClick={() => setTestMode(30 * 60)}
            className={`test-btn ${targetDurationSeconds === 1800 ? 'active' : ''}`}
          >
            Full 30 Mins
          </button>
          <button
            onClick={() => setTestMode(30)}
            className={`test-btn ${targetDurationSeconds === 30 ? 'active' : ''}`}
          >
            30 Sec Quick Test
          </button>
        </div>
      </div>
    </div>
  );
}
