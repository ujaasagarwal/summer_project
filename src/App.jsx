import LoaderInitial from "./components/LoaderInitial";
import LoadingState from "./components/LoadingState";
import Main from "./components/Main";
import { useState } from "react";
import classes from "./App.module.css";
function App() {
  const [framesReady, setFramesReady] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const handleFrames = () => {
    setFramesReady(true);
    console.log("Frames loaded");
  };

  const handleLoaded = () => {
    setLoaded(true);
    console.log("Content loaded");
  };
  return (

    <>
      <LoadingState onLoaded={handleFrames} />
      <LoaderInitial onLoaded={handleLoaded} />



      {loaded && framesReady && (
        <h1 className={classes.loaded}>SCROLL</h1>

      )}

      {loaded && framesReady && <Main />}

      {loaded && !framesReady && (
        <h1 className={classes.loaded}>LOADING</h1>
      )}

    </>
  );
}

export default App;