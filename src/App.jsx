import "./App.css";
import Counter from "./counter";
import Friends from "./Friends";
import Team from "./team";
import Users from "./users";




function App() {
  function handleClick() {
    alert("Button Clicked!");
  }

  // Arrow function for click event
  const handleClick2 = () => {
    alert("Button 2 clicked");
  };

  const addToFive = (num) => {
    alert(num + 5)
  }

  return (
    <>
      <h3>React Core concepts 2</h3>

      <Friends></Friends>
      
      <Users></Users>

      <Team></Team>


      <Counter></Counter>




      {/* <button onclick={handleClick}>Click Me</button> */}


      {/* <button onclick="handleClick()">Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button
        onClick={() => {
          alert("third clicked");
        }}
      >
        third
      </button>
      {/* vejailla */}
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  );
}

export default App;
