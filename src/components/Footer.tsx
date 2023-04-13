import styled from "styled-components";
import colors from "../colors";

const FooterWrapper = styled.div`
  width: 100%;
  background-color: ${colors.boldGray};
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  padding-bottom: 20px;
  padding-left: 40px;
  box-sizing: border-box;
`;

const FooterText = styled.span`
  color: white;
  font-weight: 300;
  font-size: 15px;
  margin-bottom: 15px;
`;

function Footer() {
  const year = new Date(Date.now()).getFullYear();
  return (
    <FooterWrapper>
      <FooterText style={{ fontWeight: 400, fontSize: 20, marginBottom: 20 }}>
        (주)오늘도청춘
      </FooterText>
      <FooterText>대표: 신혜정</FooterText>
      <FooterText>
        경기도 용인시 수지구 동천로99번길 3, 더라이즈 비지니스센터 34호
      </FooterText>
      <FooterText>문의 메일: help@chungchunon.com</FooterText>
      <FooterText>문의 번호: 031. 756. 1214</FooterText>
      <FooterText>사업자 등록번호: 628-36-01150</FooterText>
      <FooterText style={{ fontWeight: 400, marginTop: 20 }}>
        Copyright © {year} (주)오늘도청춘. All Right Reserved.
      </FooterText>
    </FooterWrapper>
  );
}

export default Footer;
