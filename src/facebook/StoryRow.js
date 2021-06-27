import React from "react";
import "./StoryRow.css";

function StoryRow(props){
  console.log(props);
  return (
    <div className="StoryRow">
      {props.children}

    </div>
  );
};

export default StoryRow;

