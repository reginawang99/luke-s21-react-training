import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
import Food from './Food';




function App() {
  const [foodList, setFoodList] = useState([]);
  const [likeCount, setLikeCount] = useState([]);
  const [inputFood, setInputFood] = useState("");

  const [isSingleView, setIsSingleView] = useState(false);
  const [currIndex, setCurrIndex] = useState(0);

  const addFood = () => {
    setFoodList([...foodList, inputFood]);
    setInputFood("");
    setLikeCount([...likeCount, 0]);
  }

  const switchInput = () => {
    setIsSingleView(!isSingleView);
  }

  const nextFood = () => {
    if (currIndex < foodList.length - 1) {
      setCurrIndex(currIndex + 1);
    } else {
      setCurrIndex(0);
    }
  }

  const removeFood = () => {
    if (currIndex == foodList.length - 1) {
      setCurrIndex(0);
    }
    const foodCopy = [...foodList.splice(0, currIndex), ...foodList.splice(currIndex + 1)];
    setFoodList(foodCopy);
    const likeCopy = [...likeCount.splice(0, currIndex), ...likeCount.splice(currIndex + 1)];
    setLikeCount(likeCopy);
  } 

  // true = single view?
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {
            <button class="float-switch-button my-button" onClick={switchInput}> {
              isSingleView ? "View List" : "View Single"
            } </button>
          }
          <div class="grid-container">
            <div>
              <h2 id="main-title"> Add a New Food</h2>
              <input class="input-field" type="text" onChange={(event) => { setInputFood(event.target.value) }} value={inputFood} />
              <div>
                <button class="my-button" onClick={addFood}>  Submit </button>
              </div>
            </div>

            <div>
              { foodList.length == 0 &&
                <h4 class="text-colorset"> Please enter a food! </h4>
              }
              {isSingleView && foodList.length > 0 &&  (
                <div class="food-item">
                  <Food
                    name={foodList[currIndex]}
                    index={currIndex}
                    foodList={foodList}
                    setFoodList={setFoodList}
                    likeCount={likeCount}
                    setLikeCount={setLikeCount}
                  >
                  </Food>
                  <button class="my-button food-button" onClick={removeFood}>Remove Me</button>
                  <button class="my-button food-button" onClick={nextFood}> Pass Me </button>
                </div>
              )
              }
              {!isSingleView && foodList.length > 0 && 
                foodList.map((value, index) => {
                  return  <div class="food-item"> <Food
                    name={value}
                    index={index}
                    foodList={foodList}
                    setFoodList={setFoodList}
                    likeCount={likeCount}
                    setLikeCount={setLikeCount}
                  >
                  </Food>
                  <button class="my-button food-button" onClick={removeFood}>Remove Me</button>
                  </div>
                })
              }
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
export default App;
