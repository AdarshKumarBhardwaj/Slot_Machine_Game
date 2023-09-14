import logo from "./logo.svg";
import "./App.css";

const Slot = ({ x, y, z }) => {
  if (x === y && y === z) {
    return (
      <>
        <h1>
          {x} {y} {z}
          <hr />
        </h1>
        <div>This is matching</div>
      </>
    );
  } else {
    return (
      <>
        <h1>
          {x} {y} {z}
        </h1>
        <hr />
        <div>This is not matching</div>
      </>
    );
  }
};
function App() {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          backgroundColor: "white",
          padding: "20px",
        }}
      >
        🎰 Slot Machine Game
      </h1>

      <div
        style={{
           display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "white",
          borderRadius: "10px",
        }}
      >
        <Slot x="😄" y="😄" z="😄" />
        <Slot x="🍌" y="🍎" z="👨" />
        <Slot x="🍎" y="😄" z="👍" />
        <Slot x="🦮" y="💯" z="😄" />
      </div>
    </>
  );
}

export default App;
