(function() {
//initialize variables
  var startButton = $('#start');
  var seconds = $('#seconds');
  var minutes = $('#minutes');

//main functionality
  startButton.on('click', countdown);

//function definitions
function countdown(){
  var secondsText = seconds.text();
  var secondsTextAsNumber = parseInt(secondsText);
  var minutesText = minutes.text();
  var minutesTextAsNumber = parseInt(minutesText);

if(minutesTextAsNumber ===0 && secondsTextAsNumber ===0 ){
  // stop!
  return; //temporary
}
  if(secondsTextAsNumber === 0){
    if (minutesTextAsNumber === 0){

    }else {

    }

    seconds.text("59");
    minutes.text(padMinutesTextAsNumber);
    // then change seconds text to 59 (use triple ===)
  }else{
    var decreasedSecondsAsNumberByOne = secondsTextAsNumber -1;
    var padSecondsTextAsNumber = pad(decreasedSecondsAsNumberByOne);
    seconds.text(padSecondsTextAsNumber); //this writes inside of the html

  }

  // var secondsValue = parseInt(seconds.text());
  // seconds.text(pad(secondsValue-1));
}

function pad(num){
  if(num < 10){
    // spit out number with a leading 0
    return "0" + num;
  } else{
    // spit out the original num
    return num;
  }
}


}());
