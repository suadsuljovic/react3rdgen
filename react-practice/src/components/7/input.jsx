const Input = ({
  type = "text",
  className,
  style = {},
  onChangeText,
  placeholder,
  ...other
}) => {
  return (
    <input
      type={type}
      style={style}
      className={`myStyle ${className}`}
      placeholder={placeholder}
      onChange={(e) => onChangeText(e.target.value)}
      {...other}
    />
  );
};

export default Input;
