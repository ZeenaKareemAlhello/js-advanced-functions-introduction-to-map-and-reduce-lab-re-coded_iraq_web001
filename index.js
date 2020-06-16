// Your code here
function mapToNegativize(sourceArray){
 let a= sourceArray.map(x=>x*-1)
 return a
}

console.log(mapToNegativize([1,5,3,2]))

function mapToNoChange(sourceArray){
 let b= sourceArray.map(x=>x)
 return b
}
console.log(mapToNoChange([1,5,3,2]))

function mapToDouble(sourceArray){
 let  c= sourceArray.map(x=>x*2)
 return c
}
console.log(mapToDouble([1,5,3,2]))

function mapToSquare(sourceArray){
<<<<<<< HEAD
 let  d= sourceArray.map(x=>x*x)
=======
 let  d= sourceArray.map(x=>Math.sqrt(x))
>>>>>>> 8bf6f598b98816711a0594f40ce34c00492790ee
 return d
}
console.log(mapToSquare([1,5,3,2]))

function reduceToTotal(sourceArray, startingPoint){
<<<<<<< HEAD
  
  if(typeof startingPoint !== "undefined"){
 let a= sourceArray.reduce(
  ( accumulator, currentValue ) => accumulator + currentValue,startingPoint
)
    return a
  }
else{
  let a= sourceArray.reduce(
  ( accumulator, currentValue ) => accumulator + currentValue)
  return a
}

}

function reduceToAllTrue(sourceArray){
 let a= sourceArray.reduce((accumulator, currentValue ) => 
 { 
   if(currentValue === true){
   accumulator=true
 }
 else if(currentValue === false){
   accumulator=false
 }
   return accumulator
 })
 return a
}


function reduceToAnyTrue(sourceArray){
 let a= sourceArray.reduce(( accumulator, currentValue ) =>{ 
   if(currentValue === true){
   accumulator=1
   accumulator++
 }
 else{
   accumulator=0
 }
   return accumulator
 })
 if(a>=1){
   return true
 }
 else{
 return false
}
=======
  sourceArray.reduce(
  ( accumulator, currentValue ) => accumulator + currentValue,
  startingPoint
)
}
function reduceToAllTrue(sourceArray){
  sourceArray.reduce(( accumulator, currentValue ) => { currentValue === true},false
)
}
function reduceToAnyTrue(sourceArray){
  sourceArray.reduce(( accumulator, currentValue ) =>
>>>>>>> 8bf6f598b98816711a0594f40ce34c00492790ee
}











<<<<<<< HEAD
=======

>>>>>>> 8bf6f598b98816711a0594f40ce34c00492790ee
