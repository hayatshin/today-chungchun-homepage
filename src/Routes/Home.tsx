import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay, faApple } from "@fortawesome/free-brands-svg-icons";
import colors from "../colors";
import { Helmet } from "react-helmet-async";
import Border from "../components/Border";
import ReactHelmet from "../components/ReactHelmet";
import { Route } from "react-router-dom";
import mainBack from "../assets/mainimg/main-back.png";
import serviceImg from "../assets/mainimg/service.png";
import appIntroBack from "../assets/phoneimg2/app_intro_back.png";

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
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 100px;
  background-size: 100% 100%;
  background-image: url(${mainBack});
  padding-top: 80px;
  padding-bottom: 150px;

  @media screen and (max-width: 1100px) {
    margin-bottom: 50px;
  }
`;

const FirstBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  padding-left: 30px;
  padding-right: 30px;
`;

const HeaderBigText = styled.span`
  font-size: 100px;
  font-weight: 900;
  color: ${colors.mainColor};
  /* -webkit-text-stroke: 5px ${colors.boldGray}; */
  margin-top: 20px;

  @media screen and (max-width: 1100px) {
    font-size: 100px;
  }
`;

const HeaderDescription = styled.span`
  font-size: 30px;
  font-weight: 500;
  color: ${colors.boldGray};
  margin-bottom: 20px;
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
  padding-top: 20px;
  padding-left: 200px;
  padding-right: 200px;
  justify-content: space-between;
  align-items: flex-start;
`;

const AppIntroTextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
`;

const AppIntroHeader = styled.span`
  font-size: 50px;
  font-weight: 800;
  margin-bottom: 30px;
`;
const AppIntroText = styled.span`
  font-size: 40px;
  font-weight: 300;
  margin-bottom: 25px;
`;

function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>오늘도청춘 | 세상에서 가장 쉬운 치매 예방 플랫폼</title>
      </Helmet>

      <Wrapper>
        <FirstPage>
          <FirstBox>
            <HeaderDescription>
              건강, 마음, 인지 관리를 한번에!
            </HeaderDescription>
            <HeaderDescription>
              사용하기 쉬운 치매 예방 플랫폼
            </HeaderDescription>
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
        <div
          className="service"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50,
            marginBottom: 50,
          }}
        >
          <img
            style={{ width: "60%" }}
            src={require("../assets/mainimg/service.png")}
          />
        </div>
        {/* 앱 소개 */}
        <div
          className="service"
          style={{
            backgroundImage: `url(${appIntroBack})`,
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            backgroundBlendMode: "overlay",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50,
          }}
        >
          <AppIntroEachBox style={{ paddingTop: "50px" }}>
            <AppIntroTextBox>
              <AppIntroHeader>1. 건강 관리</AppIntroHeader>
              <AppIntroText>목표 걸음 달성</AppIntroText>
            </AppIntroTextBox>
            <img
              style={{ width: "35%" }}
              src={require("../assets/phoneimg2/diary1_step.png")}
            />
          </AppIntroEachBox>
          <AppIntroEachBox>
            <img
              style={{ width: "35%" }}
              src={require("../assets/phoneimg2/diary2_recognition.png")}
            />
            <AppIntroTextBox>
              <AppIntroHeader>2. 인지 관리</AppIntroHeader>
              <AppIntroText>산수 문제 풀기</AppIntroText>
            </AppIntroTextBox>
          </AppIntroEachBox>
          <AppIntroEachBox>
            <AppIntroTextBox>
              <AppIntroHeader>3. 마음 관리</AppIntroHeader>
              <AppIntroText>현재 감정 선택</AppIntroText>
            </AppIntroTextBox>
            <img
              style={{ width: "35%" }}
              src={require("../assets/phoneimg2/diary3_mood.png")}
            />
          </AppIntroEachBox>
          <AppIntroEachBox>
            <img
              style={{ width: "35%" }}
              src={require("../assets/phoneimg2/diary4_diary.png")}
            />
            <AppIntroTextBox>
              <AppIntroHeader>4. 정신 관리</AppIntroHeader>
              <AppIntroText>짧은 일기 쓰기</AppIntroText>
            </AppIntroTextBox>
          </AppIntroEachBox>
          <AppIntroEachBox>
            <AppIntroTextBox>
              <AppIntroText>다양한 사람들을 알아가고,</AppIntroText>
              <AppIntroText>현재 나에 대해 알릴 수 있어요.</AppIntroText>
            </AppIntroTextBox>
            <img
              style={{ width: "35%" }}
              src={require("../assets/phoneimg2/diary5_all.png")}
            />
          </AppIntroEachBox>
          <AppIntroEachBox>
            <img
              style={{ width: "35%" }}
              src={require("../assets/phoneimg2/diary6_ranking.png")}
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
              style={{ width: "35%" }}
              src={require("../assets/phoneimg2/diary8_mission.png")}
            />
          </AppIntroEachBox>
        </div>
        {/* 다운로드 */}
        <div className="download">
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
