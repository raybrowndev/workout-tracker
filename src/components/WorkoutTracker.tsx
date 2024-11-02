import React, { useReducer } from "react";

const initialState = {
  weight: "",
  reps: 0,
  date: "",
  entries: [],
  workouts: [
    "Squats 🏋️‍♀️",
    "Leg Press",
    "Bench Press",
    "Lateral Pull-Down",
    "Seated Row",
    "Pull-Ups",
    "Romanian Deadlift",
    "Arm Raises",
  ],
  selectedWorkout: "Squats",
  newWorkout: "",
};


const reducer = (state, action) => {
  switch (action.type) {
    case "SET_WEIGHT":
      return { ...state, weight: action.payload };
    case "ADD_REP":
      return { ...state, reps: state.reps + 10 };
    case "REMOVE_REP":
      return { ...state, reps: Math.max(state.reps - 1, 0) };
    case "SET_DATE":
      return { ...state, date: action.payload };
    case "SET_SELECTED_WORKOUT":
      return { ...state, selectedWorkout: action.payload };
    case "SAVE_WORKOUT":
      const newEntry = {
        date: new Date(state.date).getTime(), // Store date as a timestamp for sorting
        displayDate: new Date(state.date).toLocaleDateString("en-GB", {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
        workout: state.selectedWorkout,
        weight: `${state.weight} kg`,
        reps: state.reps,
      };
      return {
        ...state,
        entries: [...state.entries, newEntry],
        weight: "",
        reps: 0,
        date: "",
      };
    case "ADD_WORKOUT":
      if (state.newWorkout && !state.workouts.includes(state.newWorkout)) {
        return {
          ...state,
          workouts: [...state.workouts, state.newWorkout],
          newWorkout: "",
        };
      }
      return state;
    case "SET_NEW_WORKOUT":
      return { ...state, newWorkout: action.payload };
    default:
      return state;
  }
};

const WorkoutTracker = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleWeightChange = (e) => dispatch({ type: "SET_WEIGHT", payload: e.target.value });
  const handleDateChange = (e) => dispatch({ type: "SET_DATE", payload: e.target.value });
  const handleWorkoutChange = (e) => dispatch({ type: "SET_SELECTED_WORKOUT", payload: e.target.value });
  const handleNewWorkoutChange = (e) => dispatch({ type: "SET_NEW_WORKOUT", payload: e.target.value });

  const handleSaveWorkout = () => {
    if (state.weight && state.reps > 0 && state.date) {
      dispatch({ type: "SAVE_WORKOUT" });
    }
  };

  const handleAddWorkout = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_WORKOUT" });
  };

  // Sort entries by date in ascending order (earliest to latest)
  const sortedEntries = state.entries.sort((a, b) => a.date - b.date);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-2">Workout Tracker</h1>

      <form onSubmit={handleAddWorkout} className="mb-4">
        <label className="block mb-2">
          <span>Add New Workout:</span>
          <input
            type="text"
            value={state.newWorkout}
            onChange={handleNewWorkoutChange}
            placeholder="Enter new workout"
            className="border border-gray-300 p-1 rounded mt-1"
          />
        </label>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          Add Workout
        </button>
      </form>

      <label className="block mb-2">
        <span>Select Workout:</span>
        <select
          value={state.selectedWorkout}
          onChange={handleWorkoutChange}
          className="border border-gray-300 p-1 rounded mt-1"
        >
          {state.workouts.map((workout, index) => (
            <option key={index} value={workout}>
              {workout}
            </option>
          ))}
        </select>
      </label>

      <label className="block mb-2">
        <span>Date:</span>
        <input
          type="date"
          value={state.date}
          onChange={handleDateChange}
          className="border border-gray-300 p-1 rounded mt-1"
        />
      </label>

      <label className="block mb-2">
        <span>Weight (kg):</span>
        <input
          type="number"
          value={state.weight}
          onChange={handleWeightChange}
          className="border border-gray-300 p-1 rounded mt-1"
        />
      </label>

      <div className="mb-4">
        <span>Reps: {state.reps}</span>
        <button onClick={() => dispatch({ type: "ADD_REP" })} className="mx-2 px-4 py-1 bg-green-600 text-white rounded">+10</button>
        <button onClick={() => dispatch({ type: "REMOVE_REP" })} className="px-4 py-1 bg-red-600 text-white rounded">-1</button>
      </div>

      <button
        onClick={handleSaveWorkout}
        disabled={!state.weight || state.reps === 0 || !state.date}
        className="px-4 py-2 bg-blue-600 text-white rounded mb-4"
      >
        Save Workout
      </button>

      <h2 className="text-xl mt-6">Workout History</h2>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Date</th>
            <th className="border border-gray-300 px-4 py-2">Workout</th>
            <th className="border border-gray-300 px-4 py-2">Weight</th>
            <th className="border border-gray-300 px-4 py-2">Reps</th>
          </tr>
        </thead>
        <tbody>
          {sortedEntries.map((entry, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{entry.displayDate}</td>
              <td className="border border-gray-300 px-4 py-2">{entry.workout}</td>
              <td className="border border-gray-300 px-4 py-2">{entry.weight}</td>
              <td className="border border-gray-300 px-4 py-2">{entry.reps}</td>
            </tr>
          ))}
          {sortedEntries.length === 0 && (
            <tr>
              <td colSpan="4" className="text-center py-2">No workouts logged yet.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default WorkoutTracker;



// forms in reacrt and how to malke them more frontend creative 
// table in react and how to display in order 
// date and time in react and how to make it display today's date - show example on my website "it's probably tuesday and ..."
// if field left blank, return value of N/A
