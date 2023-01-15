import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { ThemeContext } from "./ContextProvider/ThemeContext";

function App() {
  const [state, setState] = useState(false);
  const { newTheme, open, handleMenu } = useContext(ThemeContext);
  const scrollRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setState(true);
    }, 2200);
  }, []);

  return (
    <React.Fragment>
      {!state ? (
        <div
          style={{
            background: `${newTheme.background}`,
          }}
          className="logoStart"
        ></div>
      ) : (
        <div className="components">
          <div
            style={{
              background: `${newTheme.menuBackground}`,
              color: `${newTheme.title}`,
              left: `${open ? "-100vw" : "0"}`,
            }}
            className="links"
          >
            <a onClick={handleMenu} href="#home">
              HOME
            </a>
            <a onClick={handleMenu} href="#about">
              ABOUT
            </a>
            {/* <a onClick={handleMenu} href='#experience'>
							Experience
						</a> */}
            <a onClick={handleMenu} href="#techStacks">
              SKILLS
            </a>
            <a onClick={handleMenu} href="#projects">
              PROJECTS
            </a>
            <a onClick={handleMenu} href="#contact">
              CONTACT
            </a>
            <a href="https://onedrive.live.com/?authkey=%21AFB%5FW32RzrlarpM&cid=8AD16FDD74D51843&id=8AD16FDD74D51843%21139&parId=8AD16FDD74D51843%21138&o=OneUp">
              RESUME
            </a>
          </div>
          <Navbar />
          <Home scrollRef={scrollRef} />
        </div>
      )}
    </React.Fragment>
  );
}

export default App;
