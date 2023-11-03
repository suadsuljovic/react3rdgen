import "./text.css";

const Text = (props) => {
  const getTypeStyling = () => {
    switch (props.type) {
      case "t1":
        return "title";
      case "t2":
        return "titleBold";
      case "t3":
        return "normal";
      case "t4":
        return "price";
      default:
        return "normal";
    }
  };
  return <p className={getTypeStyling()}>{props.text}</p>;
};
export default Text;
