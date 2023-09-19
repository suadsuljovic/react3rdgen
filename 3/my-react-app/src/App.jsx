import "./App.css";

function App() {
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <p
        style={{
          width: "100%",
          fontSize: 34,
          fontWeight: 700,
          padding: 0,
          margin: 0,
        }}
      >
        Kickstarter Actually Pinterest Brunch Bitters Occupy
      </p>
      <div style={{ width: "100%" }}>
        <p
          style={{
            padding: "0 0 10px 0",
            margin: 0,
            fontSize: 24,
            textAlign: "start",
          }}
        >
          Taxidermy bushwick celiac master cleanse microdosing seitan. Fashion
          axe four dollar toast truffaut, direct trade kombucha brunch
          williamsburg keffiyeh gastropub tousled squid meh taiyaki drinking
          vinegar tacos.
        </p>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <button> Click</button>
          <a href="">Link to</a>
        </div>
      </div>
    </div>
  );
}

export default App;
