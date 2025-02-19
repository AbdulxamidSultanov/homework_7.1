import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { change } from "./redux/themeSlice";

function App() {
  const theme = useSelector((state) => console.log(state));
  const dispatch = useDispatch();

  function handleChange() {
    theme === "light" ? dispatch(change("dark")) : dispatch(change("light"));
  }


  return (
    <>
      

      <h2>{theme}</h2>
      <button onClick={handleChange}>change theme</button>
    </>
  );
}

export default App;
