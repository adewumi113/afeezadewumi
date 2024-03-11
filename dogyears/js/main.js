document.addEventListener('DOMContentLoaded', function() {
      document.querySelector('button').addEventListener('click', dogYears);

      function dogYears() {
        const myName = document.querySelector('#name').value;
        const myAge = document.querySelector('#age').value;
        let earlyYears = 2;
        earlyYears *= 10.5;
        let laterYears = myAge - 2;
        laterYears *= 4;
        let myAgeInDogYears = earlyYears + laterYears;

        let textContent = `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`;
        let h2 = document.querySelector('h2');
        h2.classList.add('shatter');
        h2.textContent = textContent;

        setTimeout(function() {
          h2.classList.remove('shatter');
        }, 5000);

        // Repeat the dogYears function every 5 seconds
        setInterval(dogYears, 5000);
      }
    });
