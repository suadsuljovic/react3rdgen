const Updates = (props) => {
  const { test, updateTest } = props;

  console.log("update2");
  const a = test + 1;

  return (
    <div>
      <p>{a}</p>
      <p>{test}</p>
      <button onClick={() => updateTest(test + 1)}>click</button>
    </div>
  );
};

export default Updates;
