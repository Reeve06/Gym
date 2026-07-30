import React from 'react';
import { Target, CheckCircle2 } from 'lucide-react';

export default function MuscleVisualizer({ dayData }) {
  const muscleGroupColors = {
    'Quadriceps': '#00E676',
    'Hamstrings': '#00B0FF',
    'Glutes': '#FF3D00',
    'Calves': '#7C4DFF',
    'Rectus Abdominis': '#00E676',
    'Obliques': '#FFAB00',
    'Lower Back': '#FF3D00',

    'Pectoralis Major': '#00B0FF',
    'Upper Chest': '#00E676',
    'Anterior Deltoid': '#7C4DFF',
    'Lateral Deltoid': '#FF3D00',
    'Triceps Long & Lateral Heads': '#FFAB00',

    'Latissimus Dorsi': '#FF3D00',
    'Rhomboids': '#00E676',
    'Trapezius': '#00B0FF',
    'Rear Deltoid': '#7C4DFF',
    'Biceps Brachii': '#FFAB00',
    'Brachialis': '#00E676'
  };

  return (
    <div className="muscle-card">
      <div className="muscle-card-header">
        <div className="title-with-icon">
          <Target size={20} color={dayData.badgeColor} />
          <h3>Anatomy & Target Muscle Groups</h3>
        </div>
        <span className="muscle-count-tag">{dayData.targetMuscles.length} Focus Areas</span>
      </div>

      <p className="muscle-intro">
        Your trainer targeted these specific muscular groups for <strong>{dayData.dayName}</strong> to optimize tension, hypertrophy, and functional recovery:
      </p>

      {/* Target Muscle Pills */}
      <div className="muscle-grid">
        {dayData.targetMuscles.map((muscle, idx) => {
          const accent = muscleGroupColors[muscle] || dayData.badgeColor;
          return (
            <div key={idx} className="muscle-pill" style={{ borderColor: `${accent}40`, backgroundColor: `${accent}12` }}>
              <div className="muscle-dot" style={{ backgroundColor: accent, boxShadow: `0 0 8px ${accent}` }}></div>
              <span className="muscle-name">{muscle}</span>
            </div>
          );
        })}
      </div>

      {/* Cardio Callout for all 3 days */}
      <div className="cardio-callout">
        <CheckCircle2 size={18} color="#00E676" />
        <span>Includes <strong>30 Minutes Daily Cardio</strong> for high calorie expenditure & cardiovascular health.</span>
      </div>
    </div>
  );
}
