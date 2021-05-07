import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
import Food from './Food';








function App() {
  const [foodList, setFoodList] = useState([]);
  const [inputFood, setInputFood] = useState("");

  const [isSingleView, setIsSingleView] = useState(false);
  const [currIndex, setCurrIndex] = useState(0);

  const addFood = () => {
    setFoodList([...foodList, inputFood]);
    setLikes([...likes, 0]);
    setInputFood("");
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


  const [likes, setLikes] = useState([]);
  // true = single view?
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {
            <button onClick={switchInput}> {
              isSingleView ? "View List" : "View Single"
            } </button>
          }
          <h2> Add a New Food</h2>
          <input type="text" onChange={(event) => { setInputFood(event.target.value) }} value={inputFood} />
          <div>
            <button onClick={addFood}>  Submit </button>
          </div>
        </div>
        <div>
          {isSingleView && (
            <div>
              <Food
                name={foodList[currIndex]}
                index={currIndex}
                foodList={foodList}
                setFoodList={setFoodList}
              >
              </Food>
              <button onClick={nextFood}> Pass Me </button>
            </div>
          )
          }
          {!isSingleView &&
            foodList.map((value, index) => {
              return <Food
                name={value}
                index={index}
                foodList={foodList}
                setFoodList={setFoodList}
                likes={likes}
                setLikes={setLikes}
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
