const number = 60;
try {
    if(number > 50) {
        console.log('Success');
    }
    else {

        // user-defined throw statement
        throw new Error('The number is low');
    }

    // if throw executes, the below code does not execute
    console.log('hello');
}
catch(error) {
    console.log('An error caught'); 
    console.log('Error message: ' + error);  
}


/**
 * Note: When the throw statement is executed,
 * it exits out of the block and goes to the catch block. And the code below the throw statement is not executed.
 */

/**
 * ?Note: You can also use other built-in error constructors for standard errors: 
 * ?TypeError, SyntaxError, ReferenceError, EvalError, InternalError, and RangeError.
 * 
 * For example,
 * !throw new ReferenceError('this is reference error');
 */