import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Activity, Flame, Shield, Info, CheckCircle2 } from 'lucide-react';

export default function AnatomicalDemoModal({ exercise, dayColor, onClose }) {
  if (!exercise) return null;

  const [isPlaying, setIsPlaying] = useState(true);
  const [phase, setPhase] = useState('Concentric (Pull/Drive)');
  const [phaseProgress, setPhaseProgress] = useState(0);

  // Exercise Demo movement loop animation effect
  useEffect(() => {
    let timer = null;
    if (isPlaying) {
      timer = setInterval(() => {
        setPhaseProgress((prev) => {
          const next = (prev + 5) % 100;
          if (next < 40) {
            setPhase('Concentric Phase (Active Drive / Squeeze)');
          } else if (next < 60) {
            setPhase('Peak Contraction (Hold 1s)');
          } else {
            setPhase('Eccentric Phase (Controlled Lowering)');
          }
          return next;
        });
      }, 100);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  // Determine active muscle SVG highlight shape based on primary muscle zone
  const renderAnatomicalSVG = () => {
    const isRedHighlight = true;
    const highlightColor = '#FF3D00'; // Neon Red / Orange highlight like user reference

    return (
      <div className="svg-body-canvas">
        <svg viewBox="0 0 200 400" className="body-silhouette-svg">
          {/* Base Anatomical Body Silhouette */}
          <g className="body-base" fill="#1E293B" stroke="#334155" strokeWidth="2">
            {/* Head & Neck */}
            <circle cx="100" cy="35" r="18" />
            <path d="M94 53 L106 53 L108 65 L92 65 Z" />

            {/* Torso & Shoulders */}
            <path d="M65 70 Q100 65 135 70 L145 130 Q100 145 55 130 Z" />
            {/* Chest */}
            <path d="M68 75 Q100 78 132 75 L130 105 Q100 110 70 105 Z" fill="#293548" />
            {/* Abs */}
            <path d="M75 110 Q100 112 125 110 L120 175 Q100 180 80 175 Z" fill="#222E3E" />

            {/* Arms */}
            <path d="M55 70 L35 140 L45 200 L58 140 L65 85 Z" />
            <path d="M145 70 L165 140 L155 200 L142 140 L135 85 Z" />

            {/* Hips & Legs */}
            <path d="M70 175 L130 175 L140 270 L125 370 L102 370 L100 240 L98 370 L75 370 L60 270 Z" />
          </g>

          {/* Glowing Red Muscle Activation Highlights based on exercise zone */}
          <g className="active-muscles-highlight">
            {/* Quads Highlight (Legs) */}
            {(exercise.primaryMuscleZone === 'quads' || exercise.id.includes('leg')) && (
              <g fill={highlightColor} opacity="0.85" className="muscle-pulse-glow">
                <path d="M72 185 Q90 190 98 230 L95 270 Q75 265 65 220 Z" />
                <path d="M128 185 Q110 190 102 230 L105 270 Q125 265 135 220 Z" />
              </g>
            )}

            {/* Hamstrings & Glutes Highlight */}
            {exercise.primaryMuscleZone === 'hamstrings' && (
              <g fill={highlightColor} opacity="0.85" className="muscle-pulse-glow">
                <path d="M72 175 Q98 175 98 200 L95 280 Q75 275 65 210 Z" />
                <path d="M128 175 Q102 175 102 200 L105 280 Q125 275 135 210 Z" />
              </g>
            )}

            {/* Abs & Core Highlight */}
            {exercise.primaryMuscleZone === 'abs' && (
              <g fill={highlightColor} opacity="0.85" className="muscle-pulse-glow">
                <rect x="80" y="112" width="40" height="60" rx="6" />
              </g>
            )}

            {/* Chest Highlight (Bench, Incline, Dips) */}
            {exercise.primaryMuscleZone === 'chest' && (
              <g fill={highlightColor} opacity="0.85" className="muscle-pulse-glow">
                <path d="M70 75 Q100 78 130 75 L128 105 Q100 110 72 105 Z" />
              </g>
            )}

            {/* Shoulders / Deltoids Highlight */}
            {exercise.primaryMuscleZone === 'shoulders' && (
              <g fill={highlightColor} opacity="0.85" className="muscle-pulse-glow">
                <circle cx="60" cy="78" r="14" />
                <circle cx="140" cy="78" r="14" />
              </g>
            )}

            {/* Triceps Highlight */}
            {exercise.primaryMuscleZone === 'triceps' && (
              <g fill={highlightColor} opacity="0.85" className="muscle-pulse-glow">
                <path d="M48 85 L38 130 L48 130 L55 90 Z" />
                <path d="M152 85 L162 130 L152 130 L145 90 Z" />
              </g>
            )}

            {/* Lats & Upper Back Highlight (Pull day / Rows / Pulldowns) */}
            {exercise.primaryMuscleZone === 'back' && (
              <g fill={highlightColor} opacity="0.85" className="muscle-pulse-glow">
                <path d="M65 80 Q100 85 135 80 L125 145 Q100 135 75 145 Z" />
              </g>
            )}

            {/* Biceps Highlight */}
            {exercise.primaryMuscleZone === 'biceps' && (
              <g fill={highlightColor} opacity="0.85" className="muscle-pulse-glow">
                <ellipse cx="52" cy="105" rx="8" ry="16" />
                <ellipse cx="148" cy="105" rx="8" ry="16" />
              </g>
            )}
          </g>

          {/* Movement Trajectory Vector Indicator */}
          <path
            d="M100 40 L100 360"
            stroke="#00E676"
            strokeWidth="3"
            strokeDasharray="8 6"
            opacity="0.4"
          />
        </svg>

        {/* Dynamic Movement Position Motion Overlay */}
        <div
          className="movement-motion-indicator"
          style={{
            top: `${20 + (phaseProgress / 100) * 60}%`,
            borderColor: highlightColor
          }}
        >
          <span className="motion-label">{phaseProgress < 50 ? '▲ DRIVE' : '▼ LOWER'}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="modal-backdrop">
      <div className="anatomical-modal-card">
        {/* Header */}
        <div className="modal-header">
          <div className="title-with-icon">
            <Activity size={24} color="#FF3D00" className="flame-pulse" />
            <div>
              <h3 className="modal-ex-title">{exercise.name}</h3>
              <p className="modal-ex-sub">Anatomical Muscle Activation & Movement Demo</p>
            </div>
          </div>

          <button onClick={onClose} className="modal-close-btn">
            <X size={22} />
          </button>
        </div>

        {/* Modal Main Grid */}
        <div className="anatomical-grid">
          {/* Left Column: Interactive Anatomical Demo Visualizer */}
          <div className="anatomical-visualizer-box">
            <div className="canvas-header">
              <span className="canvas-badge">RED = PRIMARY MUSCLE ACTIVATION</span>
              <button onClick={() => setIsPlaying(!isPlaying)} className="play-pause-btn">
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                <span>{isPlaying ? 'Pause Loop' : 'Play Motion'}</span>
              </button>
            </div>

            {/* Render Body Silhouette & Muscle Highlight */}
            {renderAnatomicalSVG()}

            {/* Movement Phase Indicator */}
            <div className="phase-indicator-bar">
              <div className="phase-text-group">
                <span className="phase-label">ACTIVE PHASE:</span>
                <span className="phase-val">{phase}</span>
              </div>
              <div className="phase-progress-track">
                <div className="phase-progress-fill" style={{ width: `${phaseProgress}%` }}></div>
              </div>
            </div>
          </div>

          {/* Right Column: Muscle Engagement % & Tempo Cues */}
          <div className="anatomical-details-box">
            <h4><Flame size={18} color="#FF3D00" /> Target Muscle Engagement Breakdown</h4>

            <div className="breakdown-list">
              {exercise.activationBreakdown ? (
                exercise.activationBreakdown.map((item, idx) => (
                  <div key={idx} className="breakdown-card">
                    <div className="breakdown-header">
                      <span className="breakdown-name">{item.muscle}</span>
                      <span className="breakdown-pct">{item.percent}% Target</span>
                    </div>
                    <div className="breakdown-bar-track">
                      <div
                        className="breakdown-bar-fill"
                        style={{ width: `${item.percent}%`, backgroundColor: item.color }}
                      ></div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-muted">Primary Activation: {exercise.target}</p>
              )}
            </div>

            {/* Tempo & Execution Technique */}
            <div className="execution-card">
              <div className="exec-row">
                <Shield size={18} color="#00B0FF" />
                <div>
                  <strong>Recommended Tempo:</strong>
                  <p>{exercise.tempo || '2-1-2 Controlled Cadence'}</p>
                </div>
              </div>

              <div className="exec-row">
                <Info size={18} color="#00E676" />
                <div>
                  <strong>Key Form Cue:</strong>
                  <p>{exercise.tip}</p>
                </div>
              </div>
            </div>

            <div className="modal-action-footer">
              <button onClick={onClose} className="btn-got-it">
                <CheckCircle2 size={18} />
                <span>UNDERSTOOD — RETURN TO LOG</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
