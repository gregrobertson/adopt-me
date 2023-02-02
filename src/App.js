const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      animal: "Dog",
      name: "Hunter",
      breed: "Golden Retriever",
    }),
    React.createElement(Pet, {
      animal: "Dog",
      name: "Saint",
      breed: "Border Collie",
    }),
    React.createElement(Pet, {
      animal: "Bunny",
      name: "Thumper",
      breed: "Long-haired",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
