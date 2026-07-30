import React from 'react';
import { Dumbbell, Calendar, Flame, History } from 'lucide-react';

export default function Navbar({ activeDay, setActiveDay, streak, onOpenHistory }) {
  const days = [
    { id: 'friday', label: 'Friday', sub: 'Legs & Core' },
    { id: 'saturday', label: 'Saturday', sub: 'Push Day' },
    { id: 'sunday', label: 'Sunday', sub: 'Pull Day' }
  ];

  return (
    <header className="navbar">
      <div className="nav-container">
        {/* Brand Logo & Name */}
        <div className="brand">
          <div className="brand-icon">
            <Dumbbell className="icon-pulse" size={26} color="#00E676" />
          </div>
          <div>
            <h1 className="brand-title">FitPulse <span className="brand-badge">PRO</span></h1>
            <p className="brand-subtitle">Personal Trainer Split</p>
          </div>
        </div>

        {/* Day Selectors */}
        <nav className="day-picker">
          {days.map((d) => {
            const isActive = activeDay === d.id;
            return (
              <button
                key={d.id}
                onClick={() => setActiveDay(d.id)}
                className={`day-btn ${isActive ? 'active' : ''} day-${d.id}`}
              >
                <Calendar size={15} />
                <div className="day-btn-text">
                  <span className="day-name">{d.label}</span>
                  <span className="day-focus">{d.sub}</span>
                </div>
              </button>
            );
          })}
        </nav>

        {/* User Stats & History */}
        <div className="nav-actions">
          <div className="streak-badge" title="30-min Cardio & Workout Completion Streak">
            <Flame size={18} className="flame-icon" />
            <span>{streak} Days Streak</span>
          </div>

          <button onClick={onOpenHistory} className="history-btn">
            <History size={18} />
            <span>Log History</span>
          </button>
        </div>
      </div>
    </header>
  );
}
