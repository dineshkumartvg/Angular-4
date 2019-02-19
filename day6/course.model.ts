export interface ICourse{
    id : number 
    name : string
    date : Date
    time :string
    price : number
    imageUrl : string
    onlineURL? : string
    location ? : {
        trainingRoom : string
        building : string
        city : string
    }
}