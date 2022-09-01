import colors from "../colors";

function Border() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "60%",
          height: 3,
          backgroundColor: colors.lightMain,
          display: "flex",
          justifyItems: "center",
        }}
      ></div>
    </div>
  );
}

export default Border;
