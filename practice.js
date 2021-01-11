// class Building{
//     constructor(name,desktop){
//         this.name = name;
//         this.desktop = desktop;
        
//     }
//     name1(){
//         return ` this is ${this. name} `;
//     }
//     details(){
//         return `${this.name} is ${this.desktop}`
//     }
    
// }
// const home = new Building("laptop","Dell")
// console.log(home.name1())
// console.log(home.details())
 
class Mobile{
    constructor(){
        this.model = "sumsung";
        this.model1 = "MI"
    }
    show(){
        return `${this.model}  price 3000`;
    }
    mi(){
        return `${this.model1}  price 8000`;
    }
}
var nokiA = new Mobile();
console.log(nokiA.show())
console.log(nokiA.mi())