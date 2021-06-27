import React from "react";

function Box(props){
    console.log(props);
    const styleVar ={
      border : "1px solid  " + props.color
    }

    return (
      <div style={styleVar}>
        {props.children}

      </div>
    );
};

export default Box;