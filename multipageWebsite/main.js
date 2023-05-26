document.getElementById("BTN").addEventListener("click", BTNclicked);
let point = 0;
let Center = "center";
let Goalie = "goalie";
let Refs = "refs";
let Refs2 = "referees";
let Defence = "defence";
let wrong = "wrong";

function BTNclicked() {
  let Question1 = document.getElementById("Question1-in").value.toLowerCase();
  let Question2 = document.getElementById("Question2-in").value.toLowerCase();
  let Question3 = document.getElementById("Question3-in").value.toLowerCase();
  let Question4 = document.getElementById("Question4-in").value.toLowerCase();

  //question 1
  if (Question1 === Center) {
    document.getElementById("out1").innerHTML = "correct";
    document.getElementById("out1").style.color = "green";
    point++;
  } else if (Question1 === "") {
    document.getElementById("out1").innerHTML = "please answer the question";
    document.getElementById("out1").style.color = "red";
    point = 10;
  } else {
    document.getElementById("out1").innerHTML = wrong;
    document.getElementById("out1").style.color = "red";
  }

  //question 2
  if (Question2 === Goalie) {
    document.getElementById("out2").innerHTML = "correct";
    document.getElementById("out2").style.color = "green";
    point++;
  } else if (Question2 === "") {
    document.getElementById("out2").innerHTML = "please fill in the question";
    document.getElementById("out2").style.color = "red";
    point = 10;
  } else {
    document.getElementById("out2").innerHTML = wrong;
    document.getElementById("out2").style.color = "red";
  }

  //question 3
  if (Question3 === Refs || Question3 === Refs2) {
    document.getElementById("out3").innerHTML = "correct";
    document.getElementById("out3").style.color = "green";
    point++;
  } else if (Question3 === "") {
    document.getElementById("out3").innerHTML = "please answer the question";
    document.getElementById("out3").style.color = "red";
    point = 10;
  } else {
    document.getElementById("out3").innerHTML = wrong;
    document.getElementById("out3").style.color = "red";
  }

  //question 4

  if (Question4 === Defence) {
    document.getElementById("out4").innerHTML = "correct";
    document.getElementById("out4").style.color = "green";
    point++;
  } else if (Question4 === "") {
    document.getElementById("out4").innerHTML = "please answer the question";
    document.getElementById("out4").style.color = "red";
    point = 10;
  } else {
    document.getElementById("out4").innerHTML = wrong;
    document.getElementById("out4").style.color = "red";
  }

  //score
  console.log(point);
  if (point == "4") {
    document.getElementById("out5").innerHTML = "100% Perfect score!";
    point = 0;
  } else if (point == "3") {
    document.getElementById("out5").innerHTML = "75% Good job!";
    point = 0;
  } else if (point == "2") {
    document.getElementById("out5").innerHTML = "50% Getting there";
    point = 0;
  } else if (point == "1") {
    document.getElementById("out5").innerHTML = "25% Working on it";
    point = 0;
  } else if (point >= "10") {
    document.getElementById("out5").innerHTML = "please fill in quiz";
    point = 0;
  } else {
    document.getElementById("out5").innerHTML =
      "0% oh, well go back and read again!";
  }
}
