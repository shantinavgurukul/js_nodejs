// class Animals{
//     constructor(dog,colours){
//         this.name=dog
//         this.colours=colours

//     }
// }
// let kuch = new Animals("shera", "red")
// console.log(kuch)

class Human{
    constructor(name,age,sex){
        this.name = name
        this.age = age
        this.sex = sex
    }
    is_name(){
        return `${this.name} is girl`;
    }
    ageOf(){
        return ` ${this.name}  is ${this.age} years old`;
    }
    Sex(){
        return ` ${this.name} is a ${this.sex}`;
    }
}
class child extends Human{
    constructor(name,age,sex,position,subject,langauge){
        super(name,age,sex)
        // this.name = name
        // this.age = age
        // this.sex = sex
        this.position = position
        this.subject = subject
        this. langauge = langauge
    }
    study(){
        return`${this.name} is studying ${this.position}`;
    }
    program(){
        return `${this.name} can programme in ${this.langauge}`;
    }
    details(){
        return `${this.name} ${super.Sex()} and ${super.ageOf()}`;
    }
    
}
let insaan = new Human("shanti",21,"female")
// console.log(insaan.is_name())
// console.log(insaan.ageOf())
// console.log(insaan.Sex())
const child_inf = new child("shanti",21,"female","management","B.com",["python","html-css","javascript"])
console.log(child_inf.study())
console.log(child_inf.program())
console.log(child_inf.details())