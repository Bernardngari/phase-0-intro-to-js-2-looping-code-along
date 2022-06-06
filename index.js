// Code your solutions in this file



/*for ( let age = 30; age < 40; age++ )
{
  console.log( `I'm ${ age } years old.Happy birthday to me!` );
}
*/


/*const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts){
  for ( let i = 0; i < gifts.length; i++){
    console.log( `Wrapped ${ gifts[i] } and added a bow!`);
    debugger;
  }

  return gifts;
}
wrapGifts( gifts );*/
const newArray = [];

function writeCards(name, event){
  for ( let i = 0;i<name.length; i++ ){
    const name= ["Guadalupe", "Ollie", "Aki"]
    newArray.push( `Thank you, ${ name[i] }, for the wonderful ${ event } gift!` );
  }
  return newArray;
}

function countDown(number){
      while(number >=0) {
        console.log( number );
        number--
      }
  }


    