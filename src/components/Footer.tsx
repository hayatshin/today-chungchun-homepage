import styled from "styled-components";
import colors from "../colors";

const FooterWrapper = styled.div`
  background-color: ${colors.boldGray};
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  padding-bottom: 20px;
  padding-left: 50px;
`;

const FooterText = styled.span`
  color: white;
  font-weight: 300;
  font-size: 15px;
  margin-bottom: 15px;
`;

function Footer() {
  return (
    <FooterWrapper>
      <FooterText style={{ fontWeight: 400, fontSize: 20, marginBottom: 20 }}>
        (주)신지컴퍼니
      </FooterText>
      <FooterText>대표: 신혜정</FooterText>
      <FooterText>서울특별시 강동구 구천면로 427-8, 202호</FooterText>
      <FooterText>문의 메일: help@no-smoking.kr</FooterText>
      <FooterText>문의 번호: 02-6285-0825</FooterText>
      <FooterText>팩스 번호: 0504-033-5367</FooterText>
      <FooterText>사업자 등록번호: 694-86-02165</FooterText>
      <FooterText style={{ fontWeight: 400, marginTop: 20 }}>
        © 본 홈페이지에 대한 모든 권리는 신지컴퍼니(주)에 귀속됩니다.
      </FooterText>
    </FooterWrapper>
  );
}

export default Footer;
