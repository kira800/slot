
$('#slidUp').on("click", slideUp1);
function slideUp1() {
  $('#landingScreen').slideUp();
}

$('#slidUp2').on("click", slideUp2);
function slideUp2() {
  $('#landingScreen2').slideUp();
}

var bag1 = $('#bag1');
var bag2 = $('#bag2');
var bag3 = $('#bag3');
var symbols = ["img/dog.png", "img/heart.png", "img/ice-cream.png", "img/leaf.png", "img/lightning.png", "img/paw.png", "img/pencil.png", "img/star.png"];

//Imgs array which contains the images for each of the three wheels
var Imgs = [[], [], []];
defaultImgs(Imgs[0]);
defaultImgs(Imgs[1]);
defaultImgs(Imgs[2]);

//counter variable for randomizeImgs()
var counter = 0;
var turn=0;
var x = 0;

//randomizing and adding images to html (#bags)
applyRandImgs(bag1, Imgs[0], 23);
applyRandImgs(bag2, Imgs[1], 23);
applyRandImgs(bag3, Imgs[2], 23);

console.log(Imgs);

$('#btnn').on("click", slotMachine);
console.log(Imgs);

function slotMachine() {

  //remove event listener
  $(this).off("click");
  //spinner button animation
  $('#wheel').addClass("spin");
  //audio effects for the wheels
  var audioElement1 = document.createElement('audio');
  var audioElement2 = document.createElement('audio');
  var audioElement3 = document.createElement('audio');
  audioElement1.setAttribute('src', 'audio/holder1.wav');
  audioElement2.setAttribute('src', 'audio/holder2.wav');
  audioElement3.setAttribute('src', 'audio/holder3.wav');
  audioElement1.play();
  //the wheels will physically stop at the same spot every time
  //reset function is there in order to get it to the starting point again
  reset(bag1);
  reset(bag2);
  reset(bag3);
  if (x > 0) {
    applyRandImgs(bag1, Imgs[0], 23);
    applyRandImgs(bag2, Imgs[1], 23);
    applyRandImgs(bag3, Imgs[2], 23);
  }
  //spining the wheels one by one
  spin(bag1);
  setTimeout(function() {
    audioElement2.play();
    spin(bag2);
  }, 1000)
  setTimeout(function() {
    audioElement3.play();
    spin(bag3);
  }, 2000)
  setTimeout(function() {
    $('#wheel').removeClass("spin");
    //returning the event listener
    $(this).on("click", slotMachine);
    //check results
    console.log($('.result').eq(0).attr("src"));
    console.log($('.result').eq(1).attr("src"));
    console.log($('.result').eq(2).attr("src"));

    turn+=1;
    displayMessage();


    x++;
  }, 7000)
}

function displayMessage(){
  if(turn === 1){
    $(document).ready(function() {
      $('.popup-btn').ready(function(e) {
        $('.popup-wrap').fadeIn(500);
        $('.popup-box').removeClass('transform-out').addClass('transform-in');
      });
    
      $('.popup-close').click(function(e) {
        $('.popup-wrap').fadeOut(500);
        $('.popup-box').removeClass('transform-in').addClass('transform-out');
    
        e.preventDefault();
      });
    });
  }

  else if(turn === 2){
    $(document).ready(function() {
      $('.popup-btn').ready(function(e) {
        $('.popup-wrap1').fadeIn(500);
        $('.popup-box1').removeClass('transform-out').addClass('transform-in');
      });
    
      $('.popup-close').click(function(e) {
        $('.popup-wrap1').fadeOut(500);
        $('.popup-box1').removeClass('transform-in').addClass('transform-out');
    
        e.preventDefault();
      });
    });
  }

  if(turn === 3){
    $(document).ready(function() {
      $('.popup-btn').ready(function(e) {
        $('.popup-wrap2').fadeIn(500);
        $('.popup-box2').removeClass('transform-out').addClass('transform-in');
      });
    
      $('.popup-close').click(function(e) {
        $('.popup-wrap2').fadeOut(500);
        $('.popup-box2').removeClass('transform-in').addClass('transform-out');
    
        e.preventDefault();
      });
    });
  }

  if(turn === 4){
    $(document).ready(function() {
      $('.popup-btn').ready(function(e) {
        $('.popup-wrap3').fadeIn(500);
        $('.popup-box3').removeClass('transform-out').addClass('transform-in');
      });
    
      $('.popup-close').click(function(e) {
        $('.popup-wrap3').fadeOut(500);
        $('.popup-box3').removeClass('transform-in').addClass('transform-out');
    
        e.preventDefault();
      });
    });
  }

  if(turn === 5){
    $(document).ready(function() {
      $('.popup-btn').ready(function(e) {
        $('.popup-wrap4').fadeIn(500);
        $('.popup-box4').removeClass('transform-out').addClass('transform-in');
      });
    
      $('.popup-close').click(function(e) {
        $('.popup-wrap4').fadeOut(500);
        $('.popup-box4').removeClass('transform-in').addClass('transform-out');
    
        e.preventDefault();
      });
    });
  }

  if(turn === 6){
    $(document).ready(function() {
      $('.popup-btn').ready(function(e) {
        $('.popup-wrap5').fadeIn(500);
        $('.popup-box5').removeClass('transform-out').addClass('transform-in');
      });
    
      $('.popup-close').click(function(e) {
        $('.popup-wrap5').fadeOut(500);
        $('.popup-box5').removeClass('transform-in').addClass('transform-out');
    
        e.preventDefault();
      });
    });
  }

  if(turn === 7){
    $(document).ready(function() {
      $('.popup-btn').ready(function(e) {
        $('.popup-wrap6').fadeIn(500);
        $('.popup-box6').removeClass('transform-out').addClass('transform-in');
      });
    
      $('.popup-close').click(function(e) {
        $('.popup-wrap6').fadeOut(500);
        $('.popup-box6').removeClass('transform-in').addClass('transform-out');
    
        e.preventDefault();
      });
    });
  }

  if(turn === 8){
    $(document).ready(function() {
      $('.popup-btn').ready(function(e) {
        $('.popup-wrap7').fadeIn(500);
        $('.popup-box7').removeClass('transform-out').addClass('transform-in');
      });
    
      $('.popup-close').click(function(e) {
        $('.popup-wrap7').fadeOut(500);
        $('.popup-box7').removeClass('transform-in').addClass('transform-out');
    
        e.preventDefault();
      });
    });
  }

  if(turn === 9){
    $(document).ready(function() {
      $('.popup-btn').ready(function(e) {
        $('.popup-wrap8').fadeIn(500);
        $('.popup-box8').removeClass('transform-out').addClass('transform-in');
      });
    
      $('.popup-close').click(function(e) {
        $('.popup-wrap8').fadeOut(500);
        $('.popup-box8').removeClass('transform-in').addClass('transform-out');
    
        e.preventDefault();
      });
    });
  }

  
}

if(turn === 1){
  console.log(turn);

}

function defaultImgs(array) {
  array[23] = "img/heart.png";
  array[24] = "img/lightning.png";
  array[25] = "img/star.png";
  console.log(array);
}

function reset(element) {
  element.css({
    left: "0",
    right: "0",
    top: "-3805px"
  })
}

function spin(element) {
  element.animate({
    top: "-380px"
  }, 5000)
}

function randomizeImgs(array, num) {
  let random = Math.floor(Math.random()*8);
  if (counter < num) {
    if (array.length < 1) {
      array[counter] = symbols[random];
      counter++;
    } else if (array[counter-1] != symbols[random]) {
      if (array.length < 2) {
        array[counter] = symbols[random];
        counter++;
      } else if (array[counter-2] != symbols[random]) {
        array[counter] = symbols[random];
        counter++;
      } else {
        randomizeImgs(array, num);
      }
    } else {
      randomizeImgs(array, num);
    }
    randomizeImgs(array, num);
  }
}

function applyRandImgs(element, array, num) {
  //leaving the 9 symbols on the screen for the second spin while rendomizing others
  if (array[2] != undefined) {
    array[23] = array[2];
    array[24] = array[3];
    array[25] = array[4];
  }

  randomizeImgs(array, num);
  //resetting the counter
  counter = 0;

  let text = "";
  for (let i = 0; i < array.length; i++) {
    if (i != 3) {
      text += '<img src="'+ array[i] +'">';
    } else {
      text += '<img class="result" src="'+ array[i] +'">';
    }
  }
  element.html(text);
}




//win multiplier animation
// $('#multi').animate({
//   left: "14%",
//   top: "-15%",
//   fontSize: '360px',
//   opacity: "0"
// }, 2000).
