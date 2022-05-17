import { getPaints, setPaint } from "./database.js"



export const paintSelectHTML = () => {
    let paints = getPaints()
    let htmlString = `<h3 class="paint--head">Paint</h3><section id='paint__options'><select id='resource--paint'><option value='0'>Select an option</option>`

 const optionSelect = paints.map(paintOptions)

htmlString += optionSelect.join("")

htmlString += `</select> </section>`
return htmlString
    } 


const paintOptions = (paint) => {
    return `<option value='${paint.id}'>${paint.color}</option>`
}


    
    
    //saves the selected value currently outputs window alert just for testing
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "resource--paint"){
            setPaint(parseInt(changeEvent.target.value))
            let paintType = rightPaint(changeEvent.target.value)
            window.alert(`${paintType}`)
        }
    }
)



//this function finds the name of the technology
const rightPaint = (paintVal) => {
    let paintList = getPaints()
    for (const paint of paintList)
    if (parseInt(paintVal) === paint.id) {
        return paint.color
    }
}
