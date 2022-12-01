import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay, faApple } from "@fortawesome/free-brands-svg-icons";
import colors from "../colors";
import { generateMedia } from "styled-media-query";
import { Helmet } from "react-helmet-async";
import YouTube from "react-youtube";

const customoMedia = generateMedia({
  cellphone: "500px",
});

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  ${customoMedia.lessThan("cellphone")`
  height: 180vh;
  `}
`;

const FirstPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;

  ${customoMedia.lessThan("cellphone")`
  flex-direction: column;
  `}
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
  padding-bottom: 150px;

  ${customoMedia.lessThan("cellphone")`
  height: 50%;
  justify-content: center;
  `}
`;

const HeaderBigText = styled.span`
  font-size: 100px;
  font-weight: 700;
  color: ${colors.mainColor};
  margin-top: 60px;

  ${customoMedia.lessThan("cellphone")`
  font-size: 60px;
  margin-top: 30px;
  `}
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 60px;
  width: 400px;
  justify-content: space-between;

  ${customoMedia.lessThan("cellphone")`
  width: 330px;
  margin-top: 30px;
  `}
`;

const ButtonBox = styled.div`
  width: 180px;
  height: 50px;
  border-radius: 50px;
  border: 1px solid ${colors.boldGray};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.mainColor};
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

  ${customoMedia.lessThan("cellphone")`
  width: 150px;
  `}
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

  ${customoMedia.lessThan("cellphone")`
  width: 150px;
  `}
`;

const ButtonText = styled.span`
  color: ${colors.boldGray};
  font-size: 20px;
  font-weight: 300;
  &: hover {
    color: white;
  }

  ${customoMedia.lessThan("cellphone")`
  font-size: 15px;
  `}
`;

const NewsText = styled.span`
  color: white;
  font-size: 25px;
  font-weight: 600;
  &: hover {
    color: white;
  }

  ${customoMedia.lessThan("cellphone")`
  font-size: 15px;
  `}
`;

const LogoImage = styled.img`
  width: 600px;

  ${customoMedia.lessThan("cellphone")`
  width: 250px;
  height: 250px;
  margin-right: 0px;
  `}
`;

const SecondPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10%;

  ${customoMedia.lessThan("cellphone")`
  margin-top: 50px;
  height: 50%;
  `}
`;

const ThirdPage = styled.div`
  width: 100%;
  height: 600px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const VideoText = styled.span`
  font-family: "spoqa";
  font-weight: 800;
  font-size: 40px;
  color: ${colors.mainColor};
  margin-bottom: 20px;
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
            <img
              src={require("../assets/main_title.png")}
              style={{ width: "75%" }}
            />
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
          <FirstBox>
            <LogoImage src={require("../assets/room.png")} />
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
              href="https://search.naver.com/search.naver?sm=tab_hty.top&where=news&query=%EA%B8%88%EC%97%B0%EC%98%A8+%2B+%EB%AA%A8%EB%B0%94%EC%9D%BC+%2B+%ED%81%B4%EB%A6%AC%EB%8B%89+%2B+%EC%95%B1&oquery=%EA%B8%88%EC%97%B0%EC%98%A8+%2B+%EB%AA%A8%EB%B0%94%EC%9D%BC+%2B+%ED%81%B4%EB%A6%AC%EB%8B%89&tqi=hGB6%2Blprvmsssc3hkpRsssssslR-182052"
              target={"_blank"}
            >
              <NewsText>네이버 기사 모아보기</NewsText>
            </a>
          </NewsBox>
        </SecondPage>
        <ThirdPage>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "end",
              marginRight: 60,
            }}
          >
            <VideoText>광주시,</VideoText>
            <VideoText>금연온을 이용한</VideoText>
            <VideoText>금연클리닉 홍보 영상</VideoText>
          </div>
          <YouTube
            videoId={"-4JFlQQndDE"}
            opts={{
              width: "500",
              height: "300",

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
          <img
            src={require("../assets/counselor.png")}
            style={{ width: "450px", height: "450px", alignSelf: "flex-end" }}
          />
        </ThirdPage>
      </Wrapper>
    </>
  );
}

export default Home;
