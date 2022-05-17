import { getWheels, setWheels } from "./database.js"


export const wheelHTML = () => {
    let wheels = getWheels()
    let htmlString = `<h3 class"wheels--head">Wheels</h3><section id='wheel__options'><select id='resource--wheels'><option value='0'>Select an option</option>`

 const optionSelect = wheels.map(wheelsOpt)

htmlString += optionSelect.join("")

htmlString += `</select> </section>`
return htmlString
    } 


const wheelsOpt = (wheel) => {
    return `<option value='${wheel.id}'>${wheel.type}</option>`
}


//saves the selected value currently outputs window alert just for testing
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "resource--wheels"){
            setWheels(parseInt(changeEvent.target.value))
            let wheelType = rightWheel(changeEvent.target.value)
            window.alert(`${wheelType}`)
        }
    }
)



//this function finds the name of the technology
const rightWheel = (wheelVal) => {
    let wheelList = getWheels()
    for (const wheel of wheelList)
    if (parseInt(wheelVal) === wheel.id) {
        return wheel.type
    }
}
