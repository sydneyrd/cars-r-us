const database = {
    paint: [
        {
            id: 1,
            color: "Silver",
            price: 25
        },
        {
            id: 2,
            color: "Midnight Blue",
            price: 350
        },
        {
            id: 3,
            color: "Firebrick Red",
            price: 7
        },
        {
            id: 4,
            color: "Spring Green",
            price: 99
        }

    ],
    interior: [
        {
            id: 1,
            color: "Beight Fabric",
            price: 84

        },
        {
            id: 2,
            color: "Charcoal Fabric",
            price: 202
        },
        {
            id: 3,
            color: "White Leather",
            price: 543
        },
        {
            id: 4,
            color: "Black Leather",
            price: 532
        }
    ],
    tech: [
        {
            id: 1,
            type: "Basic Package (basic sound system)",
            price: 432
        },
        {
            id: 2,
            type: "Navigation Package (includes integrated controls)",
            price: 432
        },
        {
            id: 3,
            type: "Visibility Package (includes side and rear mirrors)",
            price: 6534
        },
        {
            id: 4,
            type: "Ultra Package (includes navigation and visibility packages)",
            price: 424
        }

    ],
    wheels: [
        {
            id: 1,
            type: "17-Inch Pair Radial",
            price: 53423
        },
        {
            id: 2,
            type: "17-Inch Pair Radial Black",
            price: 54
        },
        {
            id: 3,
            type: "18-Inch Pair Spoke Silver",
            price: 865
        },
        {
            id: 4,
            type: "18-Inch Pair Spoke Black",
            price: 5333
        }
    ],
    orderBuilder: [{

    }],
    customOrders: [{
        id: 0,
        techId: "1",
        wheelId: "2",
        paintId: "3",
        IntId: "4",
        timestamp: 1234


    }],
}

export const getWheels = () => {
    return database.wheels.map(wheels => ({ ...wheels }))
}

export const getPaints = () => {
    return database.paint.map(paint => ({ ...paint }))
}
export const getTech = () => {
    return database.tech.map(tech => ({ ...tech }))
}
export const getInterior = () => {
    return database.interior.map(interior => ({ ...interior }))
}

export const getOrders = () => {
    return database.customOrders.map(customOrders => ({ ...customOrders }))
}

export const setTechnology = (id) => {
    database.customOrders.techId = id
}

export const setInterior = (id) => {
    return database.customOrders.IntId = id
}

export const setWheels = (id) => {
    return database.customOrders.wheelId = id
}

export const setPaint = (id) => {
    return database.customOrders.paintId = id
}

export const addCustomOrders = () => {
    // Copy the current state of user choices
    const newOrder = { ...database.orderBuilder }

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}