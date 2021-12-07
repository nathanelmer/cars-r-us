import { getInteriors, setInerior } from "./database.js"

const interiors = getInteriors()

document.addEventListener("change", (event) => {
    if (event.target.name === "interiorOptions") {
      setInerior(parseInt(event.target.value));
    }
  });
  
  export const Interiors = () => {
    const interior = interiors.map((int) => {
      return ` 
          <option name="interiorOption" value="${int.id}"/>${int.type}
          `;
    });
  
    return interior.join("")
}
  