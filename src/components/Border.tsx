import colors from "../colors";

function Border() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 50,
        marginBottom: 50,
      }}
    >
      <div
        style={{
          width: "70%",
          height: 2,
          backgroundColor: colors.lightGray,
          display: "flex",
          justifyItems: "center",
        }}
      ></div>
    </div>
  );
}

export default Border;
