import { getColors, setColor } from "./database.js";

const colors = getColors();

document.addEventListener("change", (event) => {
  if (event.target.name === "paintOption") {
    setColor(parseInt(event.target.value))
  }
});

export const Colors = () => {
  const color = colors.map((paintColor) => {
    return ` 
        <option value="${paintColor.id}"/>${paintColor.color}
        `;
  });

  return color.join("");
};
