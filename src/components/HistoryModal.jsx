import React from 'react';
import { X, Calendar, Flame, Dumbbell, Award, CheckCircle } from 'lucide-react';

export default function HistoryModal({ isOpen, onClose, logs, cardioLogs }) {
  if (!isOpen) return null;

  // Calculate summary metrics
  const totalCardioSessions = cardioLogs.length;
  const totalCardioMinutes = totalCardioSessions * 30;

  // Total exercises completed count across all saved sessions
  let totalSetsDone = 0;
  Object.values(logs).forEach((daySession) => {
    if (daySession) {
      Object.values(daySession).forEach((sets) => {
        if (Array.isArray(sets)) {
          totalSetsDone += sets.filter((s) => s.completed).length;
        }
      });
    }
  });

  return (
    <div className="modal-backdrop">
      <div className="modal-card">
        <div className="modal-header">
          <div className="title-with-icon">
            <Award size={24} color="#00E676" />
            <h3>Workout & Cardio Log History</h3>
          </div>
          <button onClick={onClose} className="modal-close-btn">
            <X size={20} />
          </button>
        </div>

        {/* Stats Grid */}
        <div className="modal-stats-grid">
          <div className="modal-stat-card">
            <Flame size={22} color="#FF3D00" />
            <span className="stat-number">{totalCardioMinutes} Mins</span>
            <span className="stat-label">Total Cardio Completed</span>
          </div>

          <div className="modal-stat-card">
            <Dumbbell size={22} color="#00E676" />
            <span className="stat-number">{totalSetsDone} Sets</span>
            <span className="stat-label">Completed Gym Sets</span>
          </div>

          <div className="modal-stat-card">
            <Calendar size={22} color="#00B0FF" />
            <span className="stat-number">3-Day Split</span>
            <span className="stat-label">Fri (Legs) / Sat (Push) / Sun (Pull)</span>
          </div>
        </div>

        {/* Cardio Logged List */}
        <div className="history-section">
          <h4>Completed 30-Minute Cardio Log:</h4>
          {cardioLogs.length === 0 ? (
            <p className="no-logs">No cardio sessions logged yet. Complete a 30-min timer on Friday, Saturday, or Sunday to record it!</p>
          ) : (
            <div className="logs-list">
              {cardioLogs.map((item, idx) => (
                <div key={idx} className="log-item">
                  <div className="log-item-left">
                    <CheckCircle size={18} color="#00E676" />
                    <div>
                      <strong>{item.type} (30 Mins)</strong>
                      <span className="log-date">{new Date(item.timestamp).toLocaleString()}</span>
                    </div>
                  </div>
                  <span className="log-cal">~{item.calories} kcal</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button onClick={onClose} className="btn-close-modal">
            Close Log View
          </button>
        </div>
      </div>
    </div>
  );
}
