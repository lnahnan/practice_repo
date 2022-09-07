

    var foo = 1;
    let bar: number = 2;
    const baz = 3;

    //boolean, number and strings
    let isHungry: boolean = true;
    let hamburgersEaten: number = 5;
    let howAmIFelling: string = "good";
    //Arrays
    let listOfFoodEaten: string[] = ["sushi", "pizza"];
    let listOfDrink: Array<string> = ["water", "pepsi"];
    //Tuple
    let studentsScores: [string, number] = ["Tom", 97.5];
    //Array of Tuples
    const allStudentsScore: [string, number][] = [
        ["Lucy", 80],
        ["Beth", 100],
        ["Jake", 75]
    ];
    //variable  of player with attributes
    let player: {
        x: number
        y: number
        health: number
    } = {
        x: 0,
        y: 0,
        health: 100
    };
    //or for creating a type Player with attributes
    // type Player = {
    //     x: number 
    //     y: number
    //     health: number
    // }
    let playerA: Player = {
        x: 0,
        y: 0,
        health: 100,
        powerUP: false
    };
    //or an interface of Player with attributes
    interface Player {
        x: number
        y: number
        health: number
        powerUP: boolean
    }
    let playerB: Player = {
        x: 1,
        y: 1,
        health: 75,
        powerUP: true
    };

    let element: HTMLElement | null  = document.getElementById("content")
    let o: object = player;
    let a: any = player;

    console.log(element);
    console.log("Hello, World!");
    console.log("Hello, World, again!");

    /*enum {"city.university"} {
        Marquette = 1, //methodSearchNucleus(),
        cellwall,
        ER,
        lysosome, 
    }*/
    console.log("Update");


    //the construct type
    type Desitination = any 
    type Occupation = any
   
  

