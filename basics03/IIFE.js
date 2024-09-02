//  Immediately Invoked Function Expressions (IIFE)


// Named IIFE
(function chai(){
    // This code will log "DB CONNECTED" to the console
    console.log(`DB CONNECTED`);
})();

// IIFE with an argument
( (name) =>{
    // This code will log "DB CONNECTED TWO AKhshan" to the console
    console.log(`DB CONNECTED TWO ${name}`);
} )('AKhshan')

// the function that gets executed immediately because it is okay to speak but interview. There will be no selection in the interview. You will also have to say this for selection problem with global  scope pollution. Many times it is the global scope which there are variables whatever is there we faked it to remove its pollution if you say that you did it, then definitely selectednode 