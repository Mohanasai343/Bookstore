import React,{ createContext,useState } from 'react';
import Colours from './Colours'
import Component1 from './Component1';
import Context from './Context';
import data from './Api.json'
import './App.css';

export const store = createContext()

function App() {
  const [list,setList] = useState(data)
  const [timePeriod,setTimePeriod] = useState(" ")
  const [geo,setGeo] = useState(" ")
  const [rtm,setRtm] = useState(" ")
  const [partnergroup,setPartnerGroup] = useState(" ")
  const [partner,setPartner] = useState(" ")
  return (
    <div>
      {/* <store.Provider value={{list,setList, timePeriod,setTimePeriod,geo,setGeo,rtm,setRtm,partnergroup,setPartnerGroup,partner,setPartner}}>
      <Component1/>
      <Context/>
      </store.Provider> */}
      <Colours/>
    </div>
  );
}

export default App;
