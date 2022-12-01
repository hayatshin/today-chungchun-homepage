import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";
import colors from "../colors";
import { generateMedia } from "styled-media-query";

const customoMedia = generateMedia({
  cellphone: "500px",
});

const MailWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MailText = styled.p`
  font-size: 23px;
  font-weight: 600;
  color: black;
  margin-bottom: 20px;

  ${customoMedia.lessThan("cellphone")`
  font-size: 18px;
  `}
`;

function Mail() {
  return (
    <MailWrapper>
      <FontAwesomeIcon
        icon={faPaperPlane}
        style={{ fontSize: 100, marginBottom: 100, color: colors.mainColor }}
      />
      <MailText>성공적으로 계약 문의를 전송했습니다.</MailText>
      <MailText>빠르게 회신 드리도록 하겠습니다.</MailText>
    </MailWrapper>
  );
}

export default Mail;
