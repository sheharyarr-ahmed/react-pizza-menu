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
  const pizzas = pizzaData;
  //example of an nested component
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {pizzas && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )}
    </main>
  );
}
function Pizza(props) {
  if (props.pizzaObj.soldOut) return null; //this snippet is an example of multiple returns from an component out of the jsx
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}></img>
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price + 4}</span>
      </div>
    </li>
  );
}
function Footer() {
  //react will use use this jsx and in this jsx it cna be seen that there is an java-script and html are embed and react can use it

  //extracting components jsx into a new component, here its done in the footer component

  ///using javascript
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 22;
  // const isOpen = true
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  //   if (hour >= openHour && hour <= closeHour) alert("We're currently open");
  //   else alert("Sorry, We're currently closed");
  // beneath code is an example of rendering with ternary operator
  // return (
  //   <footer className="footer">
  //     {isOpen ? (
  //       <div className="order">
  //         <p>We're open until {closeHour}:00. Come visit us or order online.</p>
  //         <button className="btn">Order</button>
  //       </div>
  //     ) : (
  //       <p>
  //         We're happy to welcome you between {openHour}:00 and {closeHour}:00
  //       </p>
  //     )}
  //   </footer>
  // );
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}
// the order component is being extracted into the footer component
function Order(props) {
  return (
    <div className="order">
      <p>
        We're open until {props.closeHour}:00. Come visit us or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
