import styled from "styled-components";
import ReactHelmet from "../components/ReactHelmet";

const NewsWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function News() {
  return (
    <>
      <ReactHelmet title="활용 사례" />
      <NewsWrapper>
        <span style={{ fontWeight: 400, fontSize: 20 }}>
          서비스를 준비 중입니다.
        </span>
      </NewsWrapper>
    </>
  );
}

export default News;
