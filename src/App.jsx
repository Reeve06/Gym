import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import HistoryModal from './components/HistoryModal';
import AddExerciseModal from './components/AddExerciseModal';
import { WORKOUT_SCHEDULE } from './data/workoutData';

export default function App() {
  // Determine initial day based on real-time day of week (Friday = 5, Saturday = 6, Sunday = 0)
  const getTodayId = () => {
    const dayNum = new Date().getDay();
    if (dayNum === 5) return 'friday';
    if (dayNum === 6) return 'saturday';
    if (dayNum === 0) return 'sunday';
    return 'friday'; // Default fallback
  };

  const [activeDay, setActiveDay] = useState(getTodayId());
  const [workoutLogs, setWorkoutLogs] = useState({});
  const [cardioLogs, setCardioLogs] = useState([]);
  const [customExercises, setCustomExercises] = useState({ friday: [], saturday: [], sunday: [] });
  const [streak, setStreak] = useState(3);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Load saved state from LocalStorage on mount
  useEffect(() => {
    try {
      const savedLogs = localStorage.getItem('fitpulse_workout_logs');
      if (savedLogs) setWorkoutLogs(JSON.parse(savedLogs));

      const savedCardio = localStorage.getItem('fitpulse_cardio_logs');
      if (savedCardio) setCardioLogs(JSON.parse(savedCardio));

      const savedCustom = localStorage.getItem('fitpulse_custom_exercises');
      if (savedCustom) setCustomExercises(JSON.parse(savedCustom));

      const savedStreak = localStorage.getItem('fitpulse_streak');
      if (savedStreak) setStreak(parseInt(savedStreak, 10));
    } catch (e) {
      console.error('Error loading local storage data:', e);
    }
  }, []);

  // Handle adding custom exercise
  const handleAddCustomExercise = (dayId, newExercise) => {
    const updatedCustom = {
      ...customExercises,
      [dayId]: [...(customExercises[dayId] || []), newExercise]
    };
    setCustomExercises(updatedCustom);
    localStorage.setItem('fitpulse_custom_exercises', JSON.stringify(updatedCustom));
  };

  // Handle deleting custom exercise
  const handleDeleteCustomExercise = (dayId, exerciseId) => {
    const filtered = (customExercises[dayId] || []).filter((ex) => ex.id !== exerciseId);
    const updatedCustom = {
      ...customExercises,
      [dayId]: filtered
    };
    setCustomExercises(updatedCustom);
    localStorage.setItem('fitpulse_custom_exercises', JSON.stringify(updatedCustom));
  };

  // Save exercise sets log
  const handleSaveExerciseLog = (dayId, exId, setsArray) => {
    const updated = {
      ...workoutLogs,
      [dayId]: {
        ...(workoutLogs[dayId] || {}),
        [exId]: setsArray
      }
    };
    setWorkoutLogs(updated);
    localStorage.setItem('fitpulse_workout_logs', JSON.stringify(updated));
  };

  // Log completed 30-min cardio session
  const handleCompleteCardio = (cardioEntry) => {
    const updatedCardio = [cardioEntry, ...cardioLogs];
    setCardioLogs(updatedCardio);
    localStorage.setItem('fitpulse_cardio_logs', JSON.stringify(updatedCardio));

    // Increment streak
    const newStreak = streak + 1;
    setStreak(newStreak);
    localStorage.setItem('fitpulse_streak', newStreak.toString());
  };

  // Prepare merged day schedule with custom exercises appended
  const baseDayData = WORKOUT_SCHEDULE[activeDay] || WORKOUT_SCHEDULE.friday;
  const dayCustoms = customExercises[activeDay] || [];
  const mergedDayData = {
    ...baseDayData,
    exercises: [...baseDayData.exercises, ...dayCustoms]
  };

  const isCardioDoneForDay = cardioLogs.length > 0;

  return (
    <div className="app-root">
      <Navbar
        activeDay={activeDay}
        setActiveDay={setActiveDay}
        streak={streak}
        onOpenHistory={() => setIsHistoryOpen(true)}
        onOpenAddModal={() => setIsAddModalOpen(true)}
      />

      <main className="main-container">
        <Dashboard
          dayData={mergedDayData}
          loggedSession={workoutLogs[activeDay]}
          onSaveExerciseLog={handleSaveExerciseLog}
          onCompleteCardio={handleCompleteCardio}
          isCardioDone={isCardioDoneForDay}
          onOpenAddModal={() => setIsAddModalOpen(true)}
          onDeleteCustomExercise={handleDeleteCustomExercise}
        />
      </main>

      <HistoryModal
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        logs={workoutLogs}
        cardioLogs={cardioLogs}
      />

      <AddExerciseModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        activeDay={activeDay}
        onAddExercise={handleAddCustomExercise}
      />

      <footer className="footer">
        <div className="footer-container">
          <p>© FitPulse Personal Trainer • Friday (Legs & Core), Saturday (Push), Sunday (Pull) + 30-Min Cardio Daily Split</p>
        </div>
      </footer>
    </div>
  );
}
