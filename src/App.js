import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
import Food from './Food';








function App() {
  const [foodList, setFoodList] = useState([]);
  const [inputFood, setInputFood] = useState("");

  // how to do this? set a viewtype function that is either 1 or 0
  // if it's 0, return the original, if it's 1  use a for loop and a certain index

  const [inputType, setInputType] = useState(false);
  const [currIndex, setCurrIndex] = useState(0);

  const addFood = () => {
    setFoodList([...foodList, inputFood]);
    setInputFood("");
  }

  const switchInput = () => {
    setInputType(!inputType);
  }

  const nextFood = () => {
    if (currIndex < foodList.length - 1) {
      setCurrIndex(currIndex + 1);
    } else {
      setCurrIndex(0);
    }
  }

  // true = single view?
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {inputType && (
            <button onClick={switchInput}> View List </button>
          )}
          {!inputType && (
            <button onClick={switchInput}> View Single </button>
          )}
          <h2> Add a New Food</h2>
          <input type="text" onChange={(event) => { setInputFood(event.target.value) }} value={inputFood} />
          <div>
            <button onClick={addFood}>  Submit </button>
          </div>
        </div>
        <div>
          {inputType && (
            <div>
            <Food
              name = {foodList[currIndex]}
              index = {currIndex}
              foodList={foodList}
              setFoodList={setFoodList}
            >
            </Food> 
            <button onClick={nextFood}> Pass Me </button>
            </div>
          )
          }
          {!inputType &&
            foodList.map((value, index) => {
              return <Food
                name={value}
                index={index}
                foodList={foodList}
                setFoodList={setFoodList}
              >
              </Food>
            })
          }
        </div>
      </header>
    </div>
  );
}
export default App;
