import React, { useContext } from "react";
import GitHubCalendar from "react-github-calendar";
import "./Calender.module.css";
import { ThemeContext } from "../../ContextProvider/ThemeContext";

const GitHub = () => {
  const { newTheme } = useContext(ThemeContext);

  return (
    <div className="github">
      <h1 style={{color:newTheme.title}}>GitHub Calender</h1>
      <div
        w={["85%", "85%", "65%"]}
        className="github_Calender"
        style={{
            color: `${newTheme.title}`,
        }}
      >
        <GitHubCalendar 
          style={{ margin: "auto" }}
          username="UdayCreative"
          year={new Date().getFullYear()}
        />
      </div>
      <div>
        <h1 style={{color:newTheme.title}}>Github Stats</h1>
        <div>
          <img
            src="https://github-readme-stats.vercel.app/api?username=UdayCreative&show_icons=true&&countprivate=true&theme=react&hide_title=true"
            alt="GitHub stats"
            width="70%"
          />
        </div>
      </div>
      <div>
      <h1 style={{color:newTheme.title}}>Github Graph</h1>
      <img 
        align="center" 
        src="https://activity-graph.herokuapp.com/graph?username=UdayCreative&theme=react-dark&hide_border=true" 
        alt="GitHub Graph"
        width="70%" 
        /> 
      </div>
    </div>
  );
};

export default GitHub;
