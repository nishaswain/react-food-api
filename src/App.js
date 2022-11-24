
import './App.css';
import Axios from 'axios'
import { YOUR_APP_ID, YOUR_APP_KEY  } from './constants';
import Card from './Card';
import { useState } from 'react';


function App() {
 
  const [apiData, setApiData] =useState([]);
  const [searchValue, setSearchValue] = useState("")
  const [mealType, setFoodType] = useState("")
  const [diet, setdietType] = useState("")

  const url = `https://api.edamam.com/search?q=${searchValue}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=20&calories=591-722&mealType=${mealType}&dietType=${diet}`
  // function sample(){
  //   console.log("hellooo")
  // }


  const getReceipeInfo = async() =>{
    var result = await Axios.get(url);
    setApiData(result.data.hits)
  }

  return (
    <div className='container'>
      <h1>Food Receipe</h1>
      <form className='form-container'>
        <input type="text" placeholder='enter food' className='search_field' onChange={(e) => {setSearchValue(e.target.value)}}/>
        <select className='Choose-Meal' onChange={(e) => {setFoodType(e.target.value)}}>
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Snacks</option>
          <option>Dinner</option>
        </select>

        <select className='Choose-diet' onChange={(e) => {setdietType(e.target.value)}}>
          <option>Low-fat</option>
          <option>Low-carb</option>
          <option>Low-Diet</option>
          <option>Heavy Fat</option>
        </select>

        
        <input type="button" value="Search" className='submit_btn' onClick={getReceipeInfo}/>
      </form>

      <div className='card-container'>
      {apiData.map(val => {
        return <Card image ={val.recipe.image} label={val.recipe.label}/> }
      )}
      </div>
    </div>
  );
}

export default App;
