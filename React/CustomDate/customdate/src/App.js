import React, { useState } from 'react';

import data from'./YearData.json'

import './App.css';

import Dialog from './Dialog';
import YearWidget from './YearWidget/YearWidget';
import QuarterWidget from './QuarterWidget/QuarterWidget';
import WeekWidget from './WeekWidget/WeekWidget';

function App() {

  const [open, setOpen] = useState(false)
  const [activeYear, setActiveYear] = useState(true)
  const [activeQuarter, setActiveQuarter] = useState(false)
  const [activeWeek, setActiveWeek] = useState(false)

  const onActiveYear = () => {
    setActiveYear(true)
    setActiveQuarter(false)
    setActiveWeek(false)
  }

  const onActiveQuarter = () => {
    setActiveQuarter(true)
    setActiveWeek(false)
    setActiveYear(false)
  }

  const onActiveWeek = () => {
    setActiveWeek(true)
    setActiveYear(false)
    setActiveQuarter(false)
  }

  return (
    <div>
      <button onClick={() => setOpen(true)}>open</button>
      <Dialog open={open} handleClose={() => setOpen(false)}>
        <div className='header'>

          {activeYear && !activeQuarter && !activeWeek ?
          <span   className='activeItems'>Year</span> : <span  onClick={() => onActiveYear(true)} className='items'>Year</span> }

            {activeQuarter && !activeWeek && !activeYear ?
          <span   className='activeItems'>Quarter</span> : <span  onClick={() => onActiveQuarter(true)} className='items'>Quarter</span> }

          {activeWeek && !activeQuarter && !activeYear ?
          <span   className='activeItems'>Week</span> : <span  onClick={() => onActiveWeek(true)} className='items'>Week</span> }
        </div>

        <div>
        {activeYear && !activeQuarter && !activeWeek && <YearWidget data={data}/>}
        {activeQuarter && !activeWeek && !activeYear && <QuarterWidget/>}
        {activeWeek && !activeQuarter && !activeYear && <WeekWidget/>}
        </div>
        <div className='footer'>
          <button className='cancel'>Cancel</button>
          <button className='apply'>Apply</button>
          </div>
      </Dialog>
    </div>
  );
}

export default App;
