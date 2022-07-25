import "./App.css";
import Button from "./Components/button/Button";
import Card from "./Components/card/Card";
import Card2 from "./Components/card/Card2";
import CardList from "./Components/card/CardList";
import Counter from "./Components/counter/Counter";
import { GlobalStyles } from "./Components/GlobalStyle";
import { ThemeProvider } from "styled-components";
//import { YoutubeList } from "./Components/youtube/YoutubeList";
// import Toggle from "./Components/toggle/Toggle";
// import Counter from "./Components/counter/Counter";
import Game from "./Components/tictactoe/Game";
import Todo from "./Components/Todo/Todo";
import Photos from "./Components/photo/Photos";
import Timer from "./Components/Timer";
import Header from "./Components/Header";
import HackerNew from "./Components/news/HackerNew";

// JSX Javascript XML
/**
 *
 *
 */
// Parent Component
const theme = {
  colors: {
    blue: "#2979ff",
  },
};

function App() {
  return (
    <div>
      {/* <Game></Game> */}
      {/* <Todo></Todo> */}
      {/* <Counter></Counter> */}
      {/* <Button>Primary</Button>
      <Button secondary>Secondary</Button> */}
      {/* <ThemeProvider theme={theme}>
        <GlobalStyles></GlobalStyles>
        <CardList>
          <Card2 secondary></Card2>
          <Card2></Card2>
          <Card2></Card2>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </CardList>
      </ThemeProvider> */}
      {/* <Photos></Photos> */}
      {/* <Timer></Timer> */}
      {/* <Header></Header> */}
      <HackerNew></HackerNew>
    </div>
  );
}

// props: propertype

export default App;
