import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay, faApple } from "@fortawesome/free-brands-svg-icons";
import colors from "../colors";
import { Helmet } from "react-helmet-async";
import YouTube from "react-youtube";
import hpImage from "../assets/hp_image.jpg";
import Border from "../components/Border";
import ReactHelmet from "../components/ReactHelmet";

// 활용사례 702, 서비스소개 2063, 앱소개 5234, 다운로드 10336

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const FirstPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 100px;
  background-image: url(${hpImage});
  background-size: cover;
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
  font-size: 150px;
  font-weight: 900;
  color: ${colors.mainColor};
  margin-top: 60px;
`;

const HeaderDescription = styled.span`
  font-size: 70px;
  font-weight: 500;
  color: white;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 60px;
  width: 400px;
  justify-content: space-between;
`;

const ButtonBox = styled.div`
  width: 180px;
  height: 50px;
  border-radius: 50px;
  border: 1px solid ${colors.mainColor};
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .font {
    color: ${colors.mainColor};
  }
  &: hover {
    border: 1px solid ${colors.mainColor};
    background-color: ${colors.mainColor};
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
  color: ${colors.mainColor};
  font-size: 20px;
  font-weight: 300;
  &: hover {
    color: white;
  }
`;

const NewsBox = styled.div`
  margin-top: 50px;
  width: 600px;
  height: 60px;
  border-radius: 20px;
  background-color: ${colors.mainColor};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  .font {
    color: ${colors.boldGray};
  }
  &: hover {
    background-color: ${colors.boldGray};
    color: white;
    span {
      color: white;
    }
  }

  @media screen and (max-width: 1100px) {
    margin-top: 20px;
  }
`;

const NewsText = styled.span`
  color: white;
  font-size: 25px;
  font-weight: 600;
  &: hover {
    color: white;
  }
`;

const SecondPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 150px;

  @media screen and (max-width: 1100px) {
    margin-bottom: 50px;
  }
`;

const ThirdPage = styled.div`
  width: 100%;
  margin-bottom: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
  }
`;

const VideoBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
  margin-right: 60px;

  @media screen and (max-width: 1100px) {
    text-align: center;
    margin-bottom: 40px;
  }
`;

const VideoText = styled.span`
  font-family: "spoqa";
  font-weight: 800;
  font-size: 40px;
  color: ${colors.mainColor};
  margin-bottom: 20px;
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
  margin-bottom: 10px;
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

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const CellWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 80px;
  padding-right: 80px;

  @media screen and (max-width: 1100px) {
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 50px;
    padding-right: 50px;
  }
`;

const CellHeader = styled.h2`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 50px;
  color: ${colors.mainColor};

  @media screen and (max-width: 1100px) {
    margin-bottom: 20px;
  }
`;

const CellText = styled.p`
  font-size: 20px;
  color: ${colors.boldGray};
  margin-bottom: 10px;
  line-height: 45px;
`;

const CellImgBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const CellImg = styled.img`
  width: 320px;
`;

const MediaBox = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1100px) {
    display: flex;
    flex-direction: column;
  }
`;

const CellBox = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1100px) {
    display: flex;
    flex-direction: column;
  }
`;

function Total() {
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
              건강, 마음, 인지 관리를 한번에! 사용하기 쉬운 치매 예방 플랫폼
            </HeaderDescription>
            <HeaderBigText>오늘도청춘</HeaderBigText>
            <ButtonContainer>
              <ButtonBox>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://play.google.com/store/apps/details?id=com.chugnchunon.chungchunon_android"
                  target={"_blank"}
                >
                  <FontAwesomeIcon
                    className="font"
                    icon={faGooglePlay}
                    style={{
                      fontSize: 25,
                      marginRight: 10,
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
        <div className="service" style={{ backgroundColor: "#F6F7F9" }}>
          {/* 금연클리닉 */}
          <CellWrapper style={{ alignSelf: "flex-start", marginTop: 50 }}>
            <ContentBox>
              <CellHeader>1. 건강 관리</CellHeader>
              <CellText>
                치매 예방 최고의 운동은 걷기 운동!
                <br />
                "오늘도청춘"의 걸음수 측정으로 매일의 운동량을 체크할 수 있어요.
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
            <img
              style={{ width: 900 }}
              src={require("../assets/phoneimg/screen2.png")}
            />
          </CellWrapper>
          <Border />
          {/* 친구초대 */}
          <CellWrapper style={{ alignSelf: "flex-end" }}>
            <ContentBox style={{ alignItems: "flex-end", marginRight: 20 }}>
              <MediaBox>
                <CellImgBox style={{ marginRight: 30 }}>
                  <CellImg src={require("../assets/phoneimg/screen2.png")} />
                </CellImgBox>
                <div>
                  <CellHeader style={{ textAlign: "end" }}>
                    2. 마음 관리
                  </CellHeader>
                  <CellText style={{ textAlign: "end" }}>
                    치매 예방의 시작은 내 감정 읽기! <br />
                    "오늘도청춘"의 마음스티커로 매일의 나의 마음을 체크할 수
                    있어요.
                  </CellText>
                </div>
              </MediaBox>
            </ContentBox>
          </CellWrapper>
          <Border />
          {/* 채팅상담 */}
          <CellWrapper>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <ContentBox>
                <CellHeader>3. 인지 능력 관리</CellHeader>
                <CellText>
                  치매 예방의 핵심은 인지 능력 관리! <br />
                  매일의 일상을 짧게나마 기록하여 인지 능력을 키울 수 있어요.
                </CellText>
              </ContentBox>
              <CellImg
                style={{ marginLeft: 80 }}
                src={require("../assets/phoneimg/screen3.png")}
              />
            </div>
          </CellWrapper>
        </div>
        {/* 앱 소개 */}
        <div className="app">
          {/* 금연클리닉 */}
          <CellWrapper style={{ alignSelf: "flex-start", marginTop: 50 }}>
            <ContentBox>
              <CellHeader>1. 건강 관리</CellHeader>
              <CellText>
                치매 예방 최고의 운동은 걷기 운동!
                <br />
                "오늘도청춘"의 걸음수 측정으로 매일의 운동량을 체크할 수 있어요.
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
            <img
              style={{ width: 900 }}
              src={require("../assets/phoneimg/screen2.png")}
            />
          </CellWrapper>
          <Border />
          {/* 친구초대 */}
          <CellWrapper style={{ alignSelf: "flex-end" }}>
            <ContentBox style={{ alignItems: "flex-end", marginRight: 20 }}>
              <MediaBox>
                <CellImgBox style={{ marginRight: 30 }}>
                  <CellImg src={require("../assets/phoneimg/screen2.png")} />
                </CellImgBox>
                <div>
                  <CellHeader style={{ textAlign: "end" }}>
                    2. 마음 관리
                  </CellHeader>
                  <CellText style={{ textAlign: "end" }}>
                    치매 예방의 시작은 내 감정 읽기! <br />
                    "오늘도청춘"의 마음스티커로 매일의 나의 마음을 체크할 수
                    있어요.
                  </CellText>
                </div>
              </MediaBox>
            </ContentBox>
          </CellWrapper>
          <Border />
          {/* 채팅상담 */}
          <CellWrapper>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <ContentBox>
                <CellHeader>3. 인지 능력 관리</CellHeader>
                <CellText>
                  치매 예방의 핵심은 인지 능력 관리! <br />
                  매일의 일상을 짧게나마 기록하여 인지 능력을 키울 수 있어요.
                </CellText>
              </ContentBox>
              <CellImg
                style={{ marginLeft: 80 }}
                src={require("../assets/phoneimg/screen3.png")}
              />
            </div>
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
                  style={{ textDecoration: "none" }}
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

export default Total;
