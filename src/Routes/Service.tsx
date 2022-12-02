import styled from "styled-components";
import colors from "../colors";
import Border from "../components/Border";
import ReactHelmet from "../components/ReactHelmet";

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const CellWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
`;

const CellHeader = styled.h2`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 50px;
  color: ${colors.mainColor};
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

function Service() {
  return (
    <>
      <ReactHelmet title="서비스 소개" />

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
          style={{ width: 900 }}
          src={require("../assets/corefn/mission4.png")}
        />
      </CellWrapper>
      <Border />
      {/* 친구초대 */}
      <CellWrapper style={{ alignSelf: "flex-end" }}>
        <ContentBox style={{ alignItems: "flex-end", marginRight: 20 }}>
          <MediaBox>
            <CellImgBox style={{ marginRight: 80 }}>
              <CellImg src={require("../assets/corefn/invite1.png")} />
              <CellImg src={require("../assets/corefn/invite2.png")} />
            </CellImgBox>
            <div>
              <CellHeader style={{ textAlign: "end" }}>
                2. 친구초대 미션
              </CellHeader>
              <CellText style={{ textAlign: "end" }}>
                본인은 비흡연자라도, 주변에 흡연자 한 명 정도는 있기 마련입니다.
                <br />
                친구를 금연클리닉에 초대하면 선물을 받는 "친구초대 미션"을
                통해서
                <br />
                비흡연자도 금연클리닉에 소중한 친구를 데리고 올 수 있게 됩니다.
              </CellText>
            </div>
          </MediaBox>
        </ContentBox>
      </CellWrapper>
      <Border />
      {/* 채팅상담 */}
      <CellWrapper>
        <MediaBox>
          <ContentBox>
            <CellHeader>3. 채팅상담 기능</CellHeader>
            <CellText>
              해당 보건소를 관할 보건소로 선택한 사용자와 채팅으로 상담이
              가능합니다. <br />
              단순 채팅 뿐 아니라 이미지, 사진 등도 전송이 가능하기 때문에{" "}
              <br />
              효과적인 비대면 금연상담을 진행할 수 있습니다.
            </CellText>
          </ContentBox>
          <CellImg
            style={{ marginLeft: 80 }}
            src={require("../assets/corefn/chatting.png")}
          />
        </MediaBox>
      </CellWrapper>
    </>
  );
}

export default Service;
