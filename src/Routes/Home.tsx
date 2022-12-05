import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay, faApple } from "@fortawesome/free-brands-svg-icons";
import colors from "../colors";
import { Helmet } from "react-helmet-async";
import YouTube from "react-youtube";
import hpImage from "../assets/hp_image.jpg";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const FirstPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 100px;
  background-image: url(${hpImage});
  background-size: cover;
  padding-top: 80px;
  padding-bottom: 200px;
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
`;

const ThirdPage = styled.div`
  width: 100%;
  margin-bottom: 150px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const VideoBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
  margin-right: 60px;
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

const DownloadLink = styled.div`
  border: 1px solid white;
  width: 180px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>금연온</title>
      </Helmet>
      <Wrapper>
        <FirstPage>
          <FirstBox>
            <HeaderDescription>금연에 혁신을 더하다</HeaderDescription>
            <HeaderBigText>금연온</HeaderBigText>
            <ButtonContainer>
              <ButtonBox>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://play.google.com/store/apps/details?id=kr.no_smoking"
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
              <ButtonBox>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://apps.apple.com/kr/app/%EA%B8%88%EC%97%B0on-%EB%8B%B9%EC%8B%A0%EC%9D%98-%EB%93%A0%EB%93%A0%ED%95%9C-%EA%B8%88%EC%97%B0%ED%8C%8C%ED%8A%B8%EB%84%88-%EB%B9%84%EB%8C%80%EB%A9%B4-%ED%81%B4%EB%A6%AC%EB%8B%89-%EA%B8%88%EC%97%B0%EC%98%A8/id1542173611"
                  target={"_blank"}
                >
                  <FontAwesomeIcon
                    className="font"
                    icon={faApple}
                    style={{
                      fontSize: 25,
                      marginRight: 10,
                    }}
                  />
                  <ButtonText>App Store</ButtonText>
                </a>
              </ButtonBox>
            </ButtonContainer>
          </FirstBox>
        </FirstPage>
        <SecondPage>
          <img
            src={require("../assets/nosmoking_news.png")}
            style={{ width: 700, height: 400 }}
          />
          <NewsBox>
            <a
              style={{ textDecoration: "none" }}
              href="https://search.naver.com/search.naver?where=news&sm=tab_pge&query=%EA%B8%88%EC%97%B0%EC%98%A8%20%7C%20%EA%B8%88%EC%97%B0ON%20%22%EB%B9%84%EB%8C%80%EB%A9%B4%20%EA%B8%88%EC%97%B0%ED%81%B4%EB%A6%AC%EB%8B%89%22&sort=1&photo=0&field=0&pd=0&ds=&de=&mynews=0&office_type=0&office_section_code=0&news_office_checked=&nso=so:dd,p:all,a:all&start=1"
              target={"_blank"}
            >
              <NewsText>네이버 기사 모아보기</NewsText>
            </a>
          </NewsBox>
        </SecondPage>
        <ThirdPage>
          <VideoBox>
            <VideoText>광주시보건소,</VideoText>
            <VideoText>금연온을 이용한</VideoText>
            <VideoText>금연클리닉 홍보 영상</VideoText>
          </VideoBox>
          <YouTube
            videoId={"-4JFlQQndDE"}
            opts={{
              width: "800",
              height: "500",

              playerVars: {
                autoplay: 1, //자동재생 O
                rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
                modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
              },
            }}
            onEnd={(e) => {
              e.target.stopVideo(0);
            }}
          />
        </ThirdPage>
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
              src={require("../assets/meta_img.png")}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: 100,
            }}
          >
            <DownloadHeader>금연온</DownloadHeader>
            <DownloadDescription>바로 시작하세요.</DownloadDescription>
          </div>
          <DownloadLink>
            <a
              style={{ textDecoration: "none" }}
              href="https://play.google.com/store/apps/details?id=kr.no_smoking"
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
          <DownloadLink>
            <a
              style={{ textDecoration: "none" }}
              href="https://apps.apple.com/kr/app/%EA%B8%88%EC%97%B0on-%EB%8B%B9%EC%8B%A0%EC%9D%98-%EB%93%A0%EB%93%A0%ED%95%9C-%EA%B8%88%EC%97%B0%ED%8C%8C%ED%8A%B8%EB%84%88-%EB%B9%84%EB%8C%80%EB%A9%B4-%ED%81%B4%EB%A6%AC%EB%8B%89-%EA%B8%88%EC%97%B0%EC%98%A8/id1542173611"
              target={"_blank"}
            >
              <FontAwesomeIcon
                className="font"
                icon={faApple}
                style={{
                  fontSize: 25,
                  marginRight: 10,
                  color: "white",
                }}
              />
              <span style={{ color: "white" }}>App Store</span>
            </a>
          </DownloadLink>
        </FourthPage>
      </Wrapper>
    </>
  );
}

export default Home;
