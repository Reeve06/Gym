import React from 'react';
import { Dumbbell, Calendar, Flame, History, Plus, Target, Clock } from 'lucide-react';

export default function Navbar({ activeDay, setActiveDay, streak, onOpenHistory, onOpenAddModal }) {
  const days = [
    { id: 'friday', label: 'Friday', sub: 'Legs & Core' },
    { id: 'saturday', label: 'Saturday', sub: 'Push Day' },
    { id: 'sunday', label: 'Sunday', sub: 'Pull Day' }
  ];

  return (
    <>
      {/* Top Main Navbar */}
      <header className="navbar">
        <div className="nav-container">
          {/* Brand Logo & Title */}
          <div className="brand">
            <div className="brand-icon">
              <Dumbbell className="icon-pulse" size={24} color="#00E676" />
            </div>
            <div>
              <h1 className="brand-title">FitPulse <span className="brand-badge">PRO</span></h1>
              <p className="brand-subtitle">Personal Trainer Split</p>
            </div>
          </div>

          {/* Desktop Day Selectors */}
          <nav className="day-picker desktop-only">
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

          {/* Top Actions */}
          <div className="nav-actions">
            <button onClick={onOpenAddModal} className="add-ex-nav-btn" title="Add Custom Exercise">
              <Plus size={18} />
              <span className="desktop-only">Add Exercise</span>
            </button>

            <div className="streak-badge" title="Cardio & Workout Streak">
              <Flame size={18} className="flame-icon" />
              <span>{streak}d</span>
            </div>

            <button onClick={onOpenHistory} className="history-btn desktop-only">
              <History size={18} />
              <span>History</span>
            </button>
          </div>
        </div>

        {/* Mobile Day Selector Bar */}
        <div className="mobile-day-bar mobile-only">
          {days.map((d) => {
            const isActive = activeDay === d.id;
            return (
              <button
                key={d.id}
                onClick={() => setActiveDay(d.id)}
                className={`mobile-day-chip ${isActive ? 'active' : ''} chip-${d.id}`}
              >
                <span className="m-day">{d.label}</span>
                <span className="m-sub">{d.sub}</span>
              </button>
            );
          })}
        </div>
      </header>

      {/* Floating Mobile Bottom Navigation Dock */}
      <div className="mobile-bottom-dock mobile-only">
        <button onClick={() => setActiveDay('friday')} className={`dock-btn ${activeDay === 'friday' ? 'active' : ''}`}>
          <Dumbbell size={20} />
          <span>Fri (Legs)</span>
        </button>

        <button onClick={() => setActiveDay('saturday')} className={`dock-btn ${activeDay === 'saturday' ? 'active' : ''}`}>
          <Dumbbell size={20} />
          <span>Sat (Push)</span>
        </button>

        <button onClick={() => setActiveDay('sunday')} className={`dock-btn ${activeDay === 'sunday' ? 'active' : ''}`}>
          <Dumbbell size={20} />
          <span>Sun (Pull)</span>
        </button>

        <button onClick={onOpenAddModal} className="dock-btn add-dock">
          <div className="dock-add-icon">
            <Plus size={20} color="#000" />
          </div>
          <span>Add Ex</span>
        </button>

        <button onClick={onOpenHistory} className="dock-btn">
          <History size={20} />
          <span>Log</span>
        </button>
      </div>
    </>
  );
}
