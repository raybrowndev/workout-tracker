import React from 'react'
import WorkoutTracker from './components/WorkoutTracker';
import { Headers } from './components/Headers';

function App() {
  return (
    <>
    <h1 className="text-3xl font-bold underline text-red-300">
      Hello world!
    </h1>
    <Headers title={'Progressive Overload Tracker'} />
    <WorkoutTracker />
  
    </>
  )
}

export default App;
