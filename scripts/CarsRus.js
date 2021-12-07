import { Colors } from "./Colors.js";
import { Interiors } from "./Interiors.js";
import { Technology } from "./Technology.js";
import { Wheels } from "./Wheels.js";
import { Orders } from "./Order.js";
import { addCustomOrder } from "./database.js";

export const CarsRus = () => {
  return `
   <h1>Cars R Us</h1>
   <div class="navBar">
   <section class="navItem">Home</section>
   <section class="navItem">Orders</section>
   </div>
   <article class="options">
   <section class="optionsList">
   <h3>Select a Paint Color</h3>
   <select class="dropbox" name="paintOption">
   <option value="0">*required*</option>
   ${Colors()}
   </select>
   </section>
   <section class="optionsList">
   <h3>Select an Interior Option</h3>
   <select class="dropbox" name="interiorOptions">
   <option value="0">*required*</option>
   ${Interiors()}
   </select>
   </section>
   <section class="optionsList">
   <h3>Select Your Tech</h3>
   <select class="dropbox" name="techOptions">
   <option value="0">*required*</option>
   ${Technology()}
   </select>
   </section>
   <section class="optionsList">
   <h3>Select Your Wheels</h3>
   <select class="dropbox" name="wheelOptions">
   <option value="0">*required*</option>
   ${Wheels()}
   </select>
   </section>
   </article>
   <article>
   <button id="orderButton">Create Order</button>
   </article>
   <article class="customOrders">
   <h2>Service Orders</h2>
    ${Orders()}
   </article>
   `;
};

document.addEventListener("click", (event) => {
  if (event.target.id === "orderButton"){
    addCustomOrder()
  }
})