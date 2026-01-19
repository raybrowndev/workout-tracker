import React from 'react'
import WorkoutTracker from './components/WorkoutTracker';
import { Headers, LargeHeader } from './components/Headers';
import PersonalBest from './components/PersonalBest';

function App() {
  return (
    <>
    <Headers title="Headers: Progressive Overload Tracker">
      </Headers>
    <LargeHeader title={'Large Modern Header 1'} />
    <LargeHeader title={'Large Modern Header 2'}>
    <span>the best in the world</span>
    </LargeHeader>

    <WorkoutTracker />
    <PersonalBest />
    </>
  )
}

export default App;
