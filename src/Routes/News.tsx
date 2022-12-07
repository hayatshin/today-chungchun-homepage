import styled from "styled-components";
import colors from "../colors";
import YouTube from "react-youtube";

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

function News() {
  return (
    <>
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
    </>
  );
}

export default News;
