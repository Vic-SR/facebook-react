import React from "react";
import "./StoryRow";
import "./Story.css";

function story(props){
    return (
      
    <div className="story_book">
      <div className="story_img">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQASRC4UYhErGKYzcAwTz9iUn7snq2DUGoX8w&usqp=CAU"/>            
        <h3 className="name">이름</h3>
      </div>
      <div className="story_img">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQASRC4UYhErGKYzcAwTz9iUn7snq2DUGoX8w&usqp=CAU"/>
        <h3>이름</h3>
      </div>
      <div className="story_img">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQASRC4UYhErGKYzcAwTz9iUn7snq2DUGoX8w&usqp=CAU"/>
        <h3>이름</h3>
      </div>
      <div className="story_img">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQASRC4UYhErGKYzcAwTz9iUn7snq2DUGoX8w&usqp=CAU"/>
        <h3>이름</h3>
      </div>
      <div className="story_img">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQASRC4UYhErGKYzcAwTz9iUn7snq2DUGoX8w&usqp=CAU"/>
        <h3>이름</h3>
      </div>
    </div>
    )
};

export default story;