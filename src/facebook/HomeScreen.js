import React from "react";
import Nav from "./Nav";
import Story from "./Story";
import StoryRow from "./StoryRow";



function HomeScreen(){
    return (
      <div className="homeScreen">
        <Nav/>
        <StoryRow>
          <Story className="story"/>
        </StoryRow>
        
      </div>
    );
};

export default HomeScreen;