import styled from "styled-components";
import colors from "../colors";
import Border from "../components/Border";
import ReactHelmet from "../components/ReactHelmet";
import { generateMedia } from "styled-media-query";

const customoMedia = generateMedia({
  cellphone: "500px",
});

const ServiceWrapper = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: row;

  ${customoMedia.lessThan("cellphone")`
  height: 100vh;
  flex-direction: column;
  `}
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  position: relative;

  ${customoMedia.lessThan("cellphone")`
  padding: 40px;
  `}
`;

const IntroHeader = styled.h2`
  font-size: 50px;
  font-weight: 700;
  color: ${colors.mainColor};
  margin-bottom: 40px;

  ${customoMedia.lessThan("cellphone")`
  font-size: 40px;
  `}
`;

const IntroText = styled.p`
  font-size: 20px;
  line-height: 40px;
  margin-bottom: 5px;

  ${customoMedia.lessThan("cellphone")`
    font-size: 18px;
    line-height: 35px;
  `}
`;

const IntroImage = styled.img`
  width: 600px;
  height: 450px;
  margin-right: 80px;

  ${customoMedia.lessThan("cellphone")`
  width: 350px;
  height: 200px;
  margin-right: 0px;
  `}
`;

const IntroDeco = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 500px;
  height: 400px;
  border-top-right-radius: 500px;
  background-color: ${colors.lightMain};
`;

const CellAllWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CellWrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  ${customoMedia.lessThan("cellphone")`
   flex-direction: column;
  `}
`;

const CellHeader = styled.h2`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 50px;
`;

const CellText = styled.p`
  font-size: 20px;
  color: ${colors.boldGray};
  margin-bottom: 20px;

  ${customoMedia.lessThan("cellphone")`
  font-size: 15px;
  `}
`;

const CellImg = styled.img`
  width: 400px;
  height: 600px;
`;

const CellImgLike = styled.img`
  width: 700px;
  height: 600px;

  ${customoMedia.lessThan("cellphone")`
  width: 350px;
  height: 300px;
  `}
`;

function Service() {
  return (
    <>
      <ReactHelmet title="서비스" />

      <ServiceWrapper>
        <ContentBox>
          <IntroDeco></IntroDeco>
          <div style={{ zIndex: 99 }}>
            <IntroHeader>청춘온이란?</IntroHeader>
            <IntroText>
              치매 예방에 대한 모든 것을 데이터와 컨텐츠로 연결하여
            </IntroText>
            <IntroText>
              정신 및 신체 활동 증진을 돕는 치매 예방 플랫폼 입니다.
            </IntroText>
            <IntroText>
              일상 올리기, 시 쓰기, 댓글과 좋아요, 걸음수와 활동 순위까지
            </IntroText>
            <IntroText>
              청춘온 하나로 시니어들의 제2의 청춘을 경험해보세요!
            </IntroText>
          </div>
        </ContentBox>
        <ContentBox>
          <IntroImage src={require("../assets/service/intro.png")} />
        </ContentBox>
      </ServiceWrapper>
      {/* routine */}
      <CellAllWrapper>
        <CellWrapper>
          <CellImg src={require("../assets/service/routine.png")} />
          <ContentBox>
            <CellHeader>1. 일상 올리기</CellHeader>
            <CellText>마을 산책, 이웃과 커피 마시기, 가족과 나들이,</CellText>
            <CellText>손주 돌보기, 직접 만든 요리 등</CellText>
            <CellText>매일의 일상을 사진과 글로 남겨</CellText>
            <CellText>이웃과 친구들에게 소식을 알릴 수 있어요.</CellText>
          </ContentBox>
        </CellWrapper>
        <Border />
        {/* Poet */}
        <CellWrapper>
          <ContentBox style={{ alignItems: "flex-end", marginRight: 20 }}>
            <CellHeader>2. 시인 되기</CellHeader>
            <CellText>지나간 나의 인생을 돌아보며</CellText>
            <CellText>그리움, 감사함, 미안함, 기쁨과 행복 등</CellText>
            <CellText>각양각색의 마음을 담아 시 한 편 지어보세요.</CellText>
            <CellText>충만함으로 가득할거예요.</CellText>
          </ContentBox>
          <CellImg src={require("../assets/service/poet.png")} />
        </CellWrapper>
      </CellAllWrapper>
      <Border />
      {/* likecomment */}
      <CellAllWrapper>
        <CellWrapper>
          <CellImgLike src={require("../assets/service/likecomment.png")} />
          <ContentBox>
            <CellHeader>3. 좋아요 & 댓글</CellHeader>
            <CellText>이웃이나 친구가 올린</CellText>
            <CellText>일상과 시가 마음에 든다면 좋아요를 눌러주세요.</CellText>
            <CellText>댓글로 격려와 칭찬을 아끼지 않는다면</CellText>
            <CellText>상대방 뿐 아니라 내 마음도 분명 흡족해질거예요.</CellText>
          </ContentBox>
        </CellWrapper>
        <Border />
        {/* Poet */}
        <CellWrapper>
          <ContentBox style={{ alignItems: "flex-end", marginRight: 20 }}>
            <CellHeader>4. 순위</CellHeader>
            <CellText>선의의 경쟁은 우리를 더욱 젊게하고</CellText>
            <CellText>긍정적인 에너지를 공급해줍니다.</CellText>
            <CellText>청춘온에서의 나의 활동이 점수로 환산되어</CellText>
            <CellText>순위에 반영되니 더욱 재미있고 힘이 납니다.</CellText>
          </ContentBox>
          <CellImg src={require("../assets/service/rank.png")} />
        </CellWrapper>
      </CellAllWrapper>
    </>
  );
}

export default Service;
