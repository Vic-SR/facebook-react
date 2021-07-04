import React, {useState} from "react";
import "./style.css"

function Post({userName, content, imgSrc, profileImgSrc}) {
  //useState 기능을 이용해서 변수를 만듦.
  // unmber라고 하는 변수에 0을 넣는다.
  // unmber 의 값을 바꾸고 싶다면 setNumber(셋팅하고 싶은 값) 를 이용한다.
  const [number, setNumber] = useState(0);
  const onIncrease = () => {
    setNumber(number + 1);
  }

    return (
      <div className="post">
        <div className="post_title">
          <img className="post_titleImage" src={profileImgSrc}/>
          <p className="post_titleName">{userName}</p>
        </div>
        <div className="post_content">
          {content}
        </div>
        
        <img className="post_image" src={imgSrc}/>
        
        <div className="post_footer">
          <p className="post_footerLike" onClick={onIncrease}>좋아요</p>
          <p className="post_footerLikeCount">{number}</p>
        </div>
      </div>
    );
};

export default Post;