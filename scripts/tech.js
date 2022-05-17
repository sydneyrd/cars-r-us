import { getTech, setTechnology } from "./database.js"

//creates the technology form section
export const techHTML = () => {
    let techSpecs = getTech()
    let htmlString = `<h3 class="tech--header">Technologies</h3><section id='tech__options'><select id='resource--tech'><option value='0'>Select an option</option>`

 const optionSelect = techSpecs.map(techOpt)

htmlString += optionSelect.join("")

htmlString += `</select> </section>`
return htmlString
    } 


const techOpt = (tech) => {
    return `<option value='${tech.id}'>${tech.type}</option>`
}


//saves the selected value currently outputs window alert just for testing
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "resource--tech"){
            setTechnology(parseInt(changeEvent.target.value))
            let techType = rightTech(changeEvent.target.value)
            window.alert(`${techType}`)
        }
    }
)



//this function finds the name of the technology
const rightTech = (techVal) => {
    let techList = getTech()
    for (const tech of techList)
    if (parseInt(techVal) === tech.id) {
        return tech.type
    }
}


//document.addEventListener(
 //   "change",
   // (changeEvent) => {
     //   if (changeEvent.target.id === "resource") {
       //     const chosenOption = changeEvent.target.value
        //    console.log(chosenOption)  // "1" or "2"
