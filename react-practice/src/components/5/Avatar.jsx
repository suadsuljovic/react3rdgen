import "./avatar.css";

const Avatar = (props) => {
  // eslint-disable-next-line react/prop-types
  const { name } = props;

  return (
    <div className="card">
      <img
        src="https://cdn1.vectorstock.com/i/1000x1000/23/70/man-avatar-icon-flat-vector-19152370.jpg"
        alt=""
        className="cardImage"
      />
      <div className="nameContainer">
        <p className="name">{name}</p>
        <p className="position">UI Designer</p>
      </div>
    </div>
  );
};

export default Avatar;
