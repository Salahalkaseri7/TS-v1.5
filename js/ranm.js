// function to calculate the result of the survey
function tabulateAnswers() {
  document.getElementById("answer").style.color = "rgb(252, 11, 11)";
  document.getElementById("answer").style.fontWeight = "980";
    var c1score = 0;
    var c2score = 0;
    var c3score = 0;
    var c4score = 0;
    var choices = document.getElementsByTagName('input');
    for (i=0; i<choices.length; i++) {
      if (choices[i].checked) {
        if (choices[i].value == 'c1') {
          c1score = c1score + 1;
        }
        if (choices[i].value == 'c2') {
          c2score = c2score + 1;
        }
        if (choices[i].value == 'c3') {
          c3score = c3score + 1;
        }
        if (choices[i].value == 'c4') {
          c4score = c4score + 1;
        }
      }
    }
    var maxscore = Math.max(c1score,c2score,c3score,c4score);
    var answerbox = document.getElementById('answer');
    if (c1score == maxscore) { 
      answerbox.innerHTML = "You're working really hard in order to increase ur typing speed, but u need to follow some typing rules and etiquetts for better improvement, posture/equipment like monitor,keyboard etc positon should be proper and focus on consistancy and accuracy for better results!";
    }
    if (c2score == maxscore) {
      answerbox.innerHTML = "YOu're naturally gifted with good typing abilities and improving a lot, u just need to work on consistancy and good posture aligning with ur eye sight and comfortable psotion of keybaord for hand, wish u a good luck!";
    }
    if (c3score == maxscore) { 
      answerbox.innerHTML = "nice job! You're already at good start and just need to focus on how to make typing more productive!";
    }
    if (c4score == maxscore) { 
      answerbox.innerHTML = "You need to work very hard! Use the correct starting position,Don’t look down your hands maintain a good posture find a comfortable position for your hands and just practice a lot!";
    }
  }
  function resetAnswer() {
    var answerbox = document.getElementById('answer');
    answerbox.innerHTML = "Your result will show up here!";
  }
 

