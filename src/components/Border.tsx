import colors from "../colors";
import styled from "styled-components";

const BorderBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

function Border() {
  return (
    <BorderBox>
      <div
        style={{
          width: "70%",
          height: 2,
          backgroundColor: colors.lightGray,
          display: "flex",
          justifyItems: "center",
        }}
      ></div>
    </BorderBox>
  );
}

export default Border;
