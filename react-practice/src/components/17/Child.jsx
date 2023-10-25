const Child = ({ state, updateState }) => {
  return (
    <div>
      <p style={{ color: state % 2 === 0 ? "yellow" : "red" }}>child</p>
      <p>{state}</p>
      <button onClick={() => updateState(state + 2)}>Click 2</button>
    </div>
  );
};
export default Child;
