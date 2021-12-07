const database = {
    paintColors: [
        {id: 1, color: "Silver", price: 600},
        {id: 2, color: "Midnight Blue", price: 700},
        {id: 3, color: "Firebrick Red", price: 800},
        {id: 4, color: "Spring Green", price: 500}
    ],
    interiors: [
        {id: 1, type: "Beige Fabric", price: 75},
        {id: 2, type: "Charcoal Fabric", price: 50},
        {id: 3, type: "White Leather", price: 40},
        {id: 4, type: "Black Leather", price: 35}
    ],
    technologies: [
        {id: 1, type: "Basic Package", price: 100},
        {id: 2, type: "Navigation Package", price: 250},
        {id: 3, type: "Visibility Package", price: 350},
        {id: 4, type: "Ultra Package", price: 550},
    ], 
    wheels: [
        {id: 1, type: "17-inch Chrome", price: 150},
        {id: 2, type: "17-inch Black", price: 200},
        {id: 3, type: "18-inch Spoke Silver", price: 300},
        {id: 4, type: "18-inch Spoke Black", price: 400}
    ], 
    customOrders: [{
        id: 1, 
        colorId: 3,
        interiorId: 2,
        techId: 1,
        wheelId: 3,
        timestamp: 1614659931693
    }],
    orderBuilder: {}                            
}

export const setColor = (id) => {
    database.orderBuilder.colorId = id
}

export const setInerior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTech = (id) => {
    database.orderBuilder.techId = id
}

export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}

export const getColors = () => {
    return database.paintColors.map(paint => ({...paint}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(tech => ({...tech}))
}

export const getWheels = () => {
   return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}

export const addCustomOrder = () => {
    if (database.orderBuilder.interiorId === undefined || database.orderBuilder.techId === undefined || database.orderBuilder.wheelId === undefined || database.orderBuilder.colorId === undefined){
        window.alert("Please select something from each box")
        return
    }

    const newOrder = {...database.orderBuilder}

    const lastIndex = database.customOrders.length - 1

    newOrder.id = database.customOrders[lastIndex].id + 1
    
    newOrder.timestamp = Date.now()

    database.customOrders.push(newOrder)

    database.orderBuilder = {}

    document.dispatchEvent(new CustomEvent("stateChanged"))

    window.alert("Thank you for your order!")
}