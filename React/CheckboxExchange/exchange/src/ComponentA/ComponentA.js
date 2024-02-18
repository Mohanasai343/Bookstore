import React from 'react'

import { useContext } from 'react'

import { userContext } from '../MainComponent/MainComponent'

import './ComponentA.css'

const ComponentA = () => {

  const {list1Data, handlelist1Store, selectedCheckBox} = useContext(userContext)

  return (
    <div>
      <div className='comp_A'>
      <p className='compA_text'>Component-A</p> 
      <div>
        {list1Data.map((item, id) => (
          <div className='data_checkbox'>
            <input type='checkbox'  onChange={(e) => handlelist1Store(e, id)}/>
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

export default ComponentA
