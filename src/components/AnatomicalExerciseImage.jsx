import React from 'react';

export default function AnatomicalExerciseImage({ primaryZone, name }) {
  const redGlow = '#FF3D00';
  const redSoft = '#FF6E40';
  const slateBody = '#334155';
  const slateOutline = '#64748B';
  const equipmentSilver = '#CBD5E1';

  // Render high-definition stylized vector anatomical figure with glowing red muscle activation
  const renderSVGAnatomy = () => {
    switch (primaryZone) {
      case 'quads':
      case 'legs':
        return (
          <g>
            {/* Barbell rack & weights */}
            <line x1="15" y1="42" x2="185" y2="42" stroke={equipmentSilver} strokeWidth="5" strokeLinecap="round" />
            <rect x="20" y="32" width="12" height="20" rx="3" fill="#475569" />
            <rect x="168" y="32" width="12" height="20" rx="3" fill="#475569" />

            {/* Head & Upper Torso Line-art */}
            <circle cx="100" cy="28" r="13" fill="#475569" stroke={slateOutline} strokeWidth="2" />
            <path d="M85 42 L115 42 L124 105 L76 105 Z" fill={slateBody} stroke={slateOutline} strokeWidth="2" />

            {/* GLOWING RED HIGHLIGHTED QUADS & GLUTES */}
            <g className="red-muscle-glow">
              <path
                d="M76 105 Q100 110 124 105 L128 175 Q100 185 72 175 Z"
                fill={redGlow}
                filter="drop-shadow(0 0 10px rgba(255, 61, 0, 0.95))"
              />
              <path d="M84 112 Q100 115 116 112 L118 165 Q100 172 82 165 Z" fill={redSoft} opacity="0.8" />
            </g>

            {/* Knees & Calves */}
            <circle cx="85" cy="182" r="7" fill={slateOutline} />
            <circle cx="115" cy="182" r="7" fill={slateOutline} />
            <path d="M80 188 L85 240 L93 240 L90 188 Z" fill={slateBody} stroke={slateOutline} strokeWidth="1.5" />
            <path d="M120 188 L115 240 L107 240 L110 188 Z" fill={slateBody} stroke={slateOutline} strokeWidth="1.5" />
          </g>
        );

      case 'hamstrings':
        return (
          <g>
            {/* RDL / Deadlift Hinge Barbell */}
            <line x1="25" y1="170" x2="175" y2="170" stroke={equipmentSilver} strokeWidth="5" strokeLinecap="round" />
            <rect x="30" y="160" width="10" height="20" rx="3" fill="#475569" />
            <rect x="160" y="160" width="10" height="20" rx="3" fill="#475569" />

            {/* Hinge Body */}
            <circle cx="75" cy="50" r="13" fill="#475569" stroke={slateOutline} strokeWidth="2" />
            <path d="M72 63 L115 90 L105 135 L65 110 Z" fill={slateBody} stroke={slateOutline} strokeWidth="2" />

            {/* GLOWING RED HIGHLIGHTED HAMSTRINGS & LOWER BACK */}
            <g className="red-muscle-glow">
              <path
                d="M65 110 Q90 120 105 135 L100 195 Q75 198 62 178 Z"
                fill={redGlow}
                filter="drop-shadow(0 0 10px rgba(255, 61, 0, 0.95))"
              />
              <path d="M72 118 Q90 125 100 132 L96 182 Q78 185 68 168 Z" fill={redSoft} opacity="0.8" />
            </g>

            {/* Lower legs */}
            <path d="M62 178 L65 245 L78 245 L76 180 Z" fill={slateBody} stroke={slateOutline} strokeWidth="1.5" />
            <path d="M100 195 L95 245 L108 245 L110 198 Z" fill={slateBody} stroke={slateOutline} strokeWidth="1.5" />
          </g>
        );

      case 'chest':
        return (
          <g>
            {/* Bench Structure */}
            <rect x="25" y="155" width="150" height="10" rx="3" fill="#334155" />
            <rect x="35" y="165" width="8" height="40" fill="#475569" />
            <rect x="157" y="165" width="8" height="40" fill="#475569" />

            {/* Barbell Press Bar */}
            <line x1="15" y1="65" x2="185" y2="65" stroke={equipmentSilver} strokeWidth="5" strokeLinecap="round" />

            {/* Torso Base */}
            <rect x="40" y="140" width="120" height="15" rx="4" fill={slateBody} stroke={slateOutline} strokeWidth="1.5" />

            {/* GLOWING RED HIGHLIGHTED CHEST & TRICEPS */}
            <g className="red-muscle-glow">
              <path
                d="M75 115 Q100 108 125 115 L128 140 Q100 148 72 140 Z"
                fill={redGlow}
                filter="drop-shadow(0 0 10px rgba(255, 61, 0, 0.95))"
              />
              {/* Arms reaching up */}
              <path d="M68 138 L62 70 L74 70 L80 135 Z" fill={redGlow} />
              <path d="M132 138 L138 70 L126 70 L120 135 Z" fill={redGlow} />
            </g>
          </g>
        );

      case 'shoulders':
        return (
          <g>
            {/* Head & Neck */}
            <circle cx="100" cy="35" r="13" fill="#475569" stroke={slateOutline} strokeWidth="2" />
            <path d="M82 48 L118 48 L124 125 L76 125 Z" fill={slateBody} stroke={slateOutline} strokeWidth="2" />

            {/* GLOWING RED HIGHLIGHTED DELTOID CAPS */}
            <g className="red-muscle-glow">
              <circle cx="68" cy="58" r="18" fill={redGlow} filter="drop-shadow(0 0 10px rgba(255, 61, 0, 0.95))" />
              <circle cx="132" cy="58" r="18" fill={redGlow} filter="drop-shadow(0 0 10px rgba(255, 61, 0, 0.95))" />
            </g>

            {/* Overhead Dumbbells */}
            <rect x="30" y="25" width="24" height="10" rx="3" fill={equipmentSilver} />
            <rect x="146" y="25" width="24" height="10" rx="3" fill={equipmentSilver} />
            <line x1="68" y1="58" L42 y2="30" stroke={slateOutline} strokeWidth="4" />
            <line x1="132" y1="58" L158 y2="30" stroke={slateOutline} strokeWidth="4" />
          </g>
        );

      case 'back':
        return (
          <g>
            {/* Pull-Up Bar */}
            <line x1="15" y1="22" x2="185" y2="22" stroke={equipmentSilver} strokeWidth="6" strokeLinecap="round" />
            <rect x="35" y="8" width="6" height="14" fill="#475569" />
            <rect x="159" y="8" width="6" height="14" fill="#475569" />

            {/* Head & Neck */}
            <circle cx="100" cy="40" r="13" fill="#475569" stroke={slateOutline} strokeWidth="2" />

            {/* GLOWING RED HIGHLIGHTED LATS & V-TAPER (EXACT REFERENCE STYLE) */}
            <g className="red-muscle-glow">
              <path
                d="M68 55 Q100 62 132 55 L124 135 Q100 148 76 135 Z"
                fill={redGlow}
                filter="drop-shadow(0 0 12px rgba(255, 61, 0, 1))"
              />
              <path d="M78 62 Q100 68 122 62 L118 128 Q100 138 82 128 Z" fill={redSoft} opacity="0.8" />
              {/* Red Bicep/Lat pull strands */}
              <path d="M66 55 L46 25 L54 23 L76 50 Z" fill={redGlow} />
              <path d="M134 55 L154 25 L146 23 L124 50 Z" fill={redGlow} />
            </g>

            {/* Lower Body */}
            <path d="M76 135 L124 135 L116 235 L84 235 Z" fill={slateBody} stroke={slateOutline} strokeWidth="1.5" />
          </g>
        );

      case 'biceps':
        return (
          <g>
            <circle cx="100" cy="35" r="13" fill="#475569" stroke={slateOutline} strokeWidth="2" />
            <path d="M80 48 L120 48 L125 125 L75 125 Z" fill={slateBody} stroke={slateOutline} strokeWidth="2" />

            {/* GLOWING RED HIGHLIGHTED BICEPS */}
            <g className="red-muscle-glow">
              <ellipse cx="62" cy="85" rx="14" ry="20" fill={redGlow} filter="drop-shadow(0 0 10px rgba(255, 61, 0, 0.95))" />
              <ellipse cx="138" cy="85" rx="14" ry="20" fill={redGlow} filter="drop-shadow(0 0 10px rgba(255, 61, 0, 0.95))" />
            </g>

            {/* Barbell */}
            <line x1="30" y1="85" x2="170" y2="85" stroke={equipmentSilver} strokeWidth="5" strokeLinecap="round" />
          </g>
        );

      case 'triceps':
        return (
          <g>
            <circle cx="100" cy="35" r="13" fill="#475569" stroke={slateOutline} strokeWidth="2" />
            <path d="M80 48 L120 48 L125 125 L75 125 Z" fill={slateBody} stroke={slateOutline} strokeWidth="2" />

            {/* GLOWING RED HIGHLIGHTED TRICEPS */}
            <g className="red-muscle-glow">
              <path d="M66 52 L52 105 L64 108 L78 62 Z" fill={redGlow} filter="drop-shadow(0 0 10px rgba(255, 61, 0, 0.95))" />
              <path d="M134 52 L148 105 L136 108 L122 62 Z" fill={redGlow} filter="drop-shadow(0 0 10px rgba(255, 61, 0, 0.95))" />
            </g>
          </g>
        );

      case 'abs':
      default:
        return (
          <g>
            <circle cx="100" cy="32" r="13" fill="#475569" stroke={slateOutline} strokeWidth="2" />
            <path d="M80 45 L120 45 L125 95 L75 95 Z" fill={slateBody} stroke={slateOutline} strokeWidth="2" />

            {/* GLOWING RED HIGHLIGHTED ABS & CORE BRACE */}
            <g className="red-muscle-glow">
              <rect x="78" y="95" width="44" height="68" rx="8" fill={redGlow} filter="drop-shadow(0 0 12px rgba(255, 61, 0, 1))" />
              <rect x="84" y="102" width="32" height="54" rx="4" fill={redSoft} opacity="0.8" />
            </g>

            {/* Lower Body */}
            <path d="M75 163 L125 163 L118 245 L82 245 Z" fill={slateBody} stroke={slateOutline} strokeWidth="1.5" />
          </g>
        );
    }
  };

  return (
    <div className="anatomical-card-container">
      <svg viewBox="0 0 200 270" className="anatomical-card-svg">
        {/* Dark Modern Card Canvas */}
        <rect width="200" height="270" rx="14" fill="#090D16" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="2" />

        {/* Blueprint Grid Lines */}
        <line x1="0" y1="45" x2="200" y2="45" stroke="rgba(255,255,255,0.03)" strokeDasharray="3 3" />
        <line x1="0" y1="225" x2="200" y2="225" stroke="rgba(255,255,255,0.03)" strokeDasharray="3 3" />
        <line x1="100" y1="0" x2="100" y2="270" stroke="rgba(255,255,255,0.03)" strokeDasharray="3 3" />

        {/* Render Vector Anatomical Figure */}
        {renderSVGAnatomy()}

        {/* Exercise Name Badge */}
        <rect x="10" y="235" width="180" height="26" rx="6" fill="rgba(18, 24, 36, 0.95)" stroke="rgba(255, 61, 0, 0.4)" strokeWidth="1" />
        <text x="100" y="252" fill="#F8FAFC" fontSize="10" fontWeight="800" textAnchor="middle" fontFamily="Outfit, sans-serif">
          {name.toUpperCase()}
        </text>
      </svg>
    </div>
  );
}
