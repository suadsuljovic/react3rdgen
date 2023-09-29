import Input from "./input";

const Class7 = () => {
  return (
    <div>
      <Input
        type="text"
        onChangeText={(value) => console.log(value)}
        defaultValue="myinput"
        name="awesomeInput"
      />
      <Input />
    </div>
  );
};

export default Class7;
