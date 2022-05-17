
import { getInterior, getPaints, getTech, getWheels, getOrders } from "./database.js";











export const ordersHTML = (object) => {
    const paints = getPaints()
const inT = getInterior()
const tech = getTech()
const wheels = getWheels()

   const chosenPaint = paints.find((paint => {
    return paint.id === object.paintId
}))
const chosenTech = tech.find((tech => {
    return tech.id === object.techId
}))
const chosenWheels = wheels.find((wheel => {
    return wheel.id === object.wheelId
}))
const chosenInt = inT.find((inT => {
    return inT.id === object.IntId
}))

const totalCost = (chosenPaint.price + chosenTech.price + chosenWheels.price + chosenInt.price)
const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})

    let html = `<li id="order">Order #${parseInt(object.id)} was placed on ${object.timestamp}.  Total ${costString}</li>`

    return html
}





export const Orders = () => {
    const orderList = getOrders()
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
   // gets copy of the 'orders' array from database.js

let html = "<ul>"
//the build order list item hits once with the map and then adds together with the join/
    const listItems = orderList.map(ordersHTML)
    ////const listItem = orders.join(listItems)
html += listItems.join("")
   html +=  "</ul>"

    return html
}
















//code for making prices and options show up in window
const orderMessage = (order) => {

}





const customOrderBuilder = (order) => {
    const interiors = getInterior()
    const paints = getPaints()
    const tech = getTech()
    const wheels = getWheels()

    const foundOrder = paints.find((order => {
        paint
    }))
}
