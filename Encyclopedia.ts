import {ReferenceItem} from "./ReferenceItem";
import {NewReferenceItem} from "./NewReferenceItem";

class Encyclopedia extends  ReferenceItem{
    constructor(public readonly title: string, year: number, readonly edition: number | string ) {
        super(title, year);
    }
    printItem(){
        console.log(`The ${this.title} was published in ${this.year} department ${ReferenceItem.department} `)
        console.log("Edition: edition"+ this.year)
    }
}

function main(){
    let refBook = new Encyclopedia("Encyclopedia", 2019, "Cars")
    refBook.printItem()
}
class NewEncyclopedia extends NewReferenceItem{
    constructor(public readonly title: string, year: number, readonly edition: number | string ) {
        super(title, year);
    }
    printItem(){
        console.log(`The ${this.title} was published in ${this.year} department ${ReferenceItem.department} `)
        console.log("Edition: edition"+ this.year)
    }
}
main()