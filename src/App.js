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
            <a href="https://drive.google.com/file/d/1D2FLlXORuvDI1cP3PQK-GknbUG93OFfg/view?usp=sharing">
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
