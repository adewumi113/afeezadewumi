// Race Day
// Codecademy’s annual race is just around the corner! This year, we have a lot of participants. You have been hired to write a program that will register runners for the race and give them instructions on race day.

// As a timeline, registration would look like this:registration-timeline

// Here’s how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.

// Race number:

// Early adults receive a race number at or above 1000.
// All others receive a number below 1000.
// Start time:

// Adult registrants run at 9:30 am or 11:00 am.
// Early adults run at 9:30 am.
// Late adults run at 11:00 am.
// Youth registrants run at 12:30 pm (regardless of registration).


//solution

document.querySelector('button').addEventListener('click', raceDetail);

function raceDetail() {
  const runnerAge = document.querySelector('input').value;
  const registeredEarly = document.querySelector('select').value;
  let raceNumber = Math.floor(Math.random() * 1000);
  const resultElement = document.querySelector('h3');

  if (runnerAge > 18 && registeredEarly === "true") {
    raceNumber += 1000;
    resultElement.innerText = `The runner with race number ${raceNumber} will race at 9:30am`;
  } else if (runnerAge > 18 && registeredEarly === "false") {
    resultElement.innerText = `The runner with race number ${raceNumber} will race at 11:00 am`;
  } else if (runnerAge < 18) {
    resultElement.innerText = `The runner with race number ${raceNumber} will race at 12:30 pm`;
  } else {
    resultElement.innerText = 'See the registration desk.';
  }

  // toggle the dancing class based on user input
  if (runnerAge > 18) {
    resultElement.classList.add('dancing');
  } else {
    resultElement.classList.remove('dancing');
  }
}


