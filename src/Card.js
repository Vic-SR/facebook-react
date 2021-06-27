import React from "react";

function Card(props){
  
    return (
      <div className="card">
        <h1>{props.title}</h1>
        <div>
          {props.content}
        </div>

      </div>
    );
};

export default Card;