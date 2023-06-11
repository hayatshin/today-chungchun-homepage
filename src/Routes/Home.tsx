import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay, faApple } from "@fortawesome/free-brands-svg-icons";
import colors from "../colors";
import { Helmet } from "react-helmet-async";
import { ReactComponent as SmileSVG } from "../assets/service/face-smile-light.svg";
import { ReactComponent as BrainSVG } from "../assets/service/head-side-brain-light.svg";
import { ReactComponent as PenSVG } from "../assets/service/pen-light.svg";
import { ReactComponent as WalkSVG } from "../assets/service/person-walking-light.svg";
import { ReactComponent as ChevronLeftSVG } from "../assets/svg/chevron-left-light.svg";
import { ReactComponent as ChevronRightSVG } from "../assets/svg/chevron-right-light.svg";
import { useEffect, useState } from "react";

// 활용사례 702, 서비스소개 2063, 앱소개 5234, 다운로드 10336

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const FirstPage = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  padding-top: 80px;
  padding-bottom: 150px;

  @media screen and (max-width: 1100px) {
    width: 100%;
    flex-direction: column;
    margin-bottom: 50px;
  }
`;

const FirstImageBox = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1100px) {
    width: 80%;
  }
`;

const FirstBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  /* padding-left: 30px;
  padding-right: 30px; */

  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;

const HeaderBigText = styled.span`
  font-size: 100px;
  font-weight: 900;
  color: ${colors.mainColor};
  /* -webkit-text-stroke: 5px ${colors.boldGray}; */
  margin-top: 70px;

  @media screen and (max-width: 1100px) {
    font-size: 80px;
  }
`;

const HeaderDescription = styled.span`
  font-size: 50px;
  font-weight: 700;
  color: ${colors.boldGray};
  margin-bottom: 20px;

  @media screen and (max-width: 1100px) {
    font-size: 45px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 100px;
  width: 100%;
  justify-content: center;
`;

const ButtonBox = styled.div`
  width: 400px;
  height: 80px;
  border-radius: 50px;
  border: 1px solid ${colors.boldGray};
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .font {
    color: ${colors.boldGray};
  }
  &: hover {
    border: 1px solid ${colors.boldGray};
    background-color: ${colors.boldGray};
    color: white;
    span {
      color: white;
    }
    .font {
      color: white;
    }
  }
`;

const ButtonText = styled.span`
  color: ${colors.boldGray};
  font-size: 25px;
  font-weight: 400;
  &: hover {
    color: white;
  }
`;

const FourthPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${colors.mainColor};
  padding: 100px;
  box-sizing: border-box;
`;

const DownloadHeader = styled.span`
  font-size: 60px;
  font-weight: 900;
  color: white;
  margin-bottom: 20px;
`;

const DownloadDescription = styled.span`
  font-size: 45px;
  font-weight: 400;
  color: white;
`;

const DownloadBox = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    height: 150px;
    justify-content: space-between;
  }
`;

const DownloadLink = styled.div`
  border: 1px solid white;
  width: 180px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const AppIntroEachBox = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  padding-left: 200px;
  padding-right: 200px;
  justify-content: space-between;
  align-items: flex-start;
`;

const AppServiceEachBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 10px;
  padding-left: 200px;
  padding-right: 200px;
  width: 60%;
`;

const AppIntroTextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
`;

const AppIntroHeader = styled.span`
  font-size: 35px;
  font-weight: 600;
  margin-bottom: 50px;

  @media screen and (max-width: 1100px) {
    font-size: 25px;
  }
`;
const AppIntroText = styled.span`
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 25px;

  @media screen and (max-width: 1100px) {
    font-size: 25px;
  }
`;

const TabHeader = styled.p`
  font-size: 26px;
  font-weight: 500;
  margin-bottom: 70px;
  color: ${colors.gray};

  @media screen and (max-width: 1100px) {
    text-align: center;
  }
`;

const ServiceFirstText = styled.p`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 20px;
  color: ${colors.boldGray};
  margin-right: 10px;

  @media screen and (max-width: 1100px) {
    text-align: center;
    margin-right: 0px;
  }
`;

const ServiceSecondText = styled.p`
  font-size: 38px;
  font-weight: 600;
  margin-bottom: 20px;
  margin-right: 10px;

  /* color: ${colors.lightGray}; */

  @media screen and (max-width: 1100px) {
    text-align: center;
    line-height: 1.3;
    margin-right: 0px;
  }
`;

const ServiceGridItem = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  padding: 30px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ServiceItemText = styled.p`
  margin-top: 30px;
  font-size: 23px;
  font-weight: 700;
  color: ${colors.boldGray};
  text-align: center;
`;

const SecondBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.lightMain};
  padding-top: 150px;
  padding-bottom: 150px;
  padding-left: 100px;
  padding-right: 100px;
`;

const ThirdBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;
  padding-bottom: 150px;
  /* padding-left: 100px;
  padding-right: 100px; */
`;

const TextMediaBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;

const SecondMediaBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;

const SecondTextGroupBox = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (max-width: 1100px) {
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

function Home() {
  const [appIntroIndex, setAppIntroIndex] = useState(0);

  const svgStyle = {
    fill: `${colors.boldGray}`,
    width: "30%",
    height: "30%",
  };

  const chevronSvgStyle = {
    fill: `${colors.gray}`,
    width: 50,
    height: 50,
    marginLeft: 50,
    marginRight: 50,
    cursor: "pointer",
  };

  function onClickToLeft() {
    if (appIntroIndex != 0) {
      setAppIntroIndex(appIntroIndex - 1);
    } else {
      setAppIntroIndex(3);
    }
  }

  function onClickToRight() {
    if (appIntroIndex != 3) {
      setAppIntroIndex(appIntroIndex + 1);
    } else {
      setAppIntroIndex(0);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (appIntroIndex != 3) {
        setAppIntroIndex(appIntroIndex + 1);
      } else {
        setAppIntroIndex(0);
      }
    }, 1500);
    return () => clearInterval(interval);
  }, [appIntroIndex]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>오늘도청춘</title>
      </Helmet>

      <Wrapper>
        <FirstPage>
          <FirstImageBox>
            <img
              style={{ width: "100%" }}
              src={require("../assets/mainimg/main_phone_hand.png")}
            />
          </FirstImageBox>
          <FirstBox>
            <HeaderDescription>치매 예방 사업에</HeaderDescription>
            <HeaderDescription>IT 기술을 더하다</HeaderDescription>
            <HeaderBigText>오늘도청춘</HeaderBigText>
            <ButtonContainer>
              <ButtonBox>
                <a
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textDecoration: "none",
                  }}
                  href="https://play.google.com/store/apps/details?id=com.chugnchunon.chungchunon_android"
                  target={"_blank"}
                >
                  <FontAwesomeIcon
                    className="font"
                    icon={faGooglePlay}
                    style={{
                      fontSize: 40,
                      marginRight: 20,
                    }}
                  />
                  <ButtonText>Google Play</ButtonText>
                </a>
              </ButtonBox>
            </ButtonContainer>
          </FirstBox>
        </FirstPage>
        {/* 활용 사례 */}
        {/* 서비스 안내 */}
        <SecondBox>
          <TabHeader>오늘도청춘 이란?</TabHeader>
          <SecondMediaBox>
            <SecondTextGroupBox>
              <TextMediaBox>
                <ServiceFirstText>사용하기 어렵고 혼자 하는</ServiceFirstText>
                <ServiceFirstText>치매 예방은 이제 그만!</ServiceFirstText>
              </TextMediaBox>
            </SecondTextGroupBox>

            <SecondTextGroupBox>
              <TextMediaBox>
                <ServiceSecondText>시니어 분들이 하루 한번!</ServiceSecondText>
                <ServiceSecondText>단 5분!</ServiceSecondText>
              </TextMediaBox>
            </SecondTextGroupBox>

            <TextMediaBox>
              <ServiceSecondText>앱에 접속하여</ServiceSecondText>
              <ServiceSecondText>
                4가지 활동을 빠르게 체크하여
              </ServiceSecondText>
            </TextMediaBox>

            <TextMediaBox>
              <ServiceSecondText>
                치매를 예방하는 플랫폼입니다.
              </ServiceSecondText>
            </TextMediaBox>
          </SecondMediaBox>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridGap: 50,
              overflowWrap: "break-word",
            }}
          >
            <ServiceGridItem>
              <WalkSVG style={svgStyle} />
              <ServiceItemText>신체 건강 관리</ServiceItemText>
            </ServiceGridItem>
            <ServiceGridItem>
              <BrainSVG style={svgStyle} />
              <ServiceItemText>인지 능력 관리</ServiceItemText>
            </ServiceGridItem>
            <ServiceGridItem>
              <SmileSVG style={svgStyle} />
              <ServiceItemText>정신 건강 관리</ServiceItemText>
            </ServiceGridItem>
            <ServiceGridItem>
              <PenSVG style={svgStyle} />
              <ServiceItemText>사고 능력 관리</ServiceItemText>
            </ServiceGridItem>
          </div>
          {/* <img
            style={{ width: "60%" }}
            src={require("../assets/mainimg/service.png")}
          /> */}
        </SecondBox>
        {/* 앱 소개 */}
        <ThirdBox style={{ position: "relative" }}>
          <TabHeader>앱 소개</TabHeader>
          <div
            style={{
              top: 300,
              position: "absolute",
              width: "100%",
              height: 500,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              zIndex: 10,
            }}
          >
            <ChevronLeftSVG style={chevronSvgStyle} onClick={onClickToLeft} />
            <ChevronRightSVG style={chevronSvgStyle} onClick={onClickToRight} />
          </div>
          {appIntroIndex == 0 ? (
            <AppServiceEachBox>
              <AppIntroTextBox>
                <AppIntroHeader>1. 신체 건강 관리</AppIntroHeader>
                <AppIntroText>하루 목표 걸음수를 설정하면</AppIntroText>
                <AppIntroText>달성하는 즉시 칭찬과 격려로</AppIntroText>
                <AppIntroText>성취감을 느끼며</AppIntroText>
                <AppIntroText>건강을 관리합니다.</AppIntroText>
              </AppIntroTextBox>
              <img
                style={{ width: "45%" }}
                src={require("../assets/phoneimg3/1diary_step.png")}
              />
            </AppServiceEachBox>
          ) : appIntroIndex == 1 ? (
            <AppServiceEachBox>
              <AppIntroTextBox>
                <AppIntroHeader>2. 인지 능력 관리</AppIntroHeader>
                <AppIntroText>덧셈 뺄셈의 간단한 산수 문제의</AppIntroText>
                <AppIntroText>정답을 맞추는 즉시 칭찬과 격려로</AppIntroText>
                <AppIntroText>자신감을 얻으며</AppIntroText>
                <AppIntroText>인지 능력을 관리합니다.</AppIntroText>
              </AppIntroTextBox>
              <img
                style={{ width: "45%" }}
                src={require("../assets/phoneimg3/2diary_recognition.png")}
              />
            </AppServiceEachBox>
          ) : appIntroIndex == 2 ? (
            <AppServiceEachBox>
              <AppIntroTextBox>
                <AppIntroHeader>3. 정신 건강 관리</AppIntroHeader>
                <AppIntroText>10개의 감정 이모티콘을 통해</AppIntroText>
                <AppIntroText>현재의 나의 감정이 어떠한지</AppIntroText>
                <AppIntroText>표현함으로써</AppIntroText>
                <AppIntroText>정신 건강을 관리합니다.</AppIntroText>
              </AppIntroTextBox>
              <img
                style={{ width: "45%" }}
                src={require("../assets/phoneimg3/3diary_mood.png")}
              />
            </AppServiceEachBox>
          ) : appIntroIndex == 3 ? (
            <AppServiceEachBox>
              <AppIntroTextBox>
                <AppIntroHeader>4. 사고 능력 관리</AppIntroHeader>
                <AppIntroText>일기, 추억, 시 등 하루 한번씩</AppIntroText>
                <AppIntroText>자유로운 글쓰기 활동으로</AppIntroText>
                <AppIntroText>생각을 정리하며</AppIntroText>
                <AppIntroText>사고 능력을 관리합니다.</AppIntroText>
              </AppIntroTextBox>
              <img
                style={{ width: "45%" }}
                src={require("../assets/phoneimg3/4diary_todaydiary.png")}
              />
            </AppServiceEachBox>
          ) : null}
          <AppIntroEachBox style={{ marginTop: 50 }}>
            <AppIntroTextBox>
              <AppIntroText>다양한 사람들을 알아가고,</AppIntroText>
              <AppIntroText>현재 나에 대해 알릴 수 있어요.</AppIntroText>
            </AppIntroTextBox>
            <img
              style={{ width: "45%" }}
              src={require("../assets/phoneimg3/5group.png")}
            />
          </AppIntroEachBox>
          <AppIntroEachBox>
            <img
              style={{ width: "45%" }}
              src={require("../assets/phoneimg3/6ranking.png")}
            />
            <AppIntroTextBox>
              <AppIntroText>모든 활동에 점수를 부여해서</AppIntroText>
              <AppIntroText>순위 경쟁을 통한</AppIntroText>
              <AppIntroText>재미를 느껴요</AppIntroText>
            </AppIntroTextBox>
          </AppIntroEachBox>
          <AppIntroEachBox style={{ paddingBottom: "50px" }}>
            <AppIntroTextBox>
              <AppIntroText>여러가지 시니어 행사를 통해</AppIntroText>
              <AppIntroText>다양한 행사 상품을 획득해요</AppIntroText>
            </AppIntroTextBox>
            <img
              style={{ width: "45%" }}
              src={require("../assets/phoneimg3/7mission.png")}
            />
          </AppIntroEachBox>
        </ThirdBox>
        {/* 다운로드 */}
        <div>
          <FourthPage>
            <div></div>
            <div
              style={{
                width: 120,
                height: 120,
                borderRadius: 20,
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: 50,
              }}
            >
              <img
                style={{ width: 100, height: 100 }}
                src={require("../assets/white-icon.png")}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginRight: 100,
              }}
            >
              <DownloadHeader>오늘도청춘</DownloadHeader>
              <DownloadDescription>바로 시작하세요.</DownloadDescription>
            </div>
            <DownloadBox>
              <DownloadLink>
                <a
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textDecoration: "none",
                  }}
                  href="https://play.google.com/store/apps/details?id=com.chugnchunon.chungchunon_android"
                  target={"_blank"}
                >
                  <FontAwesomeIcon
                    className="font"
                    icon={faGooglePlay}
                    style={{
                      fontSize: 25,
                      marginRight: 10,
                      color: "white",
                    }}
                  />
                  <span style={{ color: "white" }}>Google Play</span>
                </a>
              </DownloadLink>
              <div style={{ width: 50 }}></div>
            </DownloadBox>
          </FourthPage>
        </div>
      </Wrapper>
    </>
  );
}

export default Home;
