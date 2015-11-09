import {Routine} from '../models/routine';
import {Lift} from '../models/lift';

const routines: Routine[] = [
	new Routine(1, 'Chest & Calves', [
		new Lift(3, 'Incline Barbell Bench Press'),
		new Lift(3, 'Incline Dumbell Bench Press'),
		new Lift(3, 'Flat Barbell Bench Press'),
		new Lift(3, '(Optional) Dip'),
		new Lift(3, 'Calf Workout A')
	]),
	new Routine(2, 'Back & Abs', [
		new Lift(3, 'Deadlift'),
		new Lift(3, 'Barbell Row'),
		new Lift(3, 'Wide-Grip Pull-up or Chin-Up'),
		new Lift(3, 'Close-grip lat pulldown'),
		new Lift(3, 'Barbell shurgs'),
		new Lift(3, 'Ab Circuits')
	]), 
	new Routine(3, 'Shoulders & Calves', [
		new Lift(3, 'Barbell Military Press'),
		new Lift(3, 'Side Lateral Raise'),
		new Lift(3, 'Bent-over Rear Delt Raise'),
		new Lift(3, 'Face Pulls'),
		new Lift(3, 'Calf Workout B')
	]), new Routine(4, 'Upper Body & Abs', [
		new Lift(3, 'Incline Barbell Benchpress'),
		new Lift(3, 'Barbell Curl'),
		new Lift(3, 'Close-Grip Bench Press'),
		new Lift(3, 'Alternating Dumbbell Curl'),
		new Lift(3, 'Seated Triceps Press'),
		new Lift(3, 'Ab Circuits')
	]), new Routine(5, 'Legs and Shoulders', [
		new Lift(3, 'Barbell Squat'),
		new Lift(3, 'Leg Press'),
		new Lift(3, 'Romanian Deadlift'),
		new Lift(3, 'Side Lateral Raise'),
		new Lift(3, 'Bent-Over Rear Delt Raise'),
		new Lift(3, 'Calc Workout C')
	])
]

export const ROUTINES = routines;