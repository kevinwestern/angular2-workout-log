import {Routine} from '../models/routine';

const routines: Routine[] = [
	new Routine('Chest & Calves', [
		'Incline Barbell Bench Press',
		'Incline Dumbell Bench Press',
		'Flat Barbell Bench Press',
		'(Optional) Dip',
		'Calf Workout A'
	]),
	new Routine('Back & Abs', [
		'Deadlift',
		'Barbell Row',
		'Wide-Grip Pull-up or Chin-Up',
		'Close-grip lat pulldown',
		'Barbell shurgs',
		'Ab Circuits'
	]), 
	new Routine('Shoulders & Calves', [
		'Barbell Military Press',
		'Side Lateral Raise',
		'Bent-over Rear Delt Raise',
		'Face Pulls',
		'Calf Workout B'
	]), new Routine('Upper Body & Abs', [
		'Incline Barbell Benchpress',
		'Barbell Curl',
		'Close-Grip Bench Press',
		'Alternating Dumbbell Curl',
		'Seated Triceps Press',
		'Ab Circuits'
	]), new Routine('Legs and Shoulders', [
		'Barbell Squat',
		'Leg Press',
		'Romanian Deadlift',
		'Side Lateral Raise',
		'Bent-Over Rear Delt Raise',
		'Calc Workout C'
	])
]

export const ROUTINES = routines;