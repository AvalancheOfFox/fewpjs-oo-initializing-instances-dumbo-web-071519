// Write your code here

class Breakfast {
    constructor(food, drink){
        this.food = food
        this.drink = drink
    }
}

class Lunch {
    constructor(salad, soup, drink) {
        this.salad = salad
        this.drink = drink
        this.soup = soup
    }
}

class Dinner {
    constructor(salad, soup, entree, dessert) {
        this.salad = salad
        this.entree = entree
        this.soup = soup
        this._dessert = dessert
    }
}


let breakfast = new Breakfast('breakfast')
let lunch = new Lunch('breakfast')
let _dinner = new Dinner('breakfast')