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
import { url } from "inspector";

// 활용사례 702, 서비스소개 2063, 앱소개 5234, 다운로드 10336

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const FirstPage = styled.div`
  width: 100%;
  height: 500px;
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
  font-size: 120px;
  font-weight: 900;
  color: white;
  -webkit-text-stroke: 5px ${colors.boldGray};
  margin-top: 60px;

  @media screen and (max-width: 1100px) {
    font-size: 100px;
  }
`;

const HeaderDescription = styled.span`
  font-size: 40px;
  font-weight: 500;
  color: ${colors.boldGray};
  margin-bottom: 30px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 100px;
  width: 100%;
  justify-content: center;
`;

const ButtonBox = styled.div`
  width: 500px;
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
  font-size: 30px;
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

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 65%;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const CellWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 50px;

  @media screen and (max-width: 1100px) {
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 50px;
    padding-right: 50px;
  }
`;

const CellHeader = styled.h2`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 50px;
  color: ${colors.mainColor};

  @media screen and (max-width: 1100px) {
    margin-bottom: 20px;
    font-size: 30px;
  }
`;

const CellText = styled.p`
  font-size: 23px;
  color: ${colors.boldGray};
  margin-bottom: 10px;
  line-height: 45px;

  @media screen and (max-width: 1100px) {
    font-size: 20px;
  }
`;

const CellImgBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const CellImg = styled.img`
  width: 400px;

  @media screen and (max-width: 1100px) {
    width: 300px;
  }
`;

function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>오늘도청춘 - 시니어들을 위한 일기 SNS</title>
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
                      fontSize: 50,
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
            marginTop: 150,
            marginBottom: 150,
          }}
        >
          <img
            style={{ width: "50%" }}
            src={require("../assets/mainimg/service.png")}
          />
        </div>
        {/* border */}
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div
            style={{
              borderRadius: 30,
              width: "50%",
              height: 10,
              backgroundColor: colors.lightGray,
              display: "flex",
              justifyItems: "center",
            }}
          ></div>
        </div>
        {/* 앱 소개 */}
        <div
          className="app"
          style={{
            marginTop: 150,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* 1 */}
          <CellWrapper style={{ backgroundColor: `${colors.ivory}` }}>
            <ContentWrapper>
              <ContentBox>
                <CellHeader>1. 건강 관리</CellHeader>
                <CellText>
                  치매 예방 최고의 운동은 걷기 운동!
                  <br />
                  "오늘도청춘"의 걸음수 측정으로 <br /> 매일의 운동량을 체크할
                  수 있어요.
                </CellText>
              </ContentBox>

              <CellImgBox
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CellImg src={require("../assets/phoneimg/screen1.png")} />
              </CellImgBox>
            </ContentWrapper>
          </CellWrapper>
          {/* 2 */}
          <CellWrapper>
            <ContentWrapper>
              <CellImgBox style={{ marginRight: 30 }}>
                <CellImg src={require("../assets/phoneimg/screen2.png")} />
              </CellImgBox>
              <ContentBox>
                <CellHeader style={{ textAlign: "end" }}>
                  2. 마음 관리
                </CellHeader>
                <CellText style={{ textAlign: "end" }}>
                  치매 예방의 시작은 내 감정 읽기! <br />
                  "오늘도청춘"의 마음스티커로 <br />
                  매일의 나의 마음을 체크할 수 있어요.
                </CellText>
              </ContentBox>
            </ContentWrapper>
          </CellWrapper>
          {/* 3 */}
          <CellWrapper style={{ backgroundColor: `${colors.ivory}` }}>
            <ContentWrapper>
              <ContentBox>
                <CellHeader>3. 인지 능력 관리</CellHeader>
                <CellText>
                  치매 예방의 핵심은 인지 능력 관리! <br />
                  매일의 일상을 짧게나마 기록하여 <br /> 인지 능력을 키울 수
                  있어요.
                </CellText>
              </ContentBox>
              <CellImg
                style={{ marginLeft: 80 }}
                src={require("../assets/phoneimg/screen3.png")}
              />
            </ContentWrapper>
          </CellWrapper>
          {/* 4 */}
          <CellWrapper style={{ marginBottom: 70 }}>
            <ContentWrapper>
              <CellImgBox style={{ marginRight: 30 }}>
                <CellImg src={require("../assets/phoneimg/screen4.png")} />
              </CellImgBox>
              <ContentBox>
                <CellHeader style={{ textAlign: "end" }}>
                  4. 대인 관계 관리
                </CellHeader>
                <CellText style={{ textAlign: "end" }}>
                  치매 예방에서 가장 중요한 것은 대인 관계! <br />
                  "오늘도청춘"은 혼자서 하는 것이 아닌, <br />
                  많은 사람들과 서로 소통하면서 하기에
                  <br /> 외롭지 않을 수 있어요.
                </CellText>
              </ContentBox>
            </ContentWrapper>
          </CellWrapper>
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
