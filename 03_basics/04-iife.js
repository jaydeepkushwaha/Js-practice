 // immedietly invoked  function expressions (IIFE)

 (function chai (){     // normal function
    // console.log("DB is connected")
 })() ; 

 ( (name) =>{
    console.log(`"DB is connected" ${name}`)  // arrow function
 })("jaydeep")