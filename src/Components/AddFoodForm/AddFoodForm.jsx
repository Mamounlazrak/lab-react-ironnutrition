import React, {useState} from 'react';
import {Input} from 'antd';

function AddFoodForm(props) {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState("");


    const handleNameInput = (e) => {setName(e.target.value)};
    const handleImageInput = (e) => {setImage(e.target.value)};
    const handleCaloriesInput = (e) => {setCalories(e.target.value)};
    const handleServingsInput = (e) => {setServings(e.target.value)};

    const handleSubmit = (e) => {
        e.preventDefault();
        const newId = Math.random() * 1000000;
        const newDish = {id: newId, name, image, calories, servings};

        props.addDish(newDish);
        setName('');
        setImage('');
        setCalories('');
        setServings('');

    }

  return (
    <div>
    <h2>Add a new dish</h2>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <Input value={name} type="text" onChange={handleNameInput} ></Input>
            <label>Image URL</label>
            <Input value={image} type="text" onChange={handleImageInput} ></Input>
            <label>Calories</label>
            <Input value={calories} type="text" onChange={handleCaloriesInput} ></Input>
            <label>Servings</label>
            <Input value={servings} type="number" onChange={handleServingsInput} ></Input>
            <button type="submit">Add dish</button>
        </form>
    </div>
  )
}

export default AddFoodForm