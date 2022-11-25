import Card from "./components/Card";
import "./App.css";

function App() {
  const cardInformationList = [
    { name: "card 1", text: "Some text" },
    { name: "card 2", text: "Some text" },
    { name: "card 3", text: "Some text" },
  ];

  return (
    <div className="App">
      <h1>Props</h1>
      {/* <Card name={cardInformationList[0].name} /> */}

      {cardInformationList.map((cardInfo) => {
        return (
          <Card
            info={cardInfo}
            key={cardInfo.name}
            disappear={(e) => {
              e.stopPropagation();
              console.log(e);
              e.target.className = "disappear";
            }}
          />
        );
      })}
    </div>
  );
}

export default App;
