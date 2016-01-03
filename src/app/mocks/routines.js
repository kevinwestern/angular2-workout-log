var routine_1 = require('../models/routine');
var lift_1 = require('../models/lift');
var routines = [
    new routine_1.Routine('Chest & Calves', [
        new lift_1.Lift(3, 'Incline Barbell Bench Press'),
        new lift_1.Lift(3, 'Incline Dumbell Bench Press'),
        new lift_1.Lift(3, 'Flat Barbell Bench Press'),
        new lift_1.Lift(3, '(Optional) Dip'),
        new lift_1.Lift(3, 'Calf Workout A')
    ], 1451783702375),
    new routine_1.Routine('Back & Abs', [
        new lift_1.Lift(3, 'Deadlift'),
        new lift_1.Lift(3, 'Barbell Row'),
        new lift_1.Lift(3, 'Wide-Grip Pull-up or Chin-Up'),
        new lift_1.Lift(3, 'Close-grip lat pulldown'),
        new lift_1.Lift(3, 'Barbell shurgs'),
        new lift_1.Lift(3, 'Ab Circuits')
    ]),
    new routine_1.Routine('Shoulders & Calves', [
        new lift_1.Lift(3, 'Barbell Military Press'),
        new lift_1.Lift(3, 'Side Lateral Raise'),
        new lift_1.Lift(3, 'Bent-over Rear Delt Raise'),
        new lift_1.Lift(3, 'Face Pulls'),
        new lift_1.Lift(3, 'Calf Workout B')
    ]), new routine_1.Routine('Upper Body & Abs', [
        new lift_1.Lift(3, 'Incline Barbell Benchpress'),
        new lift_1.Lift(3, 'Barbell Curl'),
        new lift_1.Lift(3, 'Close-Grip Bench Press'),
        new lift_1.Lift(3, 'Alternating Dumbbell Curl'),
        new lift_1.Lift(3, 'Seated Triceps Press'),
        new lift_1.Lift(3, 'Ab Circuits')
    ]), new routine_1.Routine('Legs and Shoulders', [
        new lift_1.Lift(3, 'Barbell Squat'),
        new lift_1.Lift(3, 'Leg Press'),
        new lift_1.Lift(3, 'Romanian Deadlift'),
        new lift_1.Lift(3, 'Side Lateral Raise'),
        new lift_1.Lift(3, 'Bent-Over Rear Delt Raise'),
        new lift_1.Lift(3, 'Calc Workout C')
    ])
];
exports.ROUTINES = routines;
//# sourceMappingURL=routines.js.map