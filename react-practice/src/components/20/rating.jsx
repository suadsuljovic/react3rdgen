import Star from "./Star";

const Rating = (props) => {
  return (
    <>
      {props.value >= 1 ? <Star color="blue" /> : <Star color="black" />}
      {props.value >= 2 ? <Star color="blue" /> : <Star color="black" />}
      {props.value >= 3 ? <Star color="blue" /> : <Star color="black" />}
      {props.value >= 4 ? <Star color="blue" /> : <Star color="black" />}
      {props.value >= 5 ? <Star color="blue" /> : <Star color="black" />}
    </>
  );
};

export default Rating;
