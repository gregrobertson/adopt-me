import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
