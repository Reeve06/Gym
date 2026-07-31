import React from 'react';

export default function AnatomicalExerciseImage({ exerciseId, primaryZone, name }) {
  const redHighlight = '#FF3D00';
  const redHighlightGlow = 'rgba(255, 61, 0, 0.85)';
  const bodyGray = '#94A3B8';
  const bodyDark = '#1E293B';
  const equipmentColor = '#E2E8F0';

  // Render specific anatomical drawing SVG per exercise type
  const renderSVGContent = () => {
    switch (primaryZone) {
      case 'quads':
      case 'legs':
        return (
          <g>
            {/* Squat / Leg Press Silhouette */}
            {/* Barbell / Equipment */}
            <rect x="20" y="45" width="160" height="8" rx="3" fill={equipmentColor} />
            <rect x="25" y="38" width="10" height="22" rx="2" fill="#64748B" />
            <rect x="165" y="38" width="10" height="22" rx="2" fill="#64748B" />

            {/* Head & Upper Body (Gray line-art) */}
            <circle cx="100" cy="30" r="14" fill={bodyGray} />
            <path d="M85 45 L115 45 L125 110 L75 110 Z" fill={bodyDark} stroke={bodyGray} strokeWidth="2" />
            <path d="M75 110 L125 110 L120 145 L80 145 Z" fill="#334155" />

            {/* RED HIGHLIGHTED QUADS & GLUTES (Exact Style Requested) */}
            <path
              d="M78 145 Q100 150 118 145 L125 210 Q100 215 75 210 Z"
              fill={redHighlight}
              filter="drop-shadow(0 0 6px rgba(255,61,0,0.8))"
            />
            {/* Lower legs */}
            <path d="M78 210 L85 270 L95 270 L90 210 Z" fill={bodyGray} />
            <path d="M122 210 L115 270 L105 270 L110 210 Z" fill={bodyGray} />
          </g>
        );

      case 'hamstrings':
        return (
          <g>
            {/* Deadlift / RDL Hinge Silhouette */}
            <rect x="30" y="180" width="140" height="6" rx="3" fill={equipmentColor} />
            <circle cx="80" cy="50" r="14" fill={bodyGray} />

            {/* Bent Torso */}
            <path d="M75 60 L120 90 L110 135 L70 115 Z" fill={bodyDark} stroke={bodyGray} strokeWidth="2" />

            {/* RED HIGHLIGHTED HAMSTRINGS & LOWER BACK */}
            <path
              d="M70 135 Q95 140 115 135 L110 200 Q90 205 72 195 Z"
              fill={redHighlight}
              filter="drop-shadow(0 0 6px rgba(255,61,0,0.8))"
            />
            {/* Lower legs */}
            <path d="M72 195 L75 260 L88 260 L86 198 Z" fill={bodyGray} />
            <path d="M110 200 L105 260 L118 260 L120 200 Z" fill={bodyGray} />
          </g>
        );

      case 'chest':
        return (
          <g>
            {/* Bench Press / Press Silhouette */}
            {/* Bench */}
            <rect x="30" y="160" width="140" height="12" rx="3" fill="#334155" />
            <rect x="40" y="172" width="8" height="40" fill="#64748B" />
            <rect x="150" y="172" width="8" height="40" fill="#64748B" />

            {/* Barbell Overhead */}
            <rect x="20" y="70" width="160" height="8" rx="3" fill={equipmentColor} />

            {/* Torso lying down */}
            <path d="M45 145 L155 145 L155 160 L45 160 Z" fill={bodyDark} />

            {/* RED HIGHLIGHTED CHEST & TRICEPS */}
            <path
              d="M80 120 Q100 115 120 120 L125 145 Q100 150 75 145 Z"
              fill={redHighlight}
              filter="drop-shadow(0 0 8px rgba(255,61,0,0.9))"
            />
            {/* Arms extending up */}
            <path d="M70 140 L65 78 L75 78 L82 135 Z" fill={redHighlight} />
            <path d="M130 140 L135 78 L125 78 L118 135 Z" fill={redHighlight} />
          </g>
        );

      case 'shoulders':
        return (
          <g>
            {/* Shoulder Overhead Press / Lateral Raise Silhouette */}
            <circle cx="100" cy="40" r="14" fill={bodyGray} />
            <path d="M82 55 L118 55 L125 130 L75 130 Z" fill={bodyDark} stroke={bodyGray} strokeWidth="2" />

            {/* RED HIGHLIGHTED DELTOIDS (Shoulder Caps) */}
            <circle cx="72" cy="65" r="16" fill={redHighlight} filter="drop-shadow(0 0 6px rgba(255,61,0,0.8))" />
            <circle cx="128" cy="65" r="16" fill={redHighlight} filter="drop-shadow(0 0 6px rgba(255,61,0,0.8))" />

            {/* Dumbbells overhead */}
            <rect x="35" y="35" width="25" height="10" rx="3" fill={equipmentColor} />
            <rect x="140" y="35" width="25" height="10" rx="3" fill={equipmentColor} />
            <path d="M70 65 L48 40 L54 36 L78 60 Z" fill={bodyGray} />
            <path d="M130 65 L152 40 L146 36 L122 60 Z" fill={bodyGray} />
          </g>
        );

      case 'back':
        return (
          <g>
            {/* Pull-Up / Lat Pulldown / Row Silhouette (Matching User Reference Image!) */}
            {/* Pull-up bar */}
            <rect x="20" y="25" width="160" height="6" rx="2" fill={equipmentColor} />
            <rect x="40" y="10" width="6" height="18" fill="#64748B" />
            <rect x="154" y="10" width="6" height="18" fill="#64748B" />

            {/* Head & Neck */}
            <circle cx="100" cy="45" r="14" fill={bodyGray} />

            {/* RED HIGHLIGHTED LATS, RHOMBOIDS & UPPER BACK (EXACT LOOK OF USER'S IMAGE) */}
            <path
              d="M70 60 Q100 65 130 60 L122 140 Q100 150 78 140 Z"
              fill={redHighlight}
              filter="drop-shadow(0 0 8px rgba(255,61,0,0.9))"
            />
            {/* Red highlighted arm/bicep pull lines */}
            <path d="M68 60 L48 30 L56 28 L78 55 Z" fill={redHighlight} />
            <path d="M132 60 L152 30 L144 28 L122 55 Z" fill={redHighlight} />

            {/* Lower Body */}
            <path d="M78 140 L122 140 L115 240 L85 240 Z" fill={bodyDark} stroke={bodyGray} strokeWidth="1.5" />
          </g>
        );

      case 'biceps':
        return (
          <g>
            {/* Bicep Curl Silhouette */}
            <circle cx="100" cy="40" r="14" fill={bodyGray} />
            <path d="M80 55 L120 55 L125 135 L75 135 Z" fill={bodyDark} stroke={bodyGray} strokeWidth="2" />

            {/* RED HIGHLIGHTED BICEPS & FOREARMS */}
            <ellipse cx="65" cy="90" rx="12" ry="18" fill={redHighlight} filter="drop-shadow(0 0 6px rgba(255,61,0,0.8))" />
            <ellipse cx="135" cy="90" rx="12" ry="18" fill={redHighlight} filter="drop-shadow(0 0 6px rgba(255,61,0,0.8))" />

            {/* Barbell / Dumbbells in hand */}
            <rect x="40" y="85" width="120" height="8" rx="3" fill={equipmentColor} />
          </g>
        );

      case 'triceps':
        return (
          <g>
            {/* Tricep Extension / Dip / Pushdown Silhouette */}
            <circle cx="100" cy="40" r="14" fill={bodyGray} />
            <path d="M80 55 L120 55 L125 135 L75 135 Z" fill={bodyDark} stroke={bodyGray} strokeWidth="2" />

            {/* RED HIGHLIGHTED TRICEPS (Back of arm) */}
            <path d="M68 60 L55 110 L65 112 L78 70 Z" fill={redHighlight} filter="drop-shadow(0 0 6px rgba(255,61,0,0.8))" />
            <path d="M132 60 L145 110 L135 112 L122 70 Z" fill={redHighlight} filter="drop-shadow(0 0 6px rgba(255,61,0,0.8))" />
          </g>
        );

      case 'abs':
      default:
        return (
          <g>
            {/* Abdominal / Core Silhouette */}
            <circle cx="100" cy="35" r="14" fill={bodyGray} />
            <path d="M80 50 L120 50 L125 100 L75 100 Z" fill={bodyDark} stroke={bodyGray} strokeWidth="2" />

            {/* RED HIGHLIGHTED ABS & OBLIQUES */}
            <rect x="80" y="100" width="40" height="65" rx="6" fill={redHighlight} filter="drop-shadow(0 0 8px rgba(255,61,0,0.9))" />
            <path d="M72 105 L80 105 L80 160 L75 155 Z" fill="#FF7043" />
            <path d="M128 105 L120 105 L120 160 L125 155 Z" fill="#FF7043" />

            {/* Lower Body */}
            <path d="M75 165 L125 165 L120 260 L80 260 Z" fill={bodyDark} />
          </g>
        );
    }
  };

  return (
    <div className="anatomical-card-container">
      <svg viewBox="0 0 200 280" className="anatomical-card-svg">
        <rect width="200" height="280" rx="12" fill="#0B0F17" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />

        {/* Technical Grid Accent Lines */}
        <line x1="0" y1="40" x2="200" y2="40" stroke="rgba(255,255,255,0.04)" strokeDasharray="4 4" />
        <line x1="0" y1="240" x2="200" y2="240" stroke="rgba(255,255,255,0.04)" strokeDasharray="4 4" />
        <line x1="100" y1="0" x2="100" y2="280" stroke="rgba(255,255,255,0.04)" strokeDasharray="4 4" />

        {/* Anatomical Line-Art Drawing with Red Muscle Highlight */}
        {renderSVGContent()}

        {/* Exercise Name Overlay */}
        <rect x="10" y="245" width="180" height="26" rx="6" fill="rgba(18,24,36,0.9)" stroke="rgba(255,61,0,0.3)" />
        <text x="100" y="262" fill="#FFFFFF" fontSize="10" fontWeight="800" textAnchor="middle" fontFamily="Outfit, sans-serif">
          {name.toUpperCase()}
        </text>
      </svg>
    </div>
  );
}
