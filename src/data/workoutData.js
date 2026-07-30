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
        defaultWeight: 60
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
        defaultWeight: 50
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
        defaultWeight: 100
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
        defaultWeight: 14
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
        defaultWeight: 0
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
        defaultWeight: 0
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
        defaultWeight: 0
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
        defaultWeight: 70
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
        defaultWeight: 22
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
        defaultWeight: 18
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
        defaultWeight: 8
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
        defaultWeight: 0
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
        defaultWeight: 25
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
        defaultWeight: 20
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
        defaultWeight: 60
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
        defaultWeight: 50
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
        defaultWeight: 55
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
        defaultWeight: 15
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
        defaultWeight: 30
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
        defaultWeight: 14
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
        defaultWeight: 24
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
