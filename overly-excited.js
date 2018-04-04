let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
let newStatement = ["Thank", "goodness", "I", "took", "jumpstart", "or", "I", "would", "be", "completely", "lost"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (theWordArray, punctuation) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        buildMeUp += theWordArray[i];
        const skip = i + 1;
        // Adds punctiations every 3rd word and adds and extra punctiation every time it loops around
        if (skip % 3 === 0) {
            let howManyExclamations = skip / 3;
            for (let i = 0; i < howManyExclamations; i++) {
                buildMeUp += punctuation;
            }
        }
        buildMeUp += " ";
        console.log(buildMeUp);
    }
}

// Invoke the function and pass in the array
addExcitement(sentence, "!");
addExcitement(newStatement, ".");