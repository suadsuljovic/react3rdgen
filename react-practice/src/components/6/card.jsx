import "./card.css";

const Card = (props) => {
  console.log(props);

  return (
    <div className="card">
      <img src={props.img} alt="" width={40} height={40} />
      <p className="name">Name: {props.name} </p>
      <p className="surname">Surname: {props.surname}</p>
    </div>
  );
};

export default Card;
