import React, { createContext, useState } from 'react'


import ComponentA from '../ComponentA/ComponentA'
import ComponentB from '../ComponentB/ComponentB'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './MainComponent.css'

export const userContext = createContext()

const MainComponent = () => {

    const [list1Data, setList1Data] = useState(["1","2","3","4","5"])
    const [list2Data, setList2Data] = useState(["6","7","8"]) 
    const [inputValue, setInputValue] = useState()
    const [selectedCheckBox, setSelectedCheckBox] = useState([])

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = () => {
        const index = list1Data.findIndex(item => item.toLowerCase() === inputValue.toLowerCase())
        if(index > -1){
            return toast.error(`${inputValue}` +  " Already Exists")
        }
        let arr = [...list1Data]
        arr.push(inputValue)
        setList1Data(arr)
        toast.success("Added Successfully")
        setInputValue("")
    }

    const handleFullDataNext = () => {
        let combine1 = list1Data.concat(list2Data)
        setList2Data(combine1)
        setList1Data([])
    }

    const handleFullDataPrev = () => {
        let combine2 = list2Data.concat(list1Data)
        setList1Data(combine2)
        setList2Data([])
    }

    const handlelist1Store = (e, id) => {
        if(e.target.checked){
            setSelectedCheckBox(item => [...item,id])
        }else{
            setSelectedCheckBox(selectedCheckBox.filter((item) => item !== id) )
        }
    }

    const handleSingleDataNext = () => {
        let arr = [...list1Data]
        let rightArr = [...list2Data]
        selectedCheckBox.map((index) => {
            
            const val = list1Data[index]
            rightArr.push(val)
           
           arr = arr.filter(item => item !== val)
            
        })
        setList1Data(arr)
        setList2Data(rightArr)
        setSelectedCheckBox([])
    }


  return (
    <div>
        <div className='header'>
            <input placeholder='Enter Name' className='text_field' value={inputValue} onChange={handleChange}/>
            <button className='submit_btn' disabled={!inputValue} onClick={handleSubmit}>Add</button>
        </div>
        <div className='component_div'>
            <userContext.Provider value={{list1Data, list2Data, handleFullDataNext, handleFullDataPrev, handlelist1Store, selectedCheckBox, handleSingleDataNext}}>
      <ComponentA/>
      <ButtonComponent/>
      <ComponentB/>
      </userContext.Provider>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}

export default MainComponent
