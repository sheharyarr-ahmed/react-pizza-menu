import React from "react"; //adding the libraries
import ReactDOM from "react-dom/client";
import "../src/index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  //the component
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
//another component but it is not being rendered as the App component is being rendered as written below but its ui can be render as it is declared in the App component
function Header() {
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>La Pizza React</h1>
    </header>
  );
}
//this code is the perfect exmaple of embeding js and css in jsx
// function Header() {
//   return (
//     <h1 style={{ color: "red", textTransform: "uppercase", fontSize: "48px" }}>
//       La Pizza React
//     </h1>
//   );
// }
function Menu() {
  //example of an nested component
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <Pizza
        name="Pizza Funghi"
        ingredients="tomato, mushrooms"
        // price="12" passed as an string we want this as an number so do this
        price={12}
        photoName="../pizzas/funghi.jpg"
      />
      <Pizza
        name="Pizza Spinaci"
        ingredients="tomato, mushrooms"
        price={12}
        photoName="../pizzas/spinaci.jpg"
      />
    </main>
  );
}
function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name}></img>
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price + 4}</span>
      </div>
    </div>
  );
}
function Footer() {
  //react will use use this jsx and in this jsx it cna be seen that there is an java-script and html are embed and react can use it

  ///using javascript
  const hour = new Date().getHours();
  const openHour = 1;
  const closeHour = 10;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  //   if (hour >= openHour && hour <= closeHour) alert("We're currently open");
  //   else alert("Sorry, We're currently closed");
  return (
    <footer className="footer">
      {" "}
      {new Date().toLocaleTimeString()} We're currently open
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
