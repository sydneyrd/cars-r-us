import { getInterior, setInterior } from "./database.js"


export const intHTML = () => {
    let interiors = getInterior()
    let htmlString = `<h3 class"interiors-head">Interiors</h3><section id='int__options'><select id='resource--interior'><option value='0'>Select an option</option>`

 const optionSelect = interiors.map(interiorOpt)

htmlString += optionSelect.join("")

htmlString += `</select> </section>`
return htmlString
    } 


const interiorOpt = (interior) => {
    return `<option value='${interior.id}'>${interior.color}</option>`
}


    //saves the selected value currently outputs window alert just for testing
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "resource--interior"){
            setInterior(parseInt(changeEvent.target.value))
            let intType = rightInt(changeEvent.target.value)
            window.alert(`${intType}`)
        }
    }
)



//this function finds the name of the technology
const rightInt = (intVal) => {
    let interiors = getInterior()
    for (const interior of interiors)
    if (parseInt(intVal) === interior.id) {
        return interior.color
    }
}
