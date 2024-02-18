import MainComponent from './MainComponent';


import Maindata from './TableData.json'
import data from './ConvertData.json'

import './App.css';

function App() {
  return (
    <div>
      <MainComponent Maindata={Maindata} data={data}/>
    </div>
  );
}

export default App;
