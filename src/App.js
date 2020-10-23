import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Item from './components/Item';


const App = () => {
  const[array,setArray] =useState([]);
  useEffect(() => {
    const fetch=async() =>{
      const res =await  axios.get(" http://starlord.hackerearth.com/recipe");
      setArray(res.data);
      
    }
    fetch();
    
  }, [])

  /*useEffect(() =>{
    const sortArray = type =>{
      const types={
        likes:'likes'
      };
      const sortProperty = types[type];
      const sorted = [...array].sort((a,b) => b[sortProperty] -a[sortProperty])
      setArray(sorted);
    };
    sortArray(sortType);
  },[sortType]);*/

  return (
    <div >
      {/* <select onChange={(e) => setSortType(e.target.value)}> 
        <option value="likes">likes</option>
        <option value="timestamp">timestamp</option>
        
  </select>*/}
    <Item list={array}/>
     {/*array.map((ro)=>{return(<div>{ro.likes}</div>)})*/}
    </div>
  );
}

export default App;
