import { getTechnologies, setTech } from "./database.js";


const technology = getTechnologies();

document.addEventListener("change", (event) => {
  if (event.target.name === "techOptions") {
    setTech(parseInt(event.target.value));
  }
});

export const Technology = () => {
  const tech = technology.map((t) => {
    return ` 
          <option name="techOption" value="${t.id}"/>${t.type}
          `;
  });

  return tech.join("");
};
