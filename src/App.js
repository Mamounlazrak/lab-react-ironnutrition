import logo from './logo.svg';
import './App.css';
import foodslist from './foods.json';
import React, {useState} from 'react';
import FoodBox from './Components/FoodBox/FoodBox';
import AddFoodForm from './Components/AddFoodForm/AddFoodForm';
import Search from './Components/Search/Search';


function App() {
  foodslist.forEach((dish) => {
    dish.id = Math.random() * 1000000;
  })
  const [foods, setFoods] = useState(foodslist);
  const [foodsToDisplay, setFoodsToDisplay] = useState(foods);

  const foodsSearch = (query) => {
    const foodsResult = foods.filter((dish) => dish.name.toLowerCase().startsWith(query.toLowerCase()));
    setFoodsToDisplay(foodsResult);
  }

  const addNewDish = (newDish) => {
    const newFoodsList = [...foods, newDish];
    setFoods(newFoodsList);
    setFoodsToDisplay(newFoodsList);
  } 

//We have to update BOTH the "master" (food) and the foodsToDisplay!!!
  const deleteDish = (dishId) => {
    const newFoodsList = foods.filter((dish) => dish.id !== dishId)
    setFoods(newFoodsList);
    setFoodsToDisplay(newFoodsList);
  }

  const [hideForm, setHideForm] = useState(true);

  const hideFormm = () => {
    const newState = hideForm;
    setHideForm(!newState);
  }


  return (
    <div className="App">
      <h2>Food List</h2>
      <Search search={foodsSearch}></Search>
      {hideForm && <AddFoodForm addDish={addNewDish}></AddFoodForm>}
      {hideForm ? <button onClick={hideFormm}>Hide Form</button> : <button onClick={hideFormm}>Show Form</button>}
      {foodsToDisplay.map((dish) => {
        return <FoodBox dish={dish} delete={deleteDish}></FoodBox>
      })}
        {!foods.length && <p>No dishes!</p>}
    </div>
  );
}

export default App;
