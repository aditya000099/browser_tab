var currentDate = new Date();
// var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var weekday = { weekday: 'long'}
var weekday = currentDate.toLocaleDateString(undefined, weekday);
var day = { day: 'numeric'}
var day = currentDate.toLocaleDateString(undefined, day);
var month = { month: 'long'}
var month = currentDate.toLocaleDateString(undefined, month);

var year = { year: 'numeric'};
var year = currentDate.toLocaleDateString(undefined, year);



// number of days left 
// Get the year of the current date
const currentYear = currentDate.getFullYear();

// Create a new date for January 1st of the next year
const nextYear = new Date(currentYear + 1, 0, 1);

// Calculate the difference in milliseconds between the current date and January 1st of the next year
const millisecondsInADay = 1000 * 60 * 60 * 24; // Number of milliseconds in a day
const daysLeft = Math.floor((nextYear - currentDate) / millisecondsInADay);
  


document.getElementById("weekDay").innerHTML = weekday;
document.getElementById("day").innerHTML = day;
document.getElementById("month").innerHTML = month;
document.getElementById("daysLeft").innerHTML = daysLeft;

// document.addEventListener('DOMContentLoaded', function() {
//     const textInput = document.getElementById('textInput');
//     const outputDiv = document.getElementById('page');
  
//     textInput.addEventListener('keyup', function(event) {
//       if (event.key === 'Enter') {
//         const enteredText = textInput.value;
//         if (enteredText.trim() !== '') {
//           const paragraph = document.createElement('p');
//           paragraph.textContent = enteredText;
//           outputDiv.appendChild(paragraph);
//           textInput.value = ''; // Clear the input after adding text
//         }
//       }
//     });
document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('textInput');
    const outputDiv = document.getElementById('page');

    textInput.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        const enteredText = textInput.value.trim();
        if (enteredText !== '') {
          // Create a <p> element
          const paragraph = document.createElement('p');
          paragraph.textContent = enteredText;

          // Append the <p> element to the output div
          outputDiv.appendChild(paragraph);

          // Save entered text to local storage
          saveTextLocally(enteredText);

          // Clear the input field after adding text
          textInput.value = '';
        }
      }
    });

    // Function to save text in local storage
    function saveTextLocally(text) {
      let savedTexts = localStorage.getItem('savedTexts');
      savedTexts = savedTexts ? JSON.parse(savedTexts) : [];

      savedTexts.push(text);
      localStorage.setItem('savedTexts', JSON.stringify(savedTexts));
    }

    // Function to load and display saved text from local storage
    function displaySavedTexts() {
      let savedTexts = localStorage.getItem('savedTexts');
      savedTexts = savedTexts ? JSON.parse(savedTexts) : [];

    //   outputDiv.innerHTML = '';
      savedTexts.forEach(function(text) {
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        outputDiv.appendChild(paragraph);
      });
    }

    // Display saved text on page load
    displaySavedTexts();
  });
  
// draggable
// Make the element draggable
// 
// draggable ends here 