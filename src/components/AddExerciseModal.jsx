import React, { useState } from 'react';
import { X, Plus, Dumbbell, Target, Clock, Shield } from 'lucide-react';

export default function AddExerciseModal({ isOpen, onClose, activeDay, onAddExercise }) {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [dayId, setDayId] = useState(activeDay || 'friday');
  const [muscleZone, setMuscleZone] = useState('quads');
  const [targetDescription, setTargetDescription] = useState('');
  const [sets, setSets] = useState(3);
  const [reps, setReps] = useState('10-12');
  const [weight, setWeight] = useState(20);
  const [restSeconds, setRestSeconds] = useState(60);
  const [tip, setTip] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newExercise = {
      id: `custom-${Date.now()}`,
      name: name.trim(),
      target: targetDescription.trim() || muscleZone.toUpperCase(),
      sets: parseInt(sets, 10) || 3,
      suggestedReps: reps || '10-12',
      restSeconds: parseInt(restSeconds, 10) || 60,
      tip: tip.trim() || 'Focus on controlled tempo and form.',
      defaultWeight: parseFloat(weight) || 0,
      primaryMuscleZone: muscleZone,
      isCustom: true
    };

    onAddExercise(dayId, newExercise);
    onClose();
    // Reset form
    setName('');
    setTip('');
  };

  return (
    <div className="modal-backdrop">
      <div className="add-modal-card">
        <div className="modal-header">
          <div className="title-with-icon">
            <Plus size={22} color="#00E676" />
            <div>
              <h3>Add Custom Exercise</h3>
              <p className="modal-sub">Expand your personal training routine</p>
            </div>
          </div>
          <button onClick={onClose} className="modal-close-btn">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="add-form">
          {/* Day & Muscle Selector */}
          <div className="form-row">
            <div className="form-group">
              <label>Routine Day</label>
              <select value={dayId} onChange={(e) => setDayId(e.target.value)} className="form-input">
                <option value="friday">Friday (Legs & Core)</option>
                <option value="saturday">Saturday (Push Day)</option>
                <option value="sunday">Sunday (Pull Day)</option>
              </select>
            </div>

            <div className="form-group">
              <label>Primary Muscle Activation</label>
              <select value={muscleZone} onChange={(e) => setMuscleZone(e.target.value)} className="form-input">
                <option value="quads">Quadriceps / Legs</option>
                <option value="hamstrings">Hamstrings / Glutes</option>
                <option value="chest">Chest / Pectorals</option>
                <option value="shoulders">Shoulders / Deltoids</option>
                <option value="back">Lats / Upper Back</option>
                <option value="biceps">Biceps & Arms</option>
                <option value="triceps">Triceps</option>
                <option value="abs">Abs & Core</option>
              </select>
            </div>
          </div>

          {/* Exercise Name */}
          <div className="form-group">
            <label>Exercise Name *</label>
            <input
              type="text"
              required
              placeholder="e.g. Hack Squat, Incline Cable Flye, Hammer Strength Row"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
            />
          </div>

          {/* Target Specific Description */}
          <div className="form-group">
            <label>Targeted Muscles Sub-Text</label>
            <input
              type="text"
              placeholder="e.g. Lower Pectoralis, Lateral Deltoids, Lower Abs"
              value={targetDescription}
              onChange={(e) => setTargetDescription(e.target.value)}
              className="form-input"
            />
          </div>

          {/* Sets, Reps, Weight */}
          <div className="form-row three-cols">
            <div className="form-group">
              <label>Target Sets</label>
              <input
                type="number"
                min="1"
                max="10"
                value={sets}
                onChange={(e) => setSets(e.target.value)}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label>Reps Target</label>
              <input
                type="text"
                placeholder="8-10, 12, etc"
                value={reps}
                onChange={(e) => setReps(e.target.value)}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label>Starting Weight (kg/lbs)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="form-input"
              />
            </div>
          </div>

          {/* Rest Seconds & Technique Tip */}
          <div className="form-row">
            <div className="form-group">
              <label>Rest Period (Seconds)</label>
              <select value={restSeconds} onChange={(e) => setRestSeconds(e.target.value)} className="form-input">
                <option value="45">45 Seconds (Hypertrophy)</option>
                <option value="60">60 Seconds (Standard)</option>
                <option value="90">90 Seconds (Heavy Compounds)</option>
                <option value="120">120 Seconds (Max Strength)</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Trainer Form & Technique Tip</label>
            <textarea
              placeholder="e.g. Keep chest high, pause 1 second at full contraction..."
              value={tip}
              onChange={(e) => setTip(e.target.value)}
              className="form-input textarea"
              rows={2}
            />
          </div>

          <div className="modal-actions">
            <button type="button" onClick={onClose} className="btn-cancel">
              Cancel
            </button>
            <button type="submit" className="btn-save-exercise">
              <Plus size={18} />
              <span>Save to Workout Routine</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
