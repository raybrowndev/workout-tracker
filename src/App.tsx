import React from 'react'
import WorkoutTracker from './components/WorkoutTracker';
import { LargeHeader } from './components/Headers';
import PersonalBest from './components/PersonalBest';

function App() {
  return (
    <>
    <LargeHeader title={"Workout Tracker"} name={"User"}>
    <span>Track you progress and achieve goals.</span>
    </LargeHeader>

    <WorkoutTracker />
    <PersonalBest />
    </>
  )
}

export default App;
