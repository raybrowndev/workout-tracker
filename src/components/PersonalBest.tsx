import React from 'react'

const PersonalBest = () => {
  return (
    <main className='rounded-[8px] bg-slate-900 p-10 text-white'>
      <div className='flex flex-col gap-3'>
        <h2 className='text-2xl font-semibold tracking-tight'>Personal Best</h2>
        <p className='text-sm text-slate-300'>
          Hey, User. Take a look at your personal best achievements of all time. You're doing great
        </p>
      </div>
      <div className='mt-8 grid grid-cols-1 gap-6 text-center sm:grid-cols-2 lg:grid-cols-4'>
        <div className='rounded-[8px] bg-slate-800/60 p-4'>
          <p className='text-3xl font-bold'>60kg</p>
          <p className='text-xs uppercase tracking-widest text-slate-300'>Squat</p>
        </div>
        <div className='rounded-[8px] bg-slate-800/60 p-4'>
          <p className='text-3xl font-bold'>45min</p>
          <p className='text-xs uppercase tracking-widest text-slate-300'>Stair Master</p>
        </div>
        <div className='rounded-[8px] bg-slate-800/60 p-4'>
          <p className='text-3xl font-bold'>85kg</p>
          <p className='text-xs uppercase tracking-widest text-slate-300'>Deadlift</p>
        </div>
        <div className='rounded-[8px] bg-slate-800/60 p-4'>
          <p className='text-3xl font-bold'>20</p>
          <p className='text-xs uppercase tracking-widest text-slate-300'>Pull-Ups</p>
        </div>
      </div>
    </main>
  )
}

export default PersonalBest


