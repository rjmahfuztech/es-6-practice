class Parent{
    constructor() {
        this.fatherName = "Schwerzenegger";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    // If need u can declare a function inside it..
    getFulName(){
        return this.name + " " + this.fatherName;
    }
}
const baby = new Child("Arnold");
const baby2 = new Child("Tom");
console.log(baby.getFulName()); // function....
console.log(baby2);