import MiniCard from "./MiniCard";

const MiniCardList = () => {
  const objectsList = [
    { title: "Widget A", value: 1500 },
    { title: "Gizmo X", value: 8000 },
    { title: "Thingamajig B", value: 500 },
    { title: "Doodad Q", value: 12000 },
    { title: "Contraption Y", value: 3000 },
    { title: "Widget Z", value: 18000 },
    { title: "Dinglehopper M", value: 700 },
    { title: "Whatchamacallit J", value: 16000 },
    { title: "Doohickey L", value: 2500 },
    { title: "Thingummy G", value: 10000 },
  ];

  return (
    <div>
      {objectsList.map((item, index) => {
        return <MiniCard key={index} title={item.title} value={item.value} />;
      })}
    </div>
  );
};
export default MiniCardList;
