import { getTechnologies, getInteriors, getWheels, getColors, getOrders } from "./database.js";

const buildOrder = (order) => {
  const technology = getTechnologies();
  const interiors = getInteriors();
  const wheels = getWheels();
  const colors = getColors();
  const findTech = technology.find((tech) => tech.id === order.techId);
  const findInt = interiors.find((int) => int.id === order.interiorId);
  const findWheel = wheels.find((wheel) => wheel.id === order.wheelId);
  const findColor = colors.find((color) => color.id === order.colorId);
  const totalPrice = findTech.price + findColor.price + findInt.price + findWheel.price;
  return `<li>
            Order #${order.id} was placed on ${order.timestamp} and will cost $${totalPrice.toFixed(2)}
          </li>`;
};

export const Orders = () => {
  const orders = getOrders();

  let html = "<ul>";

  const listItems = orders.map((order) => buildOrder(order));

  html += listItems.join("")
  html += "</ul>";

  return html;
};
