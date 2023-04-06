// Exercice 1
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(10%2); 

// Exercice 1.2
// let prenom = "ismael";
// let nom = "mesmoudi";
// let ville = "bruxelles";
// console.log("Bonjour je m'appelle",prenom,nom,"j'habite à",ville);


// Exercice 2.1
// let age = prompt("quel est ton age?")

// if (age >= 18)  {
//   console.log("Vous êtes un adulte") ;
// } else {
//   console.log("Vous n'êtes pas encore majeur") ;
// }

// Exercice 2.3
//    for(let i=0; i<100; i=i+2) {
//     console.log(i) ;
//    }

//    let i = 1 ;
//    while (i<100){
//     console.log(i)
//    }

// Exercice 2.4

// let i = 0

// while (i < 100 ) {
//     i += 1;
// if(i%2 == 0){
// console.log (i/2);
// }
// else{
//     console.log (i*3);
// }
// }

// Exercice 2.5
// let value = parseInt(prompt("Quel est votre numéro Favori"))
// while (value != 42) {
//     value = parseInt(prompt("Etes-vous sûr?"))
// }




// Exercice 2.6
// let jour = parseInt(prompt("entrez un nb entre 1 et 7 svp"))

// switch (jour) {
//     case 1:
//         console.log("lundi")
//         break;
//     case 2:
//         console.log("mardi")
//         break;
//     case 3:
//         console.log("mercredi")
//         break;
//     case 4:
//         console.log("jeudi")
//         break;
//     case 5:
//         console.log("vendredi")
//         break;
//     case 6:
//         console.log("samedi")
//         break;
//     case 7:
//         console.log("dimanche")
//         break;
//     default:
//         console.log("error")
//         break;
// }


// Exercice 2.7

// let value = parseInt(prompt("entrez un nombre"))
// while (i=n)

// Exercice 3.0

// let arr = ["Abel,Alexandra,Anthony,Benjamin,Bruno,Delphine,Emilien,Ethan,Ismaël,Jodie,Julien,Louka,Loïc,Luciano,Marine,Nikko,Noa,Steve,Sylvain,Willy"]

// for (let elem of arr){
//     console.log(elem);
// }

// Exercice 3.1


// const array = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i <array.length; i++){
// sum += array[i];
// }
// console.log(sum);

// const array = [100,101,102];
// let sum = 0;
// for (let i = 0; i <array.length; i++){
// sum += array[i];
// }
// console.log(sum);

// Exercice 3.2

// const arr = [1,2,3,4,5];
// function calculateAverage(array) {
//     var total = 0;
//     var count = 0;

//     array.forEach(function(item, index) {
//         total += item;
//         count++;
//     });

//     return total / count;
// }

// console.log(calculateAverage(arr));


// const arr = [100,101,102];
// function calculateAverage(array) {
//     var total = 0;
//     var count = 0;

//     array.forEach(function(item, index) {
//         total += item;
//         count++;
//     });

//     return total / count;
// }

// console.log(calculateAverage(arr));

// Exercice 3.3

// let tab =[1,2,3,4,5],clonetab=[]

// for(let e of tab){
//     clonetab.push(e)
// }

// clonetab=clonetab.concat(tab)
// console.log(clonetab)


// const originalArray = [1,2,3,4,5];
// const clone = originalArray.slice();
// console.log(clone);

// Exercice 3.4

// let arrayOfNumbers = [20, 40, 50, 70, 80];
// console.log(Math.max(...arrayOfNumbers));
// console.log(Math.min(...arrayOfNumbers));

// Exercice 4.1

function calcsurFace(length, width) {
    return length * width;
}
var length = prompt("Enter a whole number for the length of your rectangle.");
        var width = prompt("Enter a whole number for the width of your rectangle.");
        function area(length, width) {
            return length * width;
        }
        console.log("The area of your rectangle is " + area(length, width));




















