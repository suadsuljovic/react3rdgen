import "./card2.css";

const Card2 = (props) => {
  return (
    <div className="card1">
      <img src={props.url} alt="" width={40} height={40} />
      <p className="text">{props.text}</p>
      <p className="description">{props.description}</p>
    </div>
  );
};

export default Card2;
