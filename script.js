////????????????????????????????????????????????????????????????????//
function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    for(let i = 0; i < arrayOfSheep.length; i++){
      let sum = 0;
      if(arrayOfSheep[i] ===true){
        console.log( sum += arrayOfSheep[i])
      }
      else if(arrayOfSheep[i] === false){
        console.log(sum = sum +0)
      }
      
    }
  }
  countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true])



//////////////////////////////////
var summation = function (num) {
  // Code here
    let sum = 0;
  for(let i = 1; i<= num; i++){
    sum += i;
  }
  return sum;
}

//////////////////////////////
function move (position, roll) {
  // return the new position
  return position+(roll*2)
}


///////////////////////////////////
function lovefunc(flower1, flower2){
  // moment of truth
  if(flower1 % 2 === 0 && flower2 % 2 !== 0 ){
    return true;
  }
  else if(flower2 % 2 === 0 && flower1 % 2 !== 0){
    return true;
  }
  else{
    return false
  }
}

/////////////////////////////
function grow(x){
  let sum = 1;
  for(let i = 0; i < x.length; i++){
    sum *= x[i]
  }
   return sum;
}


/////////////////////////////
function makeNegative(num) {
  if ( num > 0 ) {
        return -num;
    }
    else {
        return num;
    }
}


//////////////////////////////////////
function simpleMultiplication(number){
    
  if(number % 2 == 0 ){
   return number * 8;
  }
  else{
  return number * 9;
  }    
}

//////////////////////////////////
const n = [1, 5, 7, 4, 8];
function descendingOrder(n){
  //...
    for (let j=0; j < n.length; j++){
  for (let i=0; i< n.length - 1 - j; i++){
      if (n[i]<n[i+1]){
          const buff = n[i];
          n[i] = n[i+1];
          n[i+1] = buff;
      }
  }
}
console.log(n);
}


//////////////////////////
function getSum( a,b )
{
   //Good luck!
  let sum = 0;
  if (a < b){
    for(let i = a; i <= b; i++){
    sum += i
  }
  }
  else{
    for(let j = b; j <= a; j++){
    sum += j
  }
  return sum;
}}



///////////////////////////
function switchItUp(number){
//Write your own Code!
  switch (number) {
       case 0: 
    return "Zero"
    break;
  case 1: 
    return "One"
    break;
  case 2:
     return "Two"
    break;
      case 3:
     return "Three"
    break;
      case 4:
     return "Four"
    break;
      case 5:
     return "Five"
    break;
      case 6:
     return "Six"
    break;
  case 7:
     return "Seven"
    break;
      case 8:
     return "Eight"
    break;
      case 9:
     return "Nine"
    break;
}}



/////////////////////////////////////
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  if(distanceToPump/ mpg <= fuelLeft)return true
  else return false
};




////////////////////////////////
function randomWholeNum() {

  // Only change code below this line

  return Math.floor(Math.random() * 10);;
}


/////////////////////////////////
function removeChar(str){
 //You got this!
return str.slice(1, str.length - 1)
};

//////////////////////
var countSheep = function (num){
  //your code here
  let str = ""
  for(let i = 1; i <= num; i++){
    str += i.toString() + ' sheep...'
  }
  return str
}

///////////////////////////
const areaOrPerimeter = function(l , w) {
  // Return your answer
  if(l == w)return l*w;
  else if( l != w)return (l+w)*2
};

/////////////////////////////////////
function stringToArray(string){
	// code code code
  return string.split(' ')
}
