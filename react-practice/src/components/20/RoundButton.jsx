const RoundButton = (props) => {
  return (
    <div
      style={{
        width: 25,
        height: 25,
        borderRadius: 15,
        background: props.color,
        border: "1px solid black",
        cursor: "pointer",
      }}
      onClick={() => props?.onClick()}
    ></div>
  );
};

export default RoundButton;
