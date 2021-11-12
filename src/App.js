import logo from './logo.svg';
import './App.css';
import { Routes, Route, Outlet} from "react-router-dom";
import Layout from './layout';
import Main from './main'
import Game from './game'
import { useState } from 'react';

// let val;
// let playerPairs=[];


function App() {
  let [playerPairs,setPlayerPairs]=useState([])
  let[val,setNum]=useState(0);

  function setVals(values,pairs){
        val=values;
        // setNum(values)
        console.log(val)
        console.log(pairs)
        for(let i=0;i<pairs.length;i++){
          playerPairs.push(pairs[i]);
          // playerPairs.push([key,value]);
        }
        alert('successfully called ' + val);
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main func={setVals}/>} />
          {/* <Route default path="main" element={<Main func={setVals}/>} /> */}
          <Route path="game" element={<Game func={setVals} val={val} playerPairs={playerPairs}/>} />
          {/* <Route path="*" element={<Main func={setVals}/>} /> */}
          {/* <Route path="/" element={<App />}>   */}

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        </Route>
      </Routes>
    </div>
    
  );
}


export default App;
