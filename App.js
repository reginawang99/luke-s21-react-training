import './App.css';
import React from 'react';
import { useState } from 'react';
import Food from './Food';

function App() {
  const [foodList, setFoodList] = useState([]); // ACTIONABLE: 
                                                // it would be cleaner if we had a seperate input bar component!
                                                // i can explain why this would be useful/cleans up code
  const [likes, setLikes] = useState([]);

  const [inputFood, setInputFood] = useState("");
  const [isSingleView, setIsSingleView] = useState(false);
  const [currIndex, setCurrIndex] = useState(0);

  const addFood = () => {
    setFoodList([...foodList, inputFood]);
    setLikes([...likes, 0]);
    setInputFood("");
  }

  const nextFood = () => {
    if (currIndex < foodList.length - 1) {
      setCurrIndex(currIndex + 1);
    } else {
      setCurrIndex(0);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          { // generally if it's only one line, i like to use an arrow function!
            <button onClick={() => setIsSingleView(!isSingleView)}> {
              isSingleView ? "View List" : "View Single"
            } </button>
          }
          <h2> Add a New Food</h2> 
          <input type="text" onChange={(event) => setInputFood(event.target.value)} value={inputFood} />
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
              </Food> /
              <button onClick={nextFood}> Pass Me </button>
            </div>
          ) // why don't we pass in a props for Pass Me that makes Food buttons different when it isn't null?
            // this will help us customize that the Food component looks different in single view!
          }
          {!isSingleView && // this is essentially the same thing, but when the return value of a function is 
                            // the only line, we can remove the brackets and the return!
            foodList.map((value, index) => <Food
                name={value}
                index={index}
                foodList={foodList}
                setFoodList={setFoodList}
                likes={likes}
                setLikes={setLikes}
              >
              </Food>
            )
          }
        </div>
      </header>
    </div>
  );
}
export default App;
