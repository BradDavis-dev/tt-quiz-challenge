var questions = [
  ['How many states are there?', '50'],
  ['How many legs does a spider have?', '8'],
  ['How many hours in a day?', '24']
];
var questCounter = 0;

for (var i = 0; i < questions.length; i++) {
  var answer = prompt(questions[i][0]);
  if (answer === questions[i][1]) {
    questCounter += 1;
    print('Correct');
  } else {
    print('Incorrect');
  }
}
print('You got ' + questCounter + ' question(s) correct.')

function print(message) {
  document.write(message);
}
