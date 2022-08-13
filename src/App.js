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

function App() {
  // const [show, setShow] = useState(false);
  const [openModalBase, setOpenModalBase] = useState(false);
  return (
    <Fragment>
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
      <AuthProvider>
        <GalleryProvider>
          <HeaderMain></HeaderMain>
          <PhotoList></PhotoList>
        </GalleryProvider>
      </AuthProvider>
    </Fragment>
  );
}

// props: propertype

export default App;
