function receivesAFunction(callback){
    callback();
};

function returnsANamedFunction(){
    return function namedFunction(){
        console.log("this is a named function");
    }
};

function returnsAnAnonymousFunction(){
    return function(){console.log("This is an anonmymous function")};
};