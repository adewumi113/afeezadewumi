/* Whale Talk
Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

There are a few simple rules for translating text to whale language:

There are no consonants. Only vowels excluding “y”.
The u‘s and e‘s are extra long, so we must double them in our program.
Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean. */

document.querySelector('button').addEventListener('click', whaleTalk)


// Set the time interval to repeat the whaleTalk function
const interval = setInterval(whaleTalk, 5000); // Call the function every 5 seconds

// Function to translate text to whale language
function whaleTalk() {
  const input = document.querySelector('input');
  const h3 = document.querySelector('h3');
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let resultArray = [];
  let inputText = input.value;
  for (let i = 0; i < inputText.length; i++) {
    if (inputText[i] === 'e' || inputText[i] === 'u') {
      resultArray.push(inputText[i].repeat(2));
    } else {
      for (let j = 0; j < vowels.length; j++) {
        if (inputText[i] === vowels[j]) {
          resultArray.push(vowels[j]);
        }
      }
    }
  }
  let resultString = resultArray.join('').toUpperCase();
  h3.innerText = resultString;
  speak(resultString); // Call the speak function to pronounce the result
}

// Function to speak the result using SpeechSynthesis API
function speak(text) {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}

// Stop the repeating execution of the whaleTalk function after 30 seconds
setTimeout(() => {
  clearInterval(interval);
}, 60000);
