import MainComponent from './MainComponent';
import { createContext, useState } from 'react';
import './App.css';

export const matter = createContext();

function App() {
  
  const [name,setName] = useState()

  return (
    <div>
      
      <matter.Provider value={[name,setName]}>
        <MainComponent/>
        </matter.Provider>
    </div>
  );
}

export default App;
