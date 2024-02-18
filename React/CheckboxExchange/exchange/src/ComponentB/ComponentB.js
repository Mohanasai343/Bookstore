import React from 'react'

import { useContext } from 'react'
import { userContext } from '../MainComponent/MainComponent'

import './ComponentB.css'

const ComponentB = () => {

  const {list2Data} = useContext(userContext)
  return (
    <div>
      <div className='comp_B'>
      <p className='compB_text'>Component-B</p>
      <div>
        {list2Data.map((item) => (
          <div className='data_checkbox'>
            <input type='checkbox' />
          <span>
            {item}
          </span>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default ComponentB