import TextInput from "./TextInput";
import Form from "./Form";
import FormObject from "./FormObject";
import ListManipulation from "./ListManipulation";

const Class13 = () => {
  return (
    <div>
      <TextInput onChange={(text) => console.log(text)} />
      <Form />
      <FormObject />
      <ListManipulation />
    </div>
  );
};

export default Class13;
