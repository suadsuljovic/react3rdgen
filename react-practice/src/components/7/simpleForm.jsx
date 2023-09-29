import { makeUpperCase } from "./utils";

const SimpleForm = ({ defaultInput, buttonTitle, onComplete }) => {
  const onChange = (e) => {
    console.log(makeUpperCase(e.target.value));
  };

  return (
    <div>
      <input defaultValue={defaultInput} onChange={() => onChange()} />
      <button onClick={onComplete}>{buttonTitle}</button>
    </div>
  );
};
export default SimpleForm;
