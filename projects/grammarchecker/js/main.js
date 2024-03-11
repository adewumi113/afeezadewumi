
    /* story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.' */

    function typeWriter(text, i, fnCallback) {
        if (i < text.length) {
          document.querySelector("#result").innerHTML += text.charAt(i);
          i++;
          setTimeout(function() {
            typeWriter(text, i, fnCallback);
          }, 50);
        } else if (typeof fnCallback == "function") {
          setTimeout(fnCallback, 200);
        }
      }
      
      function grammarChecker() {
        let story = document.querySelector("h4").textContent;
        let storyWords = story.split(" ");
        let unnecessaryWord = "literally";
        let misspelledWord = "beautifull";
        let badWord = "freaking";
        let count = 0;
        storyWords.forEach((word) => (count += 1));
        storyWords = storyWords.filter((word) => {
          return word !== unnecessaryWord;
        });
        storyWords = storyWords.map((word) =>
          word === misspelledWord ? "beautiful" : word
        );
        const badWordIndex = storyWords.findIndex((word) => word === badWord);
        storyWords[badWordIndex] = "really";
        const lengthCheck = storyWords.every((word) => word.length <= 10);
        let longerThanTen = storyWords.filter((word) => word.length > 10);
        longWordIndex = storyWords.indexOf("breathtaking");
        storyWords[longWordIndex] = "stunning";
        let result = storyWords.join(" ");
        document.querySelector("#result").innerHTML = "";
        typeWriter(result, 0, null);
      }
      
      document.querySelector("button").addEventListener("click", grammarChecker);
      