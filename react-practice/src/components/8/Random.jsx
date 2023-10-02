import "./random.css";

const Random = () => {
  const randomNumber = Math.random();

  if (randomNumber < 0.5) {
    return <div className="less"></div>;
  }

  return <div className="more"> </div>;
};

export default Random;
