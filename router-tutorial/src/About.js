import React from "react";
import qs from "qs";

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, // 문자열 맨 앞의 '?'생략
  });
  const showDetail = query.detail === "true";

  return (
    <div>
      <h1>소개</h1>
      <p>기초 실습</p>
      {showDetail && <p>Detail 값을 true로 설정!!</p>}
    </div>
  );
};

export default About;
