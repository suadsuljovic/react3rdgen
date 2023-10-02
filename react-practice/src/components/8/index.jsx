import Text from "./Text";

const Class8 = () => {
  return (
    <div>
      <Text type="h1" text="Ovo je h1 najveci text element" color="blue" bold />
      <Text
        type="h2"
        text="Ovo je h2 drugi najveci text element"
        color="gray"
      />
      <Text type="h3" text="Ovo je h2 drugi najveci text element" bold={true} />
      <Text type="h4" text="Ovo je h2 drugi najveci text element" />
      <Text type="title" text="Ovo je h2 drugi najveci text element" />
      <Text type="normal" text="Ovo je h2 drugi najveci text element" />
    </div>
  );
};

export default Class8;
