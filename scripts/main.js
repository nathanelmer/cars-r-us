import { CarsRus } from "./CarsRus.js"

const mainContainer = document.querySelector("#container")

const renderHTML = () => mainContainer.innerHTML = CarsRus()

renderHTML()

document.addEventListener("stateChanged", event => {
    renderHTML()
})