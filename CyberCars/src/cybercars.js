/**
 * CyberCars
 * ---------
 *
 * This file must be completed according to the specification defined
 * by the various scenarios in the directory scenarios/.
 * The content of the methods below has to be modified and adapted as
 * needeed.
 */

 function isInt(n) {
    return n % 1 === 0;
 }
class Color {
    static red = new Color('red')
    static blue = new Color('blue');
    static green = new Color('green');
    static black = new Color('black');
    static white = new Color('white');
    /*...*/

    constructor(label) {
        this.label = label
    }
}


class Person {
    
    constructor (name , age/*...*/) {
        if (typeof name !== 'string') {
               throw new Error("name must be a string.")
              }
        if ((typeof age !== 'number')||((isInt(age))===false)) {
               
            throw new Error("age must be an Integer.")
            }
        this._name = name
        this._age= age
        this._cars=new Set()
        this._team==null
        /*...*/
        
    }
    getOwnedCars(){
        return this._cars
    }
    getName() {
        return this._name
    }

    setName(name) {
        if (typeof name !== 'string') {
            throw new Error("name must be a string.")
           }
        this._name = name
        /*...*/
    }

    getAge() {
        return this._age
    }

    setAge(age) {
        if ((typeof age !== 'number')||((isInt(age))===false)) {
               
            throw new Error("age must be an Integer.")
            }
        this._age = age
        /*...*/
    }
    toString(){
        this.age?.toString()||null;
    }
    addOwnedCar(car){
        if (!(car instanceof Car)) {
            throw new Error("car must be a Car.")
           }
        this._cars.add(car)
    }
    addOwnedCars(cars){
        for (const value of cars) {
            this._cars.add(value) // logs 1, 2 and 3
          }
    }
    removeOwnedCar(car){
        if (!(car instanceof Car)){
            throw new Error("car must be a Car.")
        }
        if(this._cars.has(car))
            this._cars.delete(car)
        else
            throw new Error("removal failed: this person is not the owner of the car.")
    }
    hasSpecificCarFromList(car){
        if (this._cars.includes(car))
            return true
        return false
    }
    /*...*/
    setTeam(team){
        
        if(this._team==team){
            return
        }
        if(this._team==null){
            this._team=team
            this._team.addMembers(this)
        }
        else if(team==null){
            this._team._members.delete(this)
            this._team=team
        }
        else{
            this._team._members.delete(this)
            this._team=team
            this._team.addMembers(this)
        }
    }
    getTeam(){
        return this._team
    }
}


class Car {
    constructor(name,color,owner){
        if (typeof name !== 'string') {
            throw new Error("plateNumber must be a string.")
           }
        if (!(color instanceof Color)) {
            throw new Error("color must be a Color.")
           }
       
        this._name=name;
        this._color=color;
        if(owner==null){
            this._owner=null
        }
        else{
            this._owner=this.setOwner(owner);
        }
    }
    /*...*/
    getPlateNumber() {
        return this._name
    }

    setPlateNumber(name) {
        if (typeof name !== 'string') {
            throw new Error("plateNumber must be a string.")
           }
        this._name = name
        /*...*/
    }
    getOwner() {
        return this._owner
    }

    setOwner(owner) {
        if (!(owner instanceof Person)) {
            throw new Error("owner must be a Person.")
           }
        if(this._owner!=owner && this._owner!=null){//djamila buys zoe car ab38er
            this._owner.removeOwnedCar(this)
        }
        this._owner=owner
        if(this._owner!=null)//djamila sell a car
            this._owner.addOwnedCar(this)
        
        /*...*/
    }

    getColor() {
        return this._color
    }

    setColor(color) {
        if (!(color instanceof Color)) {
            throw new Error("color must be a Color.")
           }
        this._color = color
        /*...*/
    }

}

/**
 * Teams can be ignored in the first increment.
 */
class Team {
    /*...*/
    constructor(name,number){
        if (typeof name !== 'string') {
             throw new Error("name must be a string.")
         }
        if ((typeof number !== 'number')||((isInt(number))===false)) {
            throw new Error("number must be an Integer.")
        }
        this._name=name
        this._number=number
        this._members=new Set()
    }
    getName(){
        return this._name
    }
    getNumber(){
        return this._number
    }
    addMembers(members){
        if(members instanceof Set){
            for(const value of members){
                value.setTeam(this)
            }
        }
        else{
            this._members.add(members)
        }
       
    
    }
    getMembers(){
        return this._members
    }
}

module.exports = {Color, Team, Person, Car}
