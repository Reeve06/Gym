import React, { useState, useEffect } from 'react';
import { Check, Plus, Trash2, Clock, Info, Dumbbell, Activity } from 'lucide-react';
import AnatomicalExerciseImage from './AnatomicalExerciseImage';
import AnatomicalDemoModal from './AnatomicalDemoModal';

export default function WorkoutTracker({ dayData, loggedSession, onSaveExerciseLog }) {
  // Local state for set data per exercise
  const [exerciseLogs, setExerciseLogs] = useState({});
  const [activeRestSeconds, setActiveRestSeconds] = useState(null);
  const [restTimerInterval, setRestTimerInterval] = useState(null);
  const [selectedDemoExercise, setSelectedDemoExercise] = useState(null);

  // Initialize set logs from localStorage or default template
  useEffect(() => {
    const initialLogs = {};
    dayData.exercises.forEach((ex) => {
      if (loggedSession && loggedSession[ex.id]) {
        initialLogs[ex.id] = loggedSession[ex.id];
      } else {
        // Generate default set rows
        const setsArray = [];
        for (let i = 1; i <= ex.sets; i++) {
          setsArray.push({
            setNum: i,
            weight: ex.defaultWeight || 0,
            reps: ex.suggestedReps,
            completed: false
          });
        }
        initialLogs[ex.id] = setsArray;
      }
    });
    setExerciseLogs(initialLogs);
  }, [dayData, loggedSession]);

  // Handle checking off a set
  const toggleSetCompleted = (exId, setIdx, restSec) => {
    const currentExSets = [...(exerciseLogs[exId] || [])];
    const isNowCompleted = !currentExSets[setIdx].completed;
    currentExSets[setIdx].completed = isNowCompleted;

    const updated = {
      ...exerciseLogs,
      [exId]: currentExSets
    };

    setExerciseLogs(updated);
    onSaveExerciseLog(dayData.id, exId, currentExSets);

    // Trigger Rest Timer if set was completed
    if (isNowCompleted) {
      startRestTimer(restSec || 60);
    }
  };

  // Update Weight or Reps for a specific set
  const updateSetData = (exId, setIdx, field, value) => {
    const currentExSets = [...(exerciseLogs[exId] || [])];
    currentExSets[setIdx][field] = value;

    const updated = {
      ...exerciseLogs,
      [exId]: currentExSets
    };

    setExerciseLogs(updated);
    onSaveExerciseLog(dayData.id, exId, currentExSets);
  };

  // Add new set to an exercise
  const addSet = (exId) => {
    const currentExSets = [...(exerciseLogs[exId] || [])];
    const lastSet = currentExSets[currentExSets.length - 1];
    currentExSets.push({
      setNum: currentExSets.length + 1,
      weight: lastSet ? lastSet.weight : 0,
      reps: lastSet ? lastSet.reps : '10',
      completed: false
    });
    const updated = { ...exerciseLogs, [exId]: currentExSets };
    setExerciseLogs(updated);
    onSaveExerciseLog(dayData.id, exId, currentExSets);
  };

  // Delete a set from an exercise
  const removeSet = (exId, setIdx) => {
    const currentExSets = [...(exerciseLogs[exId] || [])];
    if (currentExSets.length <= 1) return;
    currentExSets.splice(setIdx, 1);
    // Re-index set numbers
    const reindexed = currentExSets.map((s, idx) => ({ ...s, setNum: idx + 1 }));
    const updated = { ...exerciseLogs, [exId]: reindexed };
    setExerciseLogs(updated);
    onSaveExerciseLog(dayData.id, exId, reindexed);
  };

  // Rest Timer Controller
  const startRestTimer = (seconds) => {
    if (restTimerInterval) clearInterval(restTimerInterval);
    setActiveRestSeconds(seconds);

    const timer = setInterval(() => {
      setActiveRestSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return null;
        }
        return prev - 1;
      });
    }, 1000);

    setRestTimerInterval(timer);
  };

  // Calculate overall workout completion %
  let totalSetsCount = 0;
  let completedSetsCount = 0;
  Object.values(exerciseLogs).forEach((sets) => {
    if (Array.isArray(sets)) {
      totalSetsCount += sets.length;
      completedSetsCount += sets.filter((s) => s.completed).length;
    }
  });
  const workoutProgress = totalSetsCount > 0 ? Math.round((completedSetsCount / totalSetsCount) * 100) : 0;

  return (
    <div className="workout-tracker">
      {/* Rest Timer Modal Banner */}
      {activeRestSeconds !== null && (
        <div className="rest-timer-banner">
          <Clock size={20} className="icon-pulse" />
          <div className="rest-timer-info">
            <span className="rest-title">Rest Period Active:</span>
            <span className="rest-countdown">{activeRestSeconds}s</span>
          </div>
          <button onClick={() => setActiveRestSeconds(null)} className="rest-skip-btn">
            Skip Rest
          </button>
        </div>
      )}

      {/* Header & Progress Bar */}
      <div className="tracker-header">
        <div className="tracker-title-row">
          <div>
            <h2>{dayData.title}</h2>
            <p className="tracker-sub">Personalized Routine for {dayData.dayName}</p>
          </div>
          <div className="workout-progress-pill">
            <span>{workoutProgress}% Completed</span>
            <div className="progress-bar-track">
              <div className="progress-bar-fill" style={{ width: `${workoutProgress}%`, backgroundColor: dayData.badgeColor }}></div>
            </div>
          </div>
        </div>

        {/* Trainer Advice Note */}
        <div className="trainer-note-box" style={{ borderLeftColor: dayData.badgeColor }}>
          <Info size={20} color={dayData.badgeColor} />
          <div>
            <strong>Trainer Focus Note:</strong>
            <p>{dayData.trainerNote}</p>
          </div>
        </div>
      </div>

      {/* Exercise List Cards */}
      <div className="exercise-list">
        {dayData.exercises.map((ex, index) => {
          const sets = exerciseLogs[ex.id] || [];
          const isExDone = sets.length > 0 && sets.every((s) => s.completed);

          return (
            <div key={ex.id} className={`exercise-card ${isExDone ? 'completed-card' : ''}`}>
              {/* Exercise Layout with Anatomical Red-Muscle Highlight Image */}
              <div className="ex-card-main-layout">
                {/* Anatomical Line-Art Drawing Component (No realistic human photos!) */}
                <div
                  className="ex-img-wrapper"
                  onClick={() => setSelectedDemoExercise(ex)}
                  title="Click to view Animated Motion Demo"
                >
                  <AnatomicalExerciseImage
                    exerciseId={ex.id}
                    primaryZone={ex.primaryMuscleZone || 'quads'}
                    name={ex.name}
                  />
                  <span className="ex-num-overlay">#{index + 1}</span>
                  <div className="ex-demo-hover-badge">
                    <Activity size={14} color="#FF3D00" />
                    <span>Anatomical Demo</span>
                  </div>
                </div>

                <div className="ex-card-content">
                  {/* Exercise Header */}
                  <div className="ex-card-header">
                    <div className="ex-title-group">
                      <div>
                        <h3 className="ex-name">{ex.name}</h3>
                        <span className="ex-target-tag">{ex.target}</span>
                      </div>
                    </div>

                    <button
                      className="anatomical-demo-btn"
                      onClick={() => setSelectedDemoExercise(ex)}
                    >
                      <Activity size={15} color="#FF3D00" />
                      <span>Watch Motion Demo</span>
                    </button>
                  </div>

                  {/* Form Tip Cues */}
                  <div className="form-tip-box">
                    <Info size={16} color={dayData.badgeColor} />
                    <span><strong>Form Cue:</strong> {ex.tip}</span>
                  </div>

                  {/* Sets Table */}
                  <div className="sets-table">
                    <div className="sets-header-row">
                      <span className="col-set">SET</span>
                      <span className="col-weight">WEIGHT (kg/lbs)</span>
                      <span className="col-reps">REPS</span>
                      <span className="col-action">DONE</span>
                    </div>

                    {sets.map((set, sIdx) => (
                      <div key={sIdx} className={`set-row ${set.completed ? 'set-completed' : ''}`}>
                        <span className="set-num-badge">Set {set.setNum}</span>

                        <div className="input-group">
                          <input
                            type="number"
                            className="set-input"
                            value={set.weight}
                            onChange={(e) => updateSetData(ex.id, sIdx, 'weight', parseFloat(e.target.value) || 0)}
                            placeholder="0"
                          />
                        </div>

                        <div className="input-group">
                          <input
                            type="text"
                            className="set-input reps-input"
                            value={set.reps}
                            onChange={(e) => updateSetData(ex.id, sIdx, 'reps', e.target.value)}
                            placeholder="Reps"
                          />
                        </div>

                        <div className="set-actions">
                          <button
                            onClick={() => toggleSetCompleted(ex.id, sIdx, ex.restSeconds)}
                            className={`check-set-btn ${set.completed ? 'completed' : ''}`}
                          >
                            <Check size={18} />
                          </button>

                          {sets.length > 1 && (
                            <button
                              onClick={() => removeSet(ex.id, sIdx)}
                              className="delete-set-btn"
                              title="Remove Set"
                            >
                              <Trash2 size={14} />
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Add Set Button */}
                  <div className="ex-card-footer">
                    <button onClick={() => addSet(ex.id)} className="add-set-btn">
                      <Plus size={16} />
                      <span>Add Extra Set</span>
                    </button>
                    <span className="suggested-rest">Suggested Rest: {ex.restSeconds}s</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Anatomical Demo Modal Popup */}
      {selectedDemoExercise && (
        <AnatomicalDemoModal
          exercise={selectedDemoExercise}
          dayColor={dayData.badgeColor}
          onClose={() => setSelectedDemoExercise(null)}
        />
      )}
    </div>
  );
}
