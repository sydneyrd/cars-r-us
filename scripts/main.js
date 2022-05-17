
import { page } from "./carsRUs.js"
 


const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = page()
}

renderAllHTML()


document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})

