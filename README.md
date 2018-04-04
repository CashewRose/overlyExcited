# Practice exercise instructions as follows:
For this exercise, you need to create a single JavaScript function named addExcitement that will use console.log() to print out a sentence to the browser console.

If you haven't done so yet, create the workspace/javascript/overly-excited directory structure in your home directory. Open your terminal and enter in the following command.

mkdir -p ~/workspace/javascript/overly-excited
Now that you have created the directory, you want to change to that directory so that you can add files to it.

cd ~/workspace/javascript/overly-excited
Create an index.html file in this directory with the touch command.

Create an overly-excited.js file in this directory with the touch command.

Copy the following code and paste it into the index.html file. Notice that the overly-excited.js file is properly linked so that when you load this HTML file in a web browser, the logic in that file will be executed.
```html
<!DOCTYPE html>
<html>
<head>
    <title>Overly Excited</title>
</head>
<body>

    <script src="overly-excited.js"></script>
</body>
</html>
```
Open the index.html file in your web browser.

At this point, you will simply see a blank web page because you have no content in the HTML file. Open your developer tools using the Option+Command+I keyboard shortcut.

At the top of the developer tools panel, you will see the word Console. Click on that word. The console.log() statement will output any message into this panel in your developer tools. You can try it out immediately by clicking in the Console panel, and typing console.log("Hello, world!"), and then pressing your return key.

Create an addExcitement function that should console.log() rows of words. It should take an array containing the words of a sentence and output them in the developer console.

Example output:

The The walrus The walrus danced The walrus danced through The walrus danced through the The walrus danced through the trees The walrus danced through the trees in The walrus danced through the trees in the The walrus danced through the trees in the light The walrus danced through the trees in the light of The walrus danced through the trees in the light of the The walrus danced through the trees in the light of the moon ...

Paste the following code into overly-excited.js
```js
// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (theWordArray) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp

        // Print buildMeUp to the console
    }

}

// Invoke the function and pass in the array
addExcitement(sentence)
```
Then add logic to addExcitement that places an exclamation point (!) after every third word. This will require you to do some basic math in JavaScript, and use an if statement.

Your job is to read the following English statement and write the equivalent in JavaSript code to make it work.

If the current value of the counter variable can be evenly divided by 3 - using the JavaScript remainder operator - then add a single exclamation point (!) to the output.

    Example output:

    The The walrus The walrus danced! The walrus danced! through The walrus danced! through the The walrus danced! through the trees! The walrus danced! through the trees! in The walrus danced! through the trees! in the The walrus danced! through the trees! in the light! The walrus danced! through the trees! in the light! of The walrus danced! through the trees! in the light! of the The walrus danced! through the trees! in the light! of the moon! ...


Add logic in the addExcitement function to the increase the number of exclamation points after every third word. The number of exclamation points (!) will be determined by how many times the counter variable can be divided by 3.

    Example output:

    The The walrus The walrus danced! The walrus danced! through The walrus danced! through the The walrus danced! through the trees!! The walrus danced! through the trees!! in The walrus danced! through the trees!! in the The walrus danced! through the trees!! in the light!!! The walrus danced! through the trees!! in the light!!! of The walrus danced! through the trees!! in the light!!! of the The walrus danced! through the trees!! in the light!!! of the moon!!!! ...


Add a new argument to the function so that a developer can specify which character should be displayed instead of it always being an exclamation point.

```
// I want to use a question mark
addExcitement(sentence, "?");
```

    Example output:

    The The walrus The walrus danced? The walrus danced? through The walrus danced? through the The walrus danced? through the trees??

    etc..


Now you should define another variable that will hold an array of different words than your existing sentence. Perhaps name the variable betterSentence, or nextSentence.

Invoke your function for a second time, passing in the new sentence variable and a different special character.

```js
// Example
addExcitement(nextSentence, "&");
```

# The following files are my code solution