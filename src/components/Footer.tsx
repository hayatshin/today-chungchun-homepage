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
        청춘온
      </FooterText>
      <FooterText>대표: 신태건</FooterText>
      <FooterText>경기도 성남시 위례순환로 53 2동 13층</FooterText>
      <FooterText>문의 메일: help@chungchunon.com</FooterText>
      <FooterText>문의 번호: 031-756-1214</FooterText>
      <FooterText>사업자 등록번호: 628-36-01150</FooterText>
      <FooterText style={{ fontWeight: 400, marginTop: 20 }}>
        Copyright © {new Date().getFullYear()} 청춘온 All rights reserved.
      </FooterText>
    </FooterWrapper>
  );
}

export default Footer;
