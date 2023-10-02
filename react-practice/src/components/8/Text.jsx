const Text = ({ type = "h1", text, color, bold = false }) => {
  const getTypeStyling = () => {
    switch (type) {
      case "h1":
        return { fontSize: 44, lineHeight: 1.5 };
      case "h2":
        return { fontSize: 34, lineHeight: 1.5 };
      case "h3":
        return { fontSize: 24, lineHeight: 1.5 };
      case "h4":
        return { fontSize: 20, lineHeight: 1.5 };
      case "title":
        return { fontSize: 18, lineHeight: 1.5 };
      case "normal":
        return { fontSize: 16, lineHeight: 1.5 };
    }
  };
  const boldness = bold ? 700 : 400;

  return (
    <p style={{ ...getTypeStyling(), color, fontWeight: boldness }}>{text}</p>
  );
};
export default Text;
