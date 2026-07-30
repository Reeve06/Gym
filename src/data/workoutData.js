export const WORKOUT_SCHEDULE = {
  friday: {
    id: 'friday',
    dayName: 'Friday',
    title: 'Legs & Core Overhaul',
    category: 'Legs & Core',
    badgeColor: '#00E676', // Electric Green
    accentGradient: 'linear-gradient(135deg, #00E676 0%, #00B0FF 100%)',
    description: 'Build powerful lower body drive, bulletproof knees, and rock-solid core stability.',
    targetMuscles: ['Quadriceps', 'Hamstrings', 'Glutes', 'Calves', 'Rectus Abdominis', 'Obliques', 'Lower Back'],
    cardioMinutes: 30,
    trainerNote: "Friday is leg day! Focus on deep depth on squats and maintain a flat lumbar spine on Romanian deadlifts. Do NOT skip your 30-minute cardio post-lifting!",
    exercises: [
      {
        id: 'leg-1',
        name: 'Barbell Back Squat',
        target: 'Quadriceps, Glutes, Core',
        sets: 4,
        suggestedReps: '8-10',
        restSeconds: 90,
        tip: 'Keep chest high, break at hips and knees simultaneously. Drive through heels.',
        image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&auto=format&fit=crop&q=80',
        defaultWeight: 60,
        primaryMuscleZone: 'quads',
        activationBreakdown: [
          { muscle: 'Quadriceps', percent: 60, color: '#FF3D00' },
          { muscle: 'Gluteus Maximus', percent: 25, color: '#FF7043' },
          { muscle: 'Core / Abs', percent: 15, color: '#FFAB00' }
        ],
        tempo: '3-1-1 (3s down, 1s pause, 1s burst up)'
      },
      {
        id: 'leg-2',
        name: 'Romanian Deadlift (RDL)',
        target: 'Hamstrings, Glutes, Lower Back',
        sets: 4,
        suggestedReps: '10-12',
        restSeconds: 90,
        tip: 'Hinge at the hips, keeping bar close to shins. Feel the stretch in hamstrings.',
        image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=80',
        defaultWeight: 50,
        primaryMuscleZone: 'hamstrings',
        activationBreakdown: [
          { muscle: 'Hamstrings', percent: 55, color: '#FF3D00' },
          { muscle: 'Gluteus Maximus', percent: 30, color: '#FF7043' },
          { muscle: 'Erector Spinae (Lower Back)', percent: 15, color: '#FFAB00' }
        ],
        tempo: '3-1-1 (3s stretch down, 1s pause, 1s pull up)'
      },
      {
        id: 'leg-3',
        name: 'Leg Press Machine',
        target: 'Quads & Glute Max',
        sets: 3,
        suggestedReps: '12-15',
        restSeconds: 60,
        tip: 'Feet shoulder-width apart. Do not lock out knees forcefully at top.',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=80',
        defaultWeight: 100,
        primaryMuscleZone: 'quads',
        activationBreakdown: [
          { muscle: 'Quadriceps', percent: 70, color: '#FF3D00' },
          { muscle: 'Gluteus Maximus', percent: 20, color: '#FF7043' },
          { muscle: 'Calves', percent: 10, color: '#FFAB00' }
        ],
        tempo: '2-0-1 (2s lower, 1s press)'
      },
      {
        id: 'leg-4',
        name: 'Walking DB Lunges',
        target: 'Quads, Glutes & Balance',
        sets: 3,
        suggestedReps: '12 reps / leg',
        restSeconds: 60,
        tip: 'Upright torso, knee tracks over 2nd toe. Touch rear knee lightly to ground.',
        image: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=600&auto=format&fit=crop&q=80',
        defaultWeight: 14,
        primaryMuscleZone: 'quads',
        activationBreakdown: [
          { muscle: 'Quadriceps', percent: 50, color: '#FF3D00' },
          { muscle: 'Glute Medius & Max', percent: 35, color: '#FF7043' },
          { muscle: 'Core Stability', percent: 15, color: '#FFAB00' }
        ],
        tempo: '2-1-1 (2s drop, 1s drive forward)'
      },
      {
        id: 'core-1',
        name: 'Hanging Leg Raises',
        target: 'Lower Abs & Hip Flexors',
        sets: 4,
        suggestedReps: '15',
        restSeconds: 45,
        tip: 'Control the swing. Curl pelvis upward at top of movement for maximum ab contraction.',
        image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=600&auto=format&fit=crop&q=80',
        defaultWeight: 0,
        primaryMuscleZone: 'abs',
        activationBreakdown: [
          { muscle: 'Lower Rectus Abdominis', percent: 65, color: '#FF3D00' },
          { muscle: 'Iliopsoas (Hip Flexors)', percent: 25, color: '#FF7043' },
          { muscle: 'Obliques', percent: 10, color: '#FFAB00' }
        ],
        tempo: '2-1-2 (2s up, 1s squeeze top, 2s lower)'
      },
      {
        id: 'core-2',
        name: 'Ab Rollout (Wheel or DB)',
        target: 'Core & Transverse Abdominis',
        sets: 3,
        suggestedReps: '12-15',
        restSeconds: 45,
        tip: 'Keep glutes squeezed and abs braced. Only extend as far as lower back stays flat.',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&auto=format&fit=crop&q=80',
        defaultWeight: 0,
        primaryMuscleZone: 'abs',
        activationBreakdown: [
          { muscle: 'Transverse Abdominis', percent: 60, color: '#FF3D00' },
          { muscle: 'Lats & Serratus', percent: 25, color: '#FF7043' },
          { muscle: 'Rectus Abdominis', percent: 15, color: '#FFAB00' }
        ],
        tempo: '3-1-1 (3s rollout, 1s pause, 1s contract back)'
      },
      {
        id: 'core-3',
        name: 'Weighted Plank Hold',
        target: 'Core Isometric Stability',
        sets: 3,
        suggestedReps: '60 Seconds',
        restSeconds: 45,
        tip: 'Squeeze glutes, push floor away through elbows. No arching in lumbar spine.',
        image: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=600&auto=format&fit=crop&q=80',
        defaultWeight: 0,
        primaryMuscleZone: 'abs',
        activationBreakdown: [
          { muscle: 'Core Brace (All Abs)', percent: 70, color: '#FF3D00' },
          { muscle: 'Glutes & Shoulders', percent: 20, color: '#FF7043' },
          { muscle: 'Quads', percent: 10, color: '#FFAB00' }
        ],
        tempo: 'Isometric Hold (60s continuous brace)'
      }
    ]
  },
  saturday: {
    id: 'saturday',
    dayName: 'Saturday',
    title: 'Push Power Matrix',
    category: 'Chest, Shoulders & Triceps',
    badgeColor: '#00B0FF', // Electric Blue
    accentGradient: 'linear-gradient(135deg, #00B0FF 0%, #7C4DFF 100%)',
    description: 'Target press strength, upper chest fullness, 3D deltoids, and dense triceps.',
    targetMuscles: ['Pectoralis Major', 'Upper Chest', 'Anterior Deltoid', 'Lateral Deltoid', 'Triceps Long & Lateral Heads'],
    cardioMinutes: 30,
    trainerNote: "Saturday Push Day! Retract your shoulder blades for bench presses to protect your shoulder joints. 30 minutes of cardio is mandatory after pressing!",
    exercises: [
      {
        id: 'push-1',
        name: 'Barbell Bench Press',
        target: 'Mid/Lower Chest, Triceps',
        sets: 4,
        suggestedReps: '8-10',
        restSeconds: 90,
        tip: 'Pinch shoulder blades together, arch upper back slightly, drive feet into ground.',
        image: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?w=600&auto=format&fit=crop&q=80',
        defaultWeight: 70,
        primaryMuscleZone: 'chest',
        activationBreakdown: [
          { muscle: 'Pectoralis Major (Mid Chest)', percent: 60, color: '#FF3D00' },
          { muscle: 'Triceps Brachii', percent: 25, color: '#FF7043' },
          { muscle: 'Anterior Deltoid', percent: 15, color: '#FFAB00' }
        ],
        tempo: '2-1-1 (2s lower to chest, 1s touch, 1s press up)'
      },
      {
        id: 'push-2',
        name: 'Incline DB Press (30° Angle)',
        target: 'Upper Pectoralis & Front Delts',
        sets: 4,
        suggestedReps: '10-12',
        restSeconds: 90,
        tip: 'Set bench to 30 degrees. Lower DBs smoothly with elbows at ~45 degree angle.',
        image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&auto=format&fit=crop&q=80',
        defaultWeight: 22,
        primaryMuscleZone: 'chest',
        activationBreakdown: [
          { muscle: 'Upper Pectoralis Clavicular Head', percent: 65, color: '#FF3D00' },
          { muscle: 'Anterior Deltoid', percent: 20, color: '#FF7043' },
          { muscle: 'Triceps', percent: 15, color: '#FFAB00' }
        ],
        tempo: '3-0-1 (3s controlled descent, 1s explode)'
      },
      {
        id: 'push-3',
        name: 'Seated DB Shoulder Press',
        target: 'Anterior & Lateral Deltoids',
        sets: 3,
        suggestedReps: '8-10',
        restSeconds: 75,
        tip: 'Press dumbbells overhead without hyperextending lower back.',
        image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&auto=format&fit=crop&q=80',
        defaultWeight: 18,
        primaryMuscleZone: 'shoulders',
        activationBreakdown: [
          { muscle: 'Anterior Deltoid', percent: 55, color: '#FF3D00' },
          { muscle: 'Lateral Deltoid', percent: 25, color: '#FF7043' },
          { muscle: 'Triceps Long Head', percent: 20, color: '#FFAB00' }
        ],
        tempo: '2-1-1 (2s lower to ear level, 1s overhead press)'
      },
      {
        id: 'push-4',
        name: 'Cable Lateral Raises',
        target: 'Lateral Deltoids (Shoulder Width)',
        sets: 4,
        suggestedReps: '12-15',
        restSeconds: 45,
        tip: 'Slight forward lean, raise pinky side slightly higher. Controlled 2-sec eccentric.',
        image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&auto=format&fit=crop&q=80',
        defaultWeight: 8,
        primaryMuscleZone: 'shoulders',
        activationBreakdown: [
          { muscle: 'Lateral Deltoid (Side Cap)', percent: 80, color: '#FF3D00' },
          { muscle: 'Supraspinatus', percent: 12, color: '#FF7043' },
          { muscle: 'Upper Trapezius', percent: 8, color: '#FFAB00' }
        ],
        tempo: '2-1-2 (2s raise, 1s peak squeeze, 2s lower)'
      },
      {
        id: 'push-5',
        name: 'Parallel Bar Dips',
        target: 'Lower Chest & Triceps',
        sets: 3,
        suggestedReps: '10-12',
        restSeconds: 60,
        tip: 'Lean forward slightly for chest emphasis, keep elbows tucked.',
        image: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=600&auto=format&fit=crop&q=80',
        defaultWeight: 0,
        primaryMuscleZone: 'triceps',
        activationBreakdown: [
          { muscle: 'Lower Pectoralis & Triceps', percent: 60, color: '#FF3D00' },
          { muscle: 'Anterior Deltoid', percent: 25, color: '#FF7043' },
          { muscle: 'Core Brace', percent: 15, color: '#FFAB00' }
        ],
        tempo: '2-1-1 (2s lower, 1s lockout)'
      },
      {
        id: 'push-6',
        name: 'Tricep Rope Pushdowns',
        target: 'Triceps Lateral & Short Head',
        sets: 4,
        suggestedReps: '12-15',
        restSeconds: 45,
        tip: 'Keep upper arms pinned to your torso. Spread rope apart at bottom lockout.',
        image: 'https://images.unsplash.com/photo-1530822847156-5df684ec5ee1?w=600&auto=format&fit=crop&q=80',
        defaultWeight: 25,
        primaryMuscleZone: 'triceps',
        activationBreakdown: [
          { muscle: 'Triceps Lateral Head', percent: 70, color: '#FF3D00' },
          { muscle: 'Triceps Medial Head', percent: 20, color: '#FF7043' },
          { muscle: 'Forearm Flexors', percent: 10, color: '#FFAB00' }
        ],
        tempo: '2-1-1 (2s return, 1s spread lockout)'
      },
      {
        id: 'push-7',
        name: 'Overhead DB Tricep Extension',
        target: 'Triceps Long Head Stretch',
        sets: 3,
        suggestedReps: '10-12',
        restSeconds: 60,
        tip: 'Keep elbows pointing forward. Lower weight deep behind head to stretch long head.',
        image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=600&auto=format&fit=crop&q=80',
        defaultWeight: 20,
        primaryMuscleZone: 'triceps',
        activationBreakdown: [
          { muscle: 'Triceps Long Head', percent: 80, color: '#FF3D00' },
          { muscle: 'Anterior Deltoid Stabilizer', percent: 20, color: '#FF7043' }
        ],
        tempo: '3-1-1 (3s stretch behind head, 1s extension)'
      }
    ]
  },
  sunday: {
    id: 'sunday',
    dayName: 'Sunday',
    title: 'Pull & V-Taper Hypertrophy',
    category: 'Back, Rear Delts & Biceps',
    badgeColor: '#FF3D00', // Neon Flame/Orange
    accentGradient: 'linear-gradient(135deg, #FF3D00 0%, #FFAB00 100%)',
    description: 'Forge lat width, thick mid-back detail, rear delt posture, and massive biceps.',
    targetMuscles: ['Latissimus Dorsi', 'Rhomboids', 'Trapezius', 'Rear Deltoid', 'Biceps Brachii', 'Brachialis'],
    cardioMinutes: 30,
    trainerNote: "Sunday Pull Day! Pull with your elbows, not your hands, to maximize lat engagement. Finish your 3-day split strong with 30 mins of cardio!",
    exercises: [
      {
        id: 'pull-1',
        name: 'Barbell Bent-Over Row',
        target: 'Mid-Back, Lats & Rhomboids',
        sets: 4,
        suggestedReps: '8-10',
        restSeconds: 90,
        tip: 'Hinge forward at 45 degrees, pull barbell into belly button area.',
        image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600&auto=format&fit=crop&q=80',
        defaultWeight: 60,
        primaryMuscleZone: 'back',
        activationBreakdown: [
          { muscle: 'Latissimus Dorsi & Rhomboids', percent: 55, color: '#FF3D00' },
          { muscle: 'Rear Deltoids & Traps', percent: 25, color: '#FF7043' },
          { muscle: 'Biceps Brachii', percent: 20, color: '#FFAB00' }
        ],
        tempo: '2-1-1 (2s lower, 1s row to navel)'
      },
      {
        id: 'pull-2',
        name: 'Wide-Grip Lat Pulldown',
        target: 'Latissimus Dorsi (V-Taper Width)',
        sets: 4,
        suggestedReps: '10-12',
        restSeconds: 75,
        tip: 'Pull bar to upper chest, drive elbows down toward hip pockets.',
        image: 'https://images.unsplash.com/photo-1598266663439-2056e6900339?w=600&auto=format&fit=crop&q=80',
        defaultWeight: 50,
        primaryMuscleZone: 'back',
        activationBreakdown: [
          { muscle: 'Latissimus Dorsi (V-Taper)', percent: 70, color: '#FF3D00' },
          { muscle: 'Teres Major & Rear Delts', percent: 18, color: '#FF7043' },
          { muscle: 'Biceps', percent: 12, color: '#FFAB00' }
        ],
        tempo: '3-1-1 (3s stretch up, 1s pull down)'
      },
      {
        id: 'pull-3',
        name: 'Seated Cable Row (Close Grip)',
        target: 'Rhomboids & Lower Traps',
        sets: 3,
        suggestedReps: '10-12',
        restSeconds: 60,
        tip: 'Squeeze shoulder blades hard at peak contraction. Control return stretch.',
        image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&auto=format&fit=crop&q=80',
        defaultWeight: 55,
        primaryMuscleZone: 'back',
        activationBreakdown: [
          { muscle: 'Rhomboids & Mid-Traps', percent: 60, color: '#FF3D00' },
          { muscle: 'Lats Lower Fibers', percent: 25, color: '#FF7043' },
          { muscle: 'Brachialis / Biceps', percent: 15, color: '#FFAB00' }
        ],
        tempo: '2-1-2 (2s row, 1s hold, 2s release)'
      },
      {
        id: 'pull-4',
        name: 'Rope Face Pulls',
        target: 'Rear Deltoids & External Rotators',
        sets: 4,
        suggestedReps: '15',
        restSeconds: 45,
        tip: 'Pull rope toward forehead while separating hands. Great for shoulder joint health.',
        image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&auto=format&fit=crop&q=80',
        defaultWeight: 15,
        primaryMuscleZone: 'back',
        activationBreakdown: [
          { muscle: 'Rear Deltoid (Posterior)', percent: 65, color: '#FF3D00' },
          { muscle: 'Infraspinatus & Teres Minor', percent: 25, color: '#FF7043' },
          { muscle: 'Upper Trapezius', percent: 10, color: '#FFAB00' }
        ],
        tempo: '2-1-1 (2s pull to eyes, 1s peak squeeze)'
      },
      {
        id: 'pull-5',
        name: 'Standing Barbell Bicep Curl',
        target: 'Biceps Brachii (Short & Long Head)',
        sets: 4,
        suggestedReps: '10-12',
        restSeconds: 60,
        tip: 'Keep elbows fixed at sides. Avoid momentum or swinging lumbar spine.',
        image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&auto=format&fit=crop&q=80',
        defaultWeight: 30,
        primaryMuscleZone: 'biceps',
        activationBreakdown: [
          { muscle: 'Biceps Brachii (Both Heads)', percent: 75, color: '#FF3D00' },
          { muscle: 'Brachialis', percent: 15, color: '#FF7043' },
          { muscle: 'Brachioradialis (Forearm)', percent: 10, color: '#FFAB00' }
        ],
        tempo: '2-1-2 (2s curl up, 1s squeeze top, 2s lower)'
      },
      {
        id: 'pull-6',
        name: 'Incline DB Hammer Curls',
        target: 'Brachialis & Forearm Width',
        sets: 3,
        suggestedReps: '12',
        restSeconds: 45,
        tip: 'Palms facing each other (neutral grip). Maximizes arm thickness.',
        image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&auto=format&fit=crop&q=80',
        defaultWeight: 14,
        primaryMuscleZone: 'biceps',
        activationBreakdown: [
          { muscle: 'Brachialis & Forearm', percent: 65, color: '#FF3D00' },
          { muscle: 'Biceps Long Head', percent: 25, color: '#FF7043' },
          { muscle: 'Grip Strength', percent: 10, color: '#FFAB00' }
        ],
        tempo: '2-0-2 (2s up, 2s down)'
      },
      {
        id: 'pull-7',
        name: 'Dumbbell Shrugs',
        target: 'Upper Trapezius',
        sets: 3,
        suggestedReps: '12-15',
        restSeconds: 45,
        tip: 'Elevate shoulders directly towards ears, pause for 1 sec at top.',
        image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&auto=format&fit=crop&q=80',
        defaultWeight: 24,
        primaryMuscleZone: 'back',
        activationBreakdown: [
          { muscle: 'Upper Trapezius', percent: 85, color: '#FF3D00' },
          { muscle: 'Levator Scapulae', percent: 15, color: '#FF7043' }
        ],
        tempo: '2-1-2 (2s elevate, 1s pause top, 2s lower)'
      }
    ]
  }
};

export const CARDIO_PRESETS = [
  { id: 'treadmill', name: 'Incline Treadmill Walk', speed: '4.5 km/h', incline: '10-12%', estCaloriesPer30: 260 },
  { id: 'bike', name: 'Stationary Bike (Zone 2)', speed: '20 km/h', resistance: 'Moderate', estCaloriesPer30: 240 },
  { id: 'stairmaster', name: 'Stairmaster Climber', speed: 'Level 7', incline: 'Steep', estCaloriesPer30: 320 },
  { id: 'rowing', name: 'Concept2 Rower', speed: '2:10 pace', resistance: 'Damper 5', estCaloriesPer30: 280 },
  { id: 'hiit', name: 'HIIT Cardio Intervals', speed: 'Sprint / Walk', incline: 'Variable', estCaloriesPer30: 350 }
];
