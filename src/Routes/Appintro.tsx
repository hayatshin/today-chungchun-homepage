import { useEffect, useState } from "react";
import styled from "styled-components";
import colors from "../colors";
import Border from "../components/Border";
import ReactHelmet from "../components/ReactHelmet";

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const CellWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px;
`;

const CellHeader = styled.h2`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 50px;
  color: ${colors.boldGray};
`;

const CellBox = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1100px) {
    display: flex;
    flex-direction: column;
  }
`;

const CellText = styled.p`
  font-size: 18px;
  color: ${colors.gray};
  margin-bottom: 15px;
  line-height: 45px;

  @media screen and (max-width: 1100px) {
    line-height: 30px;
  }
`;

const CellImgBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 40px;
  margin-right: 40px;
`;

const CellImg = styled.img`
  width: 300px;
`;

function Appintro() {
  return (
    <>
      <ReactHelmet title="앱 소개" />
      {/* 금연클리닉 */}
      <CellWrapper
        style={{
          alignSelf: "flex-start",
          marginTop: 50,
          paddingRight: 100,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <CellBox>
          <ContentBox>
            <CellHeader>1. 시작화면</CellHeader>
            <CellText>
              오늘의 명언으로 시작하는 금연ON! <br />
              금연 신청자의 금연상태를 매일매일 확인합니다.
            </CellText>
            <CellText>혹시 금연 중 한 개비 실수하셨나요? </CellText>
            <CellText>
              실수로 담배를 한 개비 피우게 되었더라도 <br />
              그것이 금연의 실패를 의미하지는 않습니다.
            </CellText>
            <CellText>
              단, 같은 실수를 반복하지 않기 위해서는 <br />
              올바른 대처방법을 배워야겠죠?
            </CellText>
          </ContentBox>
          <CellImgBox>
            <CellImg src={require("../assets/appintro/intro1.png")} />
            <CellImg src={require("../assets/appintro/intro2.png")} />
          </CellImgBox>
        </CellBox>
      </CellWrapper>
      <Border />
      {/* 홈화면 */}
      <CellWrapper>
        <ContentBox style={{ alignItems: "flex-end" }}>
          <CellBox>
            <CellImgBox>
              <CellImg src={require("../assets/appintro/main1.png")} />
              <CellImg src={require("../assets/appintro/main2.png")} />
            </CellImgBox>
            <div>
              <CellHeader>2. 홈 화면</CellHeader>
              <CellText>
                금연ON 홈화면에서는 금연 응원단과
                <br />
                금연목표를 정할 수 있습니다.
              </CellText>
              <CellText>
                나의 금연을 기뻐하고 응원해주는
                <br />
                금연응원단을 등록해주세요.
              </CellText>
              <CellText>
                금연 응원단 랭킹은 "친구초대 미션"과 연계되어
                <br />
                금연클리닉에 초대한 흡연자의 수를 나타냅니다.
              </CellText>
              <CellText>
                금연응원단은 흡연자 뿐 아니라 비흡연자라고 해도
                <br />
                흡연자를 금연클리닉에 등록시키기만 하면 되는데요.
              </CellText>
              <CellText>
                내 주변의 소중한 사람의 건강을 챙기는 것은 물론, <br /> 랭킹에
                따른 푸짐한 선물까지 받게 된다면 <br />
                더욱 신이나서 주변 사람들을 클리닉으로 초대하겠죠?
              </CellText>
            </div>
          </CellBox>
        </ContentBox>
      </CellWrapper>
      <Border />
      {/* 금연패치 */}
      <CellWrapper style={{ alignSelf: "flex-start", marginTop: 50 }}>
        <CellBox>
          <ContentBox>
            <CellHeader>3. 금연패치 알람화면</CellHeader>
            <CellText>효과적인 금연을 위한 금연 패치!</CellText>
            <CellText>
              금연 패치는 매일 같은 시간에 <br />
              서로 다른 부위에 돌아가면서 붙이는게 <br />
              효과적이라는 사실 알고 계신가요?
            </CellText>
            <CellText>
              깜빡하기 쉬운 금연패치 부착도 <br />
              금연ON 알람설정과 함께라면
              <br />
              잊어버리지 않을 수 있겠죠?
            </CellText>
          </ContentBox>
          <CellImgBox>
            <CellImg src={require("../assets/appintro/patch1.png")} />
            <CellImg src={require("../assets/appintro/patch2.png")} />
          </CellImgBox>
        </CellBox>
      </CellWrapper>
      <Border />
      {/* 금연미션 */}
      <CellWrapper>
        <ContentBox style={{ alignItems: "flex-end" }}>
          <CellBox>
            <CellImgBox>
              <CellImg src={require("../assets/appintro/mission1.png")} />
              <CellImg src={require("../assets/appintro/mission2.png")} />
            </CellImgBox>
            <div>
              <CellHeader>4. 금연미션 화면</CellHeader>
              <CellText>멀기만 해 보이는 금연 목표를 달성하는 방법!</CellText>
              <CellText>
                6개월 짜리 장기 목표가 아니라,
                <br />
                눈 앞에 있는 금연 미션을 하나하나 달성하다보면
                <br />
                나도 모르는 사이에 금연 성공!
              </CellText>
              <CellText>
                특히 코로나19로 인해
                <br />
                보건소 방문이 쉽지 않은 요즘,
                <br />
                금연ON과 함께 비대면 금연클리닉으로 <br />
                금연 목표를 달성해보세요!
              </CellText>
            </div>
          </CellBox>
        </ContentBox>
      </CellWrapper>
      <Border />
      {/* 커뮤니티 */}
      <CellWrapper style={{ alignSelf: "flex-start", marginTop: 50 }}>
        <CellBox>
          <ContentBox>
            <CellHeader>5. 커뮤니티 화면</CellHeader>
            <CellText>
              "빨리 가려면 혼자 가고, <br />
              멀리 가려면 함께 가라" 는 말이 있지요?
            </CellText>
            <CellText>금연은 단거리 달리기가 아니라 마라톤입니다!</CellText>
            <CellText>
              보건소별 커뮤니티를 통해 공지사항도 확인하고, <br /> 게시판을 통해
              서로의 금연 노하우를 공유하면서 <br /> 금연이라는 목표를 향해 함께
              나아가다보면
            </CellText>
            <CellText>
              언젠가 우리 모두 금연 목표를 달성할 수 있을거예요!
            </CellText>
          </ContentBox>
          <CellImgBox>
            <CellImg src={require("../assets/appintro/community1.png")} />
            <CellImg src={require("../assets/appintro/community2.png")} />
          </CellImgBox>
        </CellBox>
      </CellWrapper>
      <Border />
      {/* 건강기록 */}
      <CellWrapper>
        <ContentBox style={{ alignItems: "flex-end" }}>
          <CellBox>
            <CellImgBox>
              <CellImg src={require("../assets/appintro/health1.png")} />
              <CellImg src={require("../assets/appintro/health2.png")} />
            </CellImgBox>
            <div>
              <CellHeader>6. 건강기록 화면</CellHeader>
              <CellText>금연을 하는 이유는 무엇보다도 건강이겠죠?</CellText>
              <CellText>
                보건소를 방문하면, 금연검사 뿐 아니라 <br />
                다양한 건강검사를 받을 수 있는데요!
              </CellText>
              <CellText>
                금연ON 앱에 금연정보와 건강정보를 입력하면, <br />
                금연을 하면서 스스로 얼마나 더 건강해졌는지 <br /> 한눈에 알아볼
                수 있습니다!
              </CellText>
            </div>
          </CellBox>
        </ContentBox>
      </CellWrapper>
    </>
  );
}

export default Appintro;
