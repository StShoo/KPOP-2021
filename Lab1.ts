enum Category{
    BusinessAnalyst,
    Developer,
    Designer,
    QA,
    ScrumMaster
}

function getAllworkers() {
    let workers = [
        {id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, Category:Category[1]},
        {id: 2,Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, Category:Category[2]},
        {id: 3,Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, Category:Category[1]},
        {id: 4,Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, Category:Category[4]}
    ]
    return workers;
}

let workersArray = getAllworkers();

function logFirstAvailable (workersArray = getAllworkers()) {
    console.log('Кількість робітників: ' + workersArray.length);
    console.log('Доступні робітники: ');

    for(let i of workersArray){
        if (i.available == true){
            console.log('\t' + i.Name + ' ' + i.surname);
        }
    }
}


function getWorkersNamesByCategory (workersArray, workersCategory: string = "Designer"){
    let categorySurnameArray: string[] = [];
    workersArray.forEach(i =>{
        if (i.Category == workersCategory){

            categorySurnameArray.push(i.surname)
        }
    })
    return categorySurnameArray
}

function logWorkersNames (categorySurnameArray){
    console.log(categorySurnameArray)
}

function getWorkerByID(id, workersArray){
    let nameSurnameSalaryArray = []
    workersArray.forEach(i =>{
        if (i.id == id){
            nameSurnameSalaryArray.push(i.Name + ' ' + i.surname + ' ' + i.salary)
        }
    })
    return nameSurnameSalaryArray
}

function createCustomerID (nameZam: string, id: number): string{
    let myID = nameZam +" "+ id

    return myID
}

function createCustomer (name: string, age?: number, city?: string){

    let printName

    if (age == undefined && city == undefined){
        printName = `${name}`
    } else if (age == undefined){
        printName = `${name} ${city}`
    } else if (city == undefined){
        printName = `${name} ${age}`
    }
    else{
        printName = `${name} ${age} ${city}`
    }
    console.log(printName)
}

function сheckoutWorkers (customer: string, workerIDs: number []){
    let workers = getAllworkers()
    let avalibleWorkersArray= []
    for (let i of workers){
        for (let j of workerIDs){
            if(i.id == j){
                if (i.available == true)
                    avalibleWorkersArray.push(getWorkerByID(j, workersArray))
            }
        }
    }
    console.log('Заказчики: ' + customer)
    return avalibleWorkersArray
}

logFirstAvailable();

console.log("Designer: ")
logWorkersNames(getWorkersNamesByCategory(workersArray));
console.log(getWorkerByID(1, workersArray))


let myId = createCustomerID("Ann", 10)
console.log(myId)

let myCustumer = {name: "Ann", id: 10}
let IdGenerator = ({name, id}) => createCustomerID(name, id)
console.log(IdGenerator(myCustumer))

createCustomer('Andrey')
createCustomer('Andrey', 19)
createCustomer('Andrey', 19, 'Toronto')

let myWorkers = сheckoutWorkers('Ann', [1, 2, 4])

console.log(myWorkers.forEach(i => console.log('\t'+ i)))