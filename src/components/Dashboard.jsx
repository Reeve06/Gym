import React, { useState } from 'react';
import { Dumbbell, Flame, Target, Clock, Sparkles, Plus } from 'lucide-react';
import WorkoutTracker from './WorkoutTracker';
import CardioTimer from './CardioTimer';
import MuscleVisualizer from './MuscleVisualizer';

export default function Dashboard({ dayData, loggedSession, onSaveExerciseLog, onCompleteCardio, isCardioDone, onOpenAddModal, onDeleteCustomExercise }) {
  const [activeTab, setActiveTab] = useState('workout'); // 'workout' | 'cardio' | 'anatomy'

  return (
    <div className="dashboard-wrapper">
      {/* Hero Header */}
      <div className="hero-banner" style={{ background: dayData.accentGradient }}>
        <div className="hero-content">
          <div className="hero-tag">
            <Sparkles size={16} />
            <span>PERSONAL TRAINER SPLIT • {dayData.dayName.toUpperCase()} FOCUS</span>
          </div>

          <h1 className="hero-title">{dayData.title}</h1>
          <p className="hero-description">{dayData.description}</p>

          <div className="hero-metrics">
            <div className="metric-chip">
              <Dumbbell size={18} />
              <span>{dayData.exercises.length} Exercises</span>
            </div>
            <div className="metric-chip">
              <Target size={18} />
              <span>{dayData.targetMuscles.length} Muscle Groups</span>
            </div>
            <div className="metric-chip">
              <Flame size={18} />
              <span>30 Min Daily Cardio</span>
            </div>
            <div className="metric-chip">
              <Clock size={18} />
              <span>~75 Mins Total</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="tabs-bar">
        <button
          className={`tab-btn ${activeTab === 'workout' ? 'active' : ''}`}
          onClick={() => setActiveTab('workout')}
        >
          <Dumbbell size={18} />
          <span>Gym Workout ({dayData.exercises.length})</span>
        </button>

        <button
          className={`tab-btn ${activeTab === 'cardio' ? 'active' : ''} ${isCardioDone ? 'completed-tab' : ''}`}
          onClick={() => setActiveTab('cardio')}
        >
          <Flame size={18} color={isCardioDone ? '#00E676' : '#FF3D00'} />
          <span>30-Min Cardio Module</span>
          {isCardioDone ? (
            <span className="tab-badge-done">DONE</span>
          ) : (
            <span className="tab-badge-pending">REQUIRED</span>
          )}
        </button>

        <button
          className={`tab-btn ${activeTab === 'anatomy' ? 'active' : ''}`}
          onClick={() => setActiveTab('anatomy')}
        >
          <Target size={18} />
          <span>Muscle Group Anatomy</span>
        </button>
      </div>

      {/* Main Tab Content */}
      <div className="tab-content">
        {activeTab === 'workout' && (
          <WorkoutTracker
            dayData={dayData}
            loggedSession={loggedSession}
            onSaveExerciseLog={onSaveExerciseLog}
            onOpenAddModal={onOpenAddModal}
            onDeleteCustomExercise={onDeleteCustomExercise}
          />
        )}

        {activeTab === 'cardio' && (
          <CardioTimer
            dayName={dayData.dayName}
            onCompleteCardio={onCompleteCardio}
            isCardioCompleted={isCardioDone}
          />
        )}

        {activeTab === 'anatomy' && (
          <MuscleVisualizer dayData={dayData} />
        )}
      </div>
    </div>
  );
}
