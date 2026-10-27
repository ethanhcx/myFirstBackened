const fruits = require('../fruits.json')

// OOP - Object-Orientated-Programming
class Fruit {
    constructor(fruit) { // Constructor runs automatically every time the class is run
        this.genus = fruit.genus;
        this.name = fruit.name;
        this.id = fruit.id;
        this.family = fruit.family;
        this.order = fruit.order;
        this.nutritions = fruit.nutritions;
        
    }

    // These are all instances of this class

    static showAll() { // They are static because they deal with all the fruits
        return fruits.map(q => new Fruit(q))
    }

    static show(name) {
        const fruit = fruits.find((fruit) => fruit.name.toLowerCase() == name)

        if (fruit) {
        return new Fruit(fruit)
    } else {
        throw "The fruit does not exist!" 
    }   

    }

    static create(data) {
        const newFruit = data
        
        if (!data.name) {
            throw "A fruit needs a name"
        }

        const fruit = fruits.find((fruit) => fruit.name.toLowerCase() == data.name.toLowerCase())

        if (fruit) {
            throw "Fruit already exists"
        } else {
            newFruit['id'] = Math.max(...fruits.map(fruit => fruit.id)) + 1
            fruits.push(newFruit)

            return new Fruit(newFruit) // Returning a new instance of the Fruit class
        }

    }

    update(data) {
        const updateFruit = fruits.find((fruit => fruit.name.toLowerCase() == this.name.toLowerCase()))
        if (updateFruit) {
            if (data.name) updateFruit.name = data.name
            if (data.family) updateFruit.family = data.family

            return new Fruit(updateFruit)
        } else {
            throw "Fruit not found"
        }
    }

    destroy() {
         const deletedFruit = fruits.find((fruit => fruit.name.toLowerCase() == this.name.toLowerCase())) // Grab all the fruits we have and convert to lowercase

         if (deletedFruit) {
            const index = fruits.indexOf(deletedFruit)
            fruits.splice(index, 1) // Removes this specific fruit index
         } else {
            throw "Fruit not found"
         }

    }
    
}   

module.exports = Fruit