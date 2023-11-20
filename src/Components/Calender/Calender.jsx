import React, { useContext } from "react";
import GitHubCalendar from "react-github-calendar";
import "./Calender.module.css";
import { ThemeContext } from "../../ContextProvider/ThemeContext";

const GitHub = () => {
  const { newTheme } = useContext(ThemeContext);

  return (
    <div className="github">
      <div>
        <h1 style={{ marginTop: "60px", color: newTheme.title }}>Github Stats</h1>
        <div style={{display:"flex", marginLeft:'80px'}}>
          <img style={{ marginTop: "20px", padding: "20px" }}
            src="https://github-readme-streak-stats.herokuapp.com/?user=UdayCreative&&theme=react&hide_border=false"
            alt="GitHub stat"
            // width="35%"
          />
          <img style={{ marginTop: "20px", padding: "20px" }}
            src="https://github-readme-stats.vercel.app/api?username=UdayCreative&show_icons=true&&countprivate=true&theme=react&hide_title=true"
            alt="GitHub stats"
            // width="35%"
          />
          <img style={{ marginTop: "20px", padding: "20px" }}
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=UdayCreative&theme=react&hide_border=false&include_all_commits=true&layout=compact"
            alt="GitHub stats"
            // width="35%"
          />
        </div>
      </div>
      <div
      // w={["85%", "85%", "65%"]}
      // className="github_Calender"
      style={{
          color: `${newTheme.title}`,
      }}
      >
        <h1 style={{ marginTop: "60px", color: newTheme.title }}>GitHub Calender</h1>
        <GitHubCalendar
          style={{ margin: "auto", border: "1px solid", padding: "20px", borderRadius: "5px" }}
          username="UdayCreative"
          year={new Date().getFullYear()}
        />
      </div>
      {/* <div>
      <h1 style={{color:newTheme.title}}>Github Graph</h1>
      <img 
        align="center" 
        src="https://activity-graph.herokuapp.com/graph?username=UdayCreative&theme=react-dark&hide_border=true" 
        alt="GitHub Graph"
        width="70%" 
        /> 
      </div> */}
    </div>
  );
};

export default GitHub;
