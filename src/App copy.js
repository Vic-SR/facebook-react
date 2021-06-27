
//App.js 는 가장 상위 대표 컴포넌트
// HTML 태그처럼 보이지만 사실 jsx라고 하는 문법이다.
// Jsx 라고 하는 문법이 리엑트에 의해서 html로 변환되어 렌더링이 된다.

import React from "react";
import Search from "./Search";
import Ad from "./Ad";
import Welcome from "./Welcome";
import Card from "./Card";
import Box from "./Box";


function App(){
  // 로그인 정보 불러옴 ~
  const u_id = "test";
  const u_name = "짱구";

    return (
      <>
        <Box color="green">
          <Search/>
        </Box>
        <Ad/>
        <Welcome user_id={u_id} user_name={u_name}/>
        
        <Box color="red">
          <Card title="title1" content="content1"/>
          <Card title="title2" content="content2"/>
          <Card title="title3" content="content3"/>
        </Box>

      </>
    );
};

export default App;
