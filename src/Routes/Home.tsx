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
        {/* 활용 사례 */}
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
        {/* 서비스 안내 */}
        <div style={{ backgroundColor: "#F6F7F9" }}>
          {/* 금연클리닉 */}
          <CellWrapper style={{ alignSelf: "flex-start", marginTop: 50 }}>
            <ContentBox>
              <CellHeader>1. 금연클리닉 등록 미션</CellHeader>
              <CellText>
                금연ON App 안에서 "금연클리닉 등록 미션"에 참여하면 보건소 방문
                없이도 <br /> "금연클리닉 등록카드"와 "서비스 참여 및
                개인정보동의서"를 비대면으로 작성할 수 있고,
                <br />
                관리자는 인터넷상으로 서류를 열람하실 수 있습니다.
              </CellText>
            </ContentBox>
            <CellImgBox>
              <CellImg src={require("../assets/corefn/mission1.png")} />
              <CellImg src={require("../assets/corefn/mission2.png")} />
              <CellImg src={require("../assets/corefn/mission3.png")} />
            </CellImgBox>
            <img
              style={{ width: 900, marginLeft: 30 }}
              src={require("../assets/corefn/mission4.png")}
            />
          </CellWrapper>
          <Border />
          {/* 친구초대 */}
          <CellWrapper style={{ alignSelf: "flex-end" }}>
            <ContentBox style={{ alignItems: "flex-end", marginRight: 20 }}>
              <MediaBox>
                <CellImgBox style={{ marginRight: 30 }}>
                  <CellImg src={require("../assets/corefn/invite1.png")} />
                  <CellImg src={require("../assets/corefn/invite2.png")} />
                </CellImgBox>
                <div>
                  <CellHeader style={{ textAlign: "end" }}>
                    2. 친구초대 미션
                  </CellHeader>
                  <CellText style={{ textAlign: "end" }}>
                    본인은 비흡연자라도, 주변에 흡연자 한 명 정도는 있기
                    마련입니다.
                    <br />
                    친구를 금연클리닉에 초대하면 선물을 받는 "친구초대 미션"을
                    통해서
                    <br />
                    비흡연자도 금연클리닉에 소중한 친구를 데리고 올 수 있게
                    됩니다.
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
                <CellHeader>3. 채팅상담 기능</CellHeader>
                <CellText>
                  해당 보건소를 관할 보건소로 선택한 사용자와 채팅으로 상담이
                  가능합니다. <br />
                  단순 채팅 뿐 아니라 이미지, 사진 등도 전송이 가능하기 때문에
                  <br />
                  효과적인 비대면 금연상담을 진행할 수 있습니다.
                </CellText>
              </ContentBox>
              <CellImg
                style={{ marginLeft: 80 }}
                src={require("../assets/corefn/chatting.png")}
              />
            </div>
          </CellWrapper>
        </div>
        {/* 앱 소개 */}
        <div>
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
              <CellImgBox style={{ marginLeft: 150 }}>
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
                <CellImgBox style={{ marginRight: 100 }}>
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
                    내 주변의 소중한 사람의 건강을 챙기는 것은 물론, <br />
                    랭킹에 따른 푸짐한 선물까지 받게 된다면 <br />
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
              <CellImgBox style={{ marginLeft: 150 }}>
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
                <CellImgBox style={{ marginRight: 150 }}>
                  <CellImg src={require("../assets/appintro/mission1.png")} />
                  <CellImg src={require("../assets/appintro/mission2.png")} />
                </CellImgBox>
                <div>
                  <CellHeader>4. 금연미션 화면</CellHeader>
                  <CellText>
                    멀기만 해 보이는 금연 목표를 달성하는 방법!
                  </CellText>
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
                  보건소별 커뮤니티를 통해 공지사항도 확인하고, <br /> 게시판을
                  통해 서로의 금연 노하우를 공유하면서 <br /> 금연이라는 목표를
                  향해 함께 나아가다보면
                </CellText>
                <CellText>
                  언젠가 우리 모두 금연 목표를 달성할 수 있을거예요!
                </CellText>
              </ContentBox>
              <CellImgBox style={{ marginLeft: 150 }}>
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
                <CellImgBox style={{ marginRight: 150 }}>
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
                    금연을 하면서 스스로 얼마나 더 건강해졌는지 <br /> 한눈에
                    알아볼 수 있습니다!
                  </CellText>
                </div>
              </CellBox>
            </ContentBox>
          </CellWrapper>
        </div>
        {/* 다운로드 */}
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
          <DownloadBox>
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
          </DownloadBox>
        </FourthPage>
      </Wrapper>
    </>
  );
}

export default Home;
