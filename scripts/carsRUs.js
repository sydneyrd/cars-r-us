import {intHTML} from "./interiors.js"
import { paintSelectHTML } from "./paint.js";
import { wheelHTML } from "./wheels.js"
import { techHTML } from "./tech.js"
import { addCustomOrders } from "./database.js"
import {Orders} from "./orders.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrders()
            
            
            const orderHTML = document.querySelector("#orders")
             orderHTML.innerHTML += Orders()
            
           
            const ckbxs = document.querySelectorAll('input[name="resouce--tech"], input[name="resource--wheels"], input[name="resource--paint"], input[name="resource--interior"]' )
            ckbxs.forEach(ckbx => ckbx.checked = false)
        }
    }
)






export const page = () => {
    return `${intHTML()} <br> ${paintSelectHTML()} <br> ${wheelHTML()} <br> ${techHTML()} <article id="orders"><button id="orderButton">Create Custom Order</button>
    </article>`
    
}

