import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';

function App() {
  const [data,setData] = useState("");
  useEffect(()=>{
    const fetchData = async() => {
     const apiResp =  await axios.get('https://randomuser.me/api/')
     setData(apiResp.data);
     console.log(apiResp);
    }
    fetchData();
  },[])
  return (
    <div className="App">
        <Navbar data={data}/>
        <br></br>
        <h1>Profile Information:</h1>
        <br></br>
       <Home data = {data}/>      
    </div>
  );
}

export default App;
