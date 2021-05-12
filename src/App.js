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

  // true = single view?
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {
            <button className="float-switch-button my-button" onClick={switchInput}> {
              isSingleView ? "View List" : "View Single"
            } </button>
          }
          <div className="grid-container">
            <div>
              <h2 id="main-title"> Add a New Food</h2>
              <input className="input-field" type="text" onChange={(event) => { setInputFood(event.target.value) }} value={inputFood} />
              <div>
                <button className="my-button" onClick={addFood}>  Submit </button>
              </div>
            </div>

            <div>
              { foodList.length <= 0 &&
                <h4 className="text-colorset"> Please enter a food! </h4>
              }
              {isSingleView && foodList.length > 0 &&  (
                <div className="food-item">
                  <Food
                    name={foodList[currIndex]}
                    currIndex={currIndex}
                    foodList={foodList}
                    setFoodList={setFoodList}
                    likeCount={likeCount}
                    setLikeCount={setLikeCount}
                    setCurrIndex={setCurrIndex}
                    isSingleView={isSingleView}
                  >
                  </Food>
                </div>
              )
              }
              {!isSingleView && foodList.length > 0 && 
                foodList.map((value, index) => {
                  return  <div key={value} className="food-item"> <Food
                    name={value}
                    currIndex={index}
                    foodList={foodList}
                    setFoodList={setFoodList}
                    likeCount={likeCount}
                    setLikeCount={setLikeCount}
                    setCurrIndex={setCurrIndex}
                    isSingleView={isSingleView}
                  >
                  </Food>
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
