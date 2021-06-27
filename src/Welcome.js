import React from "react";

function Welcome(props){
  
    return (
      <>
        <p>{props.user_id}</p>
        <p>{props.user_name}</p>
      </>
    );
};

export default Welcome;