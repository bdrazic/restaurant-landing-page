import { Fragment } from "react";
import "./Menu.css";
import image3 from "../img/1.jpg";
import image4 from '../img/5.jpg';
import image5 from '../img/6.jpg';

const STARTERS = [
  {
    id: "m1",
    name: "Tomato Soup",
    price: 10.0,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "m2",
    name: "Chicken Soup",
    price: 12.0,
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    id: "m3",
    name: "French Toast",
    price: 10.0,
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
];

const MAINCOURSES = [
  {
    id: "m1",
    name: "Grilled Fish and Potatoes",
    price: 20.0,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "m2",
    name: "Chicken and Rice",
    price: 15.0,
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    id: "m3",
    name: "Turkey and Ham Pie",
    price: 20.0,
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: "m4",
    name: "Vegetable Pasta",
    price: 17.0,
    description: "Lorem ipsum dolor sit amet.",
  },
];

const DESSERT = [
    {
      id: "m1",
      name: "Fruit and Cream",
      price: 5.0,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "m2",
      name: "Ice Cream",
      price: 7.0,
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      id: "m3",
      name: "Chocolate Cake",
      price: 10.0,
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: "m4",
      name: "Apple Pie",
      price: 7.0,
      description: "Lorem ipsum dolor sit amet.",
    },
  ];

const Menu = () => {
  return (
    <Fragment>
      <br />
      <br />
      <div class="menu_container grid">
        <ul class="menu_list">
          <h1 class="menu_title">STARTERS</h1>
          {STARTERS.map((menuStarters) => (
            <li class="menu_list_item" key={menuStarters.id}>
              <h3 class="dish_title">{menuStarters.name}</h3>
              <h4>{menuStarters.description}</h4>
              <h5>Price: {menuStarters.price}.00$</h5>
            </li>
          ))}
        </ul>
        <img src={image3} class="menu_image" alt="menu dish"></img>
      </div>
      <br />
      <br />
      <div class="menu_container grid">
        <img src={image4} class="menu_image2" alt="menu dish"></img>
        <ul class="menu_list">
          <h1 class="menu_title">MAIN COURSES</h1>
          {MAINCOURSES.map((menuMain) => (
            <li class="menu_list_item" key={menuMain.id}>
              <h3 class="dish_title">{menuMain.name}</h3>
              <h4>{menuMain.description}</h4>
              <h5>Price: {menuMain.price}.00$</h5>
            </li>
          ))}
        </ul>
      </div>
      <br />
      <br />
      <div class="menu_container grid">
        <ul class="menu_list">
          <h1 class="menu_title">DESSERT</h1>
          {DESSERT.map((menuDessert) => (
            <li class="menu_list_item" key={menuDessert.id}>
              <h3 class="dish_title">{menuDessert.name}</h3>
              <h4>{menuDessert.description}</h4>
              <h5>Price: {menuDessert.price}.00$</h5>
            </li>
          ))}
        </ul>
        <img src={image5} class="menu_image" alt="menu dish"></img>
      </div>
    </Fragment>
  );
};

export default Menu;
