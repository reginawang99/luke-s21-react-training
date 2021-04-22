import logo from './logo.svg';
import './App.css';

function App() {

  const myFood = "Double Stuf Oreos";
  return (
    <div className="App">
      <header className="App-header">

        <h1> {function(myFood) {
          return myFood + ' at midnight';
        }(myFood)}
        </h1>


        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <h1>
          Luke Dalton's First React App
      </h1>

        <p class="App">
          Not gonna add any css to this really, I think the point was to just create a React app.
      </p>

      </header>
    </div>
  );
}

export default App;
