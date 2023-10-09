const MiniCard = (props) => {
  const getColor = () => {
    if (props.value <= 500) {
      return "red";
    } else if (props.value <= 1000) {
      return "green";
    } else if (props.value <= 10000) {
      return "yellow";
    } else {
      return "purple";
    }
  };

  return (
    <div
      style={{
        padding: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p style={{ margin: 0, fontSize: 34, color: getColor() }}>
        {props.value}
      </p>
      <p style={{ margin: 0, paddingTop: 5 }}>{props.title}</p>
    </div>
  );
};

export default MiniCard;
