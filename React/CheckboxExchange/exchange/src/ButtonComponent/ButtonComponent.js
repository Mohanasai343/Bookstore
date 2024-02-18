import React from 'react'

import { useContext } from 'react'
import { userContext } from '../MainComponent/MainComponent'

import {TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled} from 'react-icons/tb'
import {GrFormNext, GrFormPrevious} from 'react-icons/gr'

import './ButtonComponent.css'

const ButtonComponent = () => {

  const {handleFullDataNext, handleFullDataPrev, handleSingleDataNext} = useContext(userContext)
  return (
    <div>
      <div className='btn_icons'>
      <button onClick={handleFullDataNext}><TbPlayerTrackNextFilled/></button><p></p>
      <button onClick={handleSingleDataNext}><GrFormNext/></button><p></p>
      <button><GrFormPrevious/></button><p></p>
      <button onClick={handleFullDataPrev}><TbPlayerTrackPrevFilled/></button>
      </div>
    </div>
  )
}

export default ButtonComponent
