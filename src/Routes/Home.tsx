import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay, faApple } from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <div style={{ height: "200vh" }}>
      <span>걸음수 - 일상 - 시 - 점수와 순위</span>
      <span>청춘을 켜다</span>
      <span>청춘이 오다</span>
      <span>청춘온</span>
      <span>#여사님스타그램</span>
      <span>#선생님스타그램</span>
      <FontAwesomeIcon icon={faGooglePlay} />
      <span>Google Play</span>
      <FontAwesomeIcon icon={faApple} />
      <span>App Store</span>
      <span>청춘온 앱에 없는 것</span>
      <span>회원 가입이 없다</span>
      <span>영어가 없다</span>
      <span>작은 글씨가 없다</span>
      <span>MZ 세대가 없다</span>
      <span>청춘온 앱에 있는 것</span>
      <span>걸음 수 측정이 있다</span>
      <span>일상 사진과 글이 있다</span>
      <span>시를 다 쓰면 액자 안에 있다</span>
      <span>모든 활동에 점수가 있다</span>
      <span>실시간 순위를 확인할 수 있다</span>
    </div>
  );
}

export default Home;
