import SimpleComponent from "./SimpleComponent";

const List = () => {
  const list = [
    { text: "Users", number: "2.7K" },
    { text: "Subscribes", number: "1.8K" },
    { text: "Downloads", number: "35" },
    { text: "Products", number: "4" },
  ];
  return (
    <div>
      {list.map((item, index) => {
        return <SimpleComponent key={index} p1={item.number} p2={item.text} />;
      })}
    </div>
  );
};
export default List;
