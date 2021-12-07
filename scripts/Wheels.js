import { getWheels, setWheel } from "./database.js";

const wheels = getWheels();

document.addEventListener("change", (event) => {
  if (event.target.name === "wheelOptions") {
    setWheel(parseInt(event.target.value))
  }
});

export const Wheels = () => {
  const wheel = wheels.map((w) => {
    return ` 
        <option value="${w.id}"/>${w.type}
        `;
  });

  return wheel.join("");
};