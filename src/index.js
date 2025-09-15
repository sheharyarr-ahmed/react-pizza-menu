import React from "react"; //adding the libraries
import ReactDOM from "react-dom/client";

function App() {
  //the component
  return <h1>HELLO REACT</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
