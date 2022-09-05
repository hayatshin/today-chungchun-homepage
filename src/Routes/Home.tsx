import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay, faApple } from "@fortawesome/free-brands-svg-icons";
import colors from "../colors";
import ReactHelmet from "../components/ReactHelmet";
import { generateMedia } from "styled-media-query";

const customoMedia = generateMedia({
  cellphone: "500px",
});

const Wrapper = styled.div`
  width: 100%;
  height: 200vh;
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

  ${customoMedia.lessThan("cellphone")`
  flex-direction: column;
  `}
`;

const FirstBox = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px;

  ${customoMedia.lessThan("cellphone")`
  height: 50%;
  justify-content: center;
  `}
`;

const HeaderText = styled.span`
  font-size: 35px;
  font-weight: 400;
  color: ${colors.mainColor};
  margin-top: 20px;

  ${customoMedia.lessThan("cellphone")`
  font-size: 23px;
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
  &: hover {
    border: 1px solid ${colors.boldGray};
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

const LogoImage = styled.img`
  width: 400px;
  height: 400px;
  margin-right: 200px;

  ${customoMedia.lessThan("cellphone")`
  width: 250px;
  height: 250px;
  margin-right: 0px;
  `}
`;

const ImageTextBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: right;
  margin-right: 200px;

  ${customoMedia.lessThan("cellphone")`
  margin-right: 0px;
  margin-top: -80px;
  `}
`;

const ImageText = styled.span`
  font-size: 25px;
  font-weight: 500;
  color: ${colors.boldGray};
  margin-top: 20px;

  ${customoMedia.lessThan("cellphone")`
  font-size: 20px;
  margin-top: 0px;
  `}
`;

const SecondPage = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;

  ${customoMedia.lessThan("cellphone")`
  margin-top: 50px;
  height: 50%;
  `}
`;

const SecondHave = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 55%;
  height: 70%;
  border: 3px solid ${colors.mainColor};
  background-color: white;
  border-bottom-right-radius: 150px;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  ${customoMedia.lessThan("cellphone")`
  width: 60%;
  height: 50%;
  border-bottom-right-radius: 50px;
  `}
`;

const SecondDontHave = styled.div`
  width: 55%;
  height: 60%;
  border: 3px solid ${colors.lightMain};
  background-color: white;
  border-top-left-radius: 150px;
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  ${customoMedia.lessThan("cellphone")`
  width: 60%;
  height: 60%;
  border-top-left-radius: 50px;
  `}
`;

const SecondTextBox = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 50;
`;

const SecondHeader = styled.span`
  color: ${colors.boldGray};
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 30px;

  ${customoMedia.lessThan("cellphone")`
  font-size: 20px;
  margin-bottom: 20px;
  `}
`;

const HSecondHeader = styled.span`
  color: ${colors.mainColor};
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 30px;
  margin-left: 10px;
  margin-right: 10px;

  ${customoMedia.lessThan("cellphone")`
    margin-left: 10px;
    font-size: 20px;
    margin-bottom: 20px;
  `}
`;

const SecondText = styled.span`
  color: ${colors.boldGray};
  font-size: 28px;
  font-weight: 400;
  margin-top: 15px;

  ${customoMedia.lessThan("cellphone")`
  font-size: 15px;
  `}
`;

const HSecondText = styled.span`
  color: ${colors.mainColor};
  font-size: 28px;
  font-weight: 400;
  margin-top: 15px;
  margin-left: 8px;

  ${customoMedia.lessThan("cellphone")`
  font-size: 15px;
  `}
`;

const SecondRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

function Home() {
  return (
    <>
      <ReactHelmet title="홈" />
      <Wrapper>
        <FirstPage>
          <FirstBox>
            <HeaderText>청춘을 켜다</HeaderText>
            <HeaderText>청춘이 오다</HeaderText>
            <HeaderBigText>청춘온</HeaderBigText>
            <ButtonContainer>
              <ButtonBox>
                <FontAwesomeIcon
                  icon={faGooglePlay}
                  style={{ fontSize: 25, marginRight: 10 }}
                />
                <ButtonText>Google Play</ButtonText>
              </ButtonBox>
              <ButtonBox>
                <FontAwesomeIcon
                  icon={faApple}
                  style={{ fontSize: 25, marginRight: 10 }}
                />
                <ButtonText>App Store</ButtonText>
              </ButtonBox>
            </ButtonContainer>
          </FirstBox>
          <FirstBox>
            <ImageTextBox>
              <ImageText>#여사님스타그램</ImageText>
              <ImageText>#선생님스타그램</ImageText>
            </ImageTextBox>
            <LogoImage src={require("../assets/ch_icon.jpg")} />
          </FirstBox>
        </FirstPage>
        <SecondPage>
          <SecondHave>
            <SecondTextBox>
              <SecondRow>
                <SecondHeader>청춘온 앱에</SecondHeader>
                <HSecondHeader>있는 것</HSecondHeader>
              </SecondRow>
              <SecondRow>
                <SecondText style={{ fontWeight: 500, marginRight: 5 }}>
                  걸음수
                </SecondText>
                <SecondText>측정이</SecondText>
                <HSecondText>있다</HSecondText>
              </SecondRow>
              <SecondRow>
                <SecondText style={{ fontWeight: 500, marginRight: 5 }}>
                  일상
                </SecondText>
                <SecondText>사진과 글이</SecondText>
                <HSecondText>있다</HSecondText>
              </SecondRow>
              <SecondRow>
                <SecondText>모든 활동에</SecondText>
                <SecondText style={{ fontWeight: 500, marginLeft: 5 }}>
                  점수
                </SecondText>
                <SecondText>가</SecondText>
                <HSecondText>있다</HSecondText>
              </SecondRow>
              <SecondRow>
                <SecondText>실시간</SecondText>
                <SecondText style={{ fontWeight: 500, marginLeft: 5 }}>
                  순위
                </SecondText>
                <SecondText>를 확인할 수</SecondText>
                <HSecondText>있다</HSecondText>
              </SecondRow>
            </SecondTextBox>
          </SecondHave>
          <SecondDontHave>
            <SecondTextBox>
              <SecondRow>
                <SecondHeader>청춘온 앱에</SecondHeader>
                <HSecondHeader>없는 것</HSecondHeader>
              </SecondRow>
              <SecondRow>
                <SecondText>복잡한</SecondText>
                <SecondText style={{ fontWeight: 500, marginLeft: 5 }}>
                  회원가입
                </SecondText>
                <SecondText>이</SecondText>
                <HSecondText>없다</HSecondText>
              </SecondRow>
              <SecondRow>
                <SecondText style={{ fontWeight: 500 }}>영어</SecondText>
                <SecondText>로 된 것이</SecondText>
                <HSecondText>없다</HSecondText>
              </SecondRow>
              <SecondRow>
                <SecondText>보기 힘든</SecondText>
                <SecondText style={{ fontWeight: 500, marginLeft: 5 }}>
                  작은 글씨
                </SecondText>
                <SecondText>가</SecondText>
                <HSecondText>없다</HSecondText>
              </SecondRow>
              <SecondRow>
                <SecondText>갈등의</SecondText>
                <SecondText style={{ fontWeight: 500, marginLeft: 5 }}>
                  MZ세대
                </SecondText>
                <SecondText>가</SecondText>
                <HSecondText>없다</HSecondText>
              </SecondRow>
            </SecondTextBox>
          </SecondDontHave>
        </SecondPage>
      </Wrapper>
    </>
  );
}

export default Home;
