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
import HackerNewWithReducer from "./Components/news/HackerNewWithReducer";
import StopWatch from "./Components/stopwatch/StopWatch";
import Input from "./Components/input/Input";
import TextAreaAutoResize from "./Components/textareaautoresize/TextAreaAutoResize";
import DropDown from "./Components/dropdown/DropDown";
import Blog from "./Components/blog/Blog";
import HackerNewWithHook from "./Components/news/HackerNewWithHook";
import SideBarMenu from "./Components/sidebarmenu/SideBarMenu";
import { useState } from "react";
import useClickOutSide from "./hook/useClickOutSide";
import Create from "./Components/forminput/Create";
import Practice from "./Components/ivt/Practice";
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
      {/* <Button>Primary</Button>
      <Button secondary>Secondary</Button> */}
      {/* <Photos></Photos> */}
      {/* <Timer></Timer> */}
      {/* <Header></Header> */}
      {/* <HackerNew></HackerNew> */}
      {/* <HackerNewWithReducer></HackerNewWithReducer> */}
      {/* <StopWatch></StopWatch> */}
      {/* <Input></Input> */}
      {/* <TextAreaAutoResize></TextAreaAutoResize> */}
      {/* <Blog></Blog> */}
      {/* <HackerNewWithHook></HackerNewWithHook> */}

      {/* <button
        style={{
          display: "inline-block",
          margin: "12px",
          padding: "12px",
          borderRadius: "0.25rem",
          color: "white",
          backgroundColor: "green",
        }}
        onClick={() => setShow(true)}
      >
        Show menu
      </button>

      <SideBarMenu show={show} ref={nodeRef}></SideBarMenu>
      <DropDown></DropDown> */}
      <Practice></Practice>
    </div>
  );
}

// props: propertype

export default App;
