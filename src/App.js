import "./App.css";
import Button from "./Components/button/Button";
import Counter from "./Components/counter/Counter";
//import { YoutubeList } from "./Components/youtube/YoutubeList";
// import Toggle from "./Components/toggle/Toggle";
// import Counter from "./Components/counter/Counter";
import Game from "./Components/tictactoe/Game";
import Todo from "./Components/Todo/Todo";

// JSX Javascript XML
/**
 *
 *
 */
// Parent Component

function App() {
  return (
    <div>
      {/* <Game></Game> */}
      {/* <Todo></Todo> */}
      {/* <Counter></Counter> */}
      <Button className="button">Primary</Button>
      <Button className="button--secondary">Secondary</Button>
    </div>
  );
}

// props: propertype

export default App;
