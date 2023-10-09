const Class11 = () => {
  const imageUrl =
    "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80";

  const objectsList = [
    {
      title: "Nature Scene",
      url: imageUrl,
    },
    {
      title: "Cityscape",
      url: "",
    },
    {
      title: "Beach Sunset",
      url: imageUrl,
    },
    {
      title: "Mountain View",
      url: imageUrl,
    },
    {
      title: "Abstract Art",
      url: "",
    },
    {
      title: "Wildlife",
      url: imageUrl,
    },
    {
      title: "Space Exploration",
      url: imageUrl,
    },
    {
      title: "Food Delight",
      url: imageUrl,
    },
    {
      title: "Vintage Cars",
      url: imageUrl,
    },
    {
      title: "Travel Adventure",
      url: imageUrl,
    },
  ];

  return (
    <div>
      {objectsList.map((item, index) => {
        return (
          <div key={index}>
            {item.url && <img src={item.url} alt="" width={240} height={120} />}
            <p>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Class11;
