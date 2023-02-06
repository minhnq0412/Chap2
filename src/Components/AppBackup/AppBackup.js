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
import Form from "./Components/form/Form";
import TextAreaAutoResize from "./Components/textareaautoresize/TextAreaAutoResize";
import DropDown from "./Components/dropdown/DropDown";
import Blog from "./Components/blog/Blog";
import HackerNewWithHook from "./Components/news/HackerNewWithHook";
import SideBarMenu from "./Components/sidebarmenu/SideBarMenu";
import { Fragment, useState } from "react";
import useClickOutSide from "./hook/useClickOutSide";
import Create from "./Components/forminput/Create";
import Practice from "./Components/ivt/Practice";
import MovieSearchApp from "./Components/movie/MovieSearchApp";
import SignUpForm from "./Components/form/SignUpForm";
import SignUpFormV2 from "./Components/form/SignUpFormV2";
import SignUpFormFinal from "./Components/form/SignUpFormFinal";
import SignUpFormHook from "./Components/form/SignUpFormHook";
import Modal from "./Components/modal/Modal";
import DropDownPortal from "./Components/dropdown/DropDownPortal";
import ToolTip from "./Components/tooltip/ToolTip";
import { ErrorBoundary } from "react-error-boundary";
import Portal from "./Components/portal/Portal";
import ModalBase from "./Components/modal/ModalBase";
import ToolTipAdvance from "./Components/tooltip/ToolTipAdvance";
import Context from "./Components/contexts/Context";
import HeaderMain from "./Components/HeaderMain";
import { AuthProvider } from "./Components/contexts/authContext";
import { GalleryProvider } from "./Components/contexts/galleryContext";
import PhotoList from "./Components/gallery/PhotoList";
import Nav from "./Components/Nav";
import { Routes, Route } from "react-router-dom";
import BlogPage from "./Components/BlogPage";
import ProfilePage from "./ProfilePage";
import BlogPageDetail from "./Components/BlogPageDetail";
import FetchingData from "./Components/advanced-react/hoc/FetchingData";
import HandleValue from "./Components/advanced-react/render-props/HandleValue";
import Accordion from "./Components/advanced-react/react-composition/Accordion";
import Editable from "./Components/advanced-react/react-composition/Editable";
import Switch from "./Components/advanced-react/prop-collection/Switch";
// import useToggle from "./Components/advanced-react/react-composition/useToggle";

// JSX Javascript XML
/**
 *
 *
 */
// Parent Component
const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <pre className="text-red-600 bg-red-300">Không thể lấy data</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};
function useToggle() {
  const [value, setValue] = useState(false);
  const handleToggleValue = () => setValue((s) => !s);
  function getGetToggleProps({ onClick, ...rest } = {}) {
    return {
      onClick: () => {
        onClick && onClick();
        handleToggleValue();
      },
      ...rest,
    };
  }
  return { value, handleToggleValue, getGetToggleProps };
}

function App() {
  // const [show, setShow] = useState(false);
  // const [openModalBase, setOpenModalBase] = useState(false);
  // const { value, handleToggleValue, getGetToggleProps } = useToggle();
  // const [count, setCount] = useState(1);
  // const userReducer = (state, action) => {
  //   switch (action.type) {
  //     case "decrement":
  //       return { count: state.count - 5 };
  //     // case "decrement":
  //     //   return { count: count - 5 };
  //     default:
  //       return useCounter.reducer(state, action);
  //   }
  // };
  // const { count, handleIncrement, handleDecrement } = useCounter(
  //   { initial: 0 },
  //   userReducer
  // );
  return (
    <div>
      {/* <Game></Game> */}
      {/* <Todo></Todo> */}
      {/* <Counter></Counter> */}
      {/* <Button>Primary</Button>
      <Button secondary>Secondary</Button> */}
      {/* <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Game></Game>
      </ErrorBoundary> */}
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
      {/* <Form></Form> */}
      {/* <Practice></Practice> */}
      {/* <MovieSearchApp></MovieSearchApp> */}
      {/* <SignUpFormFinal></SignUpFormFinal> */}
      {/* <SignUpFormHook></SignUpFormHook> */}

      {/* <div className="overflow-hidden p-5">
        <DropDownPortal></DropDownPortal>
      </div>  */}
      {/* <div className="p-16">
        <ToolTip text="Hover me!">This is a tooltip content</ToolTip>
      </div> */}
      {/* <button
        className="bg-blue-500 rounded-lg p-4 text-white cursor-pointer"
        onClick={() => setShow(true)}
      >
        Show Modal
      </button>
      <div>
        <Modal open={show} handleClose={() => setShow(false)}></Modal>
      </div> */}
      {/* <Portal visible={false}></Portal> */}
      {/* <button
        className="p-5 rounded-lg text-white text-center bg-blue-300 m-5"
        onClick={() => setOpenModalBase(true)}
      >
        Open modal base
      </button>
      <ModalBase
        visible={openModalBase}
        onClose={() => setOpenModalBase(false)}
      >
        <div className="bg-white p-10 rounded-lg w-full max-w-[320px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis
          aliquid odio quod obcaecati, non sequi recusandae temporibus cumque
          deleniti error quibusdam! Vel consequatur eum reprehenderit?
          Doloremque placeat maxime quos vero.
        </div>
      </ModalBase> */}
      {/* <ToolTipAdvance title='Tooltip'>This is tooltip</ToolTipAdvance> */}
      {/* <Context></Context> */}
      {/* <AuthProvider>
        <GalleryProvider>
          <HeaderMain></HeaderMain>
          <PhotoList></PhotoList>
        </GalleryProvider>
      </AuthProvider> */}
      {/* <Routes>
        <Route path="/" element={<Nav></Nav>}>
          <Route path="/" element={<>Home Page</>}></Route>
          <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
          <Route path="/blog/:slug" element={<BlogPageDetail></BlogPageDetail>}></Route>
          <Route
            path="/profile"
            element={<ProfilePage>Profile Page</ProfilePage>}
          ></Route>
        </Route>
        <Route path="*" element={<div>This is 404 Page</div>}></Route>
      </Routes> */}
      {/* <FetchingData></FetchingData> */}
      {/* <HandleValue></HandleValue> */}
      {/* <Accordion header="Can I change my plan later">
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          quae inventore necessitatibus magnam a expedita perspiciatis, minus
          molestias totam molestiae cumque doloribus deserunt culpa. Aut
          deleniti enim necessitatibus vel voluptas.
        </div>
      </Accordion> */}
      {/* <Editable></Editable> */}
      {/* <Switch on={value} onClick={handleToggleValue}></Switch>
      <hr />
      <button
        aria-label="custom-button"
        {...getGetToggleProps({ onClick: () => console.log("minhnq") })}
      >
        {value ? "ON" : "OFF"}
      </button> */}
      {/* <Counter value={count} onChange={() => setCount((c) => c + 1)}></Counter> */}
      {/* <Counter
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      ></Counter> */}
      
    </div>
  );
}

// props: propertype

export default App;
