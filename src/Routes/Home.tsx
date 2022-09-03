import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay, faApple } from "@fortawesome/free-brands-svg-icons";
import colors from "../colors";
import ReactHelmet from "../components/ReactHelmet";

const Wrapper = styled.div`
  width: 100%;
  height: 200vh;
  display: flex;
  flex-direction: column;
`;

const FirstPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

const FirstBox = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px;
`;

const HeaderText = styled.span`
  font-size: 35px;
  font-weight: 400;
  color: ${colors.mainColor};
  margin-top: 20px;
`;

const HeaderBigText = styled.span`
  font-size: 100px;
  font-weight: 700;
  color: ${colors.mainColor};
  margin-top: 60px;
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
`;

const ButtonText = styled.span`
  color: ${colors.boldGray};
  font-size: 20px;
  font-weight: 300;
  &: hover {
    color: white;
  }
`;

const LogoImage = styled.img`
  width: 400px;
  height: 400px;
  margin-right: 200px;
`;

const ImageTextBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: right;
  margin-right: 200px;
`;

const ImageText = styled.span`
  font-size: 25px;
  font-weight: 500;
  color: ${colors.boldGray};
  margin-top: 20px;
`;

const SecondPage = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
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
`;

const SecondText = styled.span`
  color: ${colors.boldGray};
  font-size: 28px;
  font-weight: 400;
  margin-top: 15px;
`;

const HSecondHeader = styled.span`
  color: ${colors.mainColor};
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 30px;
  margin-left: 10px;
  margin-right: 10px;
`;

const HSecondText = styled.span`
  color: ${colors.mainColor};
  font-size: 28px;
  font-weight: 400;
  margin-top: 15px;
  margin-left: 8px;
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
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "55%",
              height: "70%",
              border: `3px solid ${colors.mainColor}`,
              backgroundColor: "white",
              borderBottomRightRadius: 150,
              zIndex: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SecondTextBox>
              <SecondRow>
                <SecondHeader>청춘온 앱에</SecondHeader>
                <HSecondHeader>있는 것</HSecondHeader>
              </SecondRow>
              <SecondRow>
                <SecondText>걸음 수 측정이</SecondText>
                <HSecondText>있다</HSecondText>
              </SecondRow>
              <SecondRow>
                <SecondText>일상 사진과 글이</SecondText>
                <HSecondText>있다</HSecondText>
              </SecondRow>
              <SecondRow>
                <SecondText>시를 다 쓰면 액자 안에</SecondText>
                <HSecondText>있다</HSecondText>
              </SecondRow>
              <SecondRow>
                <SecondText>모든 활동에 점수가</SecondText>
                <HSecondText>있다</HSecondText>
              </SecondRow>
              <SecondRow>
                <SecondText>실시간 순위를 확인할 수</SecondText>
                <HSecondText>있다</HSecondText>
              </SecondRow>
            </SecondTextBox>
          </div>
          <div
            style={{
              width: "55%",
              height: "60%",
              border: `3px solid ${colors.lightMain}`,
              backgroundColor: "white",
              borderTopLeftRadius: 150,
              position: "absolute",
              right: 0,
              bottom: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SecondTextBox>
              <SecondRow>
                <SecondHeader>청춘온 앱에</SecondHeader>
                <HSecondHeader>없는 것</HSecondHeader>
              </SecondRow>
              <SecondRow>
                <SecondText>회원 가입이</SecondText>
                <HSecondText>없다</HSecondText>
              </SecondRow>
              <SecondRow>
                <SecondText>영어가</SecondText>
                <HSecondText>없다</HSecondText>
              </SecondRow>
              <SecondRow>
                <SecondText>작은 글씨가</SecondText>
                <HSecondText>없다</HSecondText>
              </SecondRow>
              <SecondRow>
                <SecondText>MZ 세대가</SecondText>
                <HSecondText>없다</HSecondText>
              </SecondRow>
            </SecondTextBox>
          </div>
        </SecondPage>
      </Wrapper>
    </>
  );
}

export default Home;
