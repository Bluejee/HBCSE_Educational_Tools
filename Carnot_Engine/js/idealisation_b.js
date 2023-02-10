document.getElementById("left").href = "idealisation_a.html";
document.getElementById("right").href = "geometric_a.html";

function checkBoxDisplay(parent_box) {
  let elements = parent_box.children;
  let allHidden = true;

  for (let i = 0; i < elements.length; i++) {
    if (elements[i].style.display !== "none") {
      allHidden = false;
      break;
    }
  }

  if (allHidden) {
    parent_box.style.display = "none";
  } else {
    parent_box.style.display = "block";
  }
}

var start_button = document.getElementById("start-button");
var answer_button = document.getElementById("answer-button");
var conclusion = document.getElementById("conclusion");

var intro_1 = document.getElementById("intro_1");
var intro_2 = document.getElementById("intro_2");
var intro_3 = document.getElementById("intro_3");
var intro_4 = document.getElementById("intro_4");

var question1 = document.getElementById("question1");
var question2 = document.getElementById("question2");
var question3 = document.getElementById("question3");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");

parent_boxes = document.getElementsByClassName("parent_box");
introduction_contents = [intro_1, intro_2, intro_3, intro_4];
q_contents = [question1, question2, question3];
a_contents = [answer1, answer2, answer3];
intro_index = 0;
q_and_a_index = 0;

window.onload = function () {
  for (var i = 0; i < parent_boxes.length; i++) {
    checkBoxDisplay(parent_boxes[i]);
  }
};

start_button.addEventListener("click", function () {
  for (var i = 0; i < parent_boxes.length; i++) {
    checkBoxDisplay(parent_boxes[i]);
  }

  if (intro_index < introduction_contents.length) {
    intro_index = intro_index + 1;
    if (intro_index < introduction_contents.length) {
      introduction_contents[intro_index].style.display = "list-item";
    }

    if (intro_index === introduction_contents.length - 1) {
      start_button.style.backgroundColor = "red";
      start_button.innerHTML = "Start";
    }
    if (intro_index === introduction_contents.length) {
      for (var i = 0; i < introduction_contents.length; i++) {
        introduction_contents[i].style.display = "none";
      }
      q_contents[q_and_a_index].style.display = "list-item";
      q_contents[q_and_a_index].parentNode.style.display = "block";

      // a_contents[q_and_a_index].style.display = "block";
      answer_button.style.display = "inline-block";
      for (var i = 0; i < parent_boxes.length; i++) {
        checkBoxDisplay(parent_boxes[i]);
      }
      start_button.style.backgroundColor = "#4caf50";
      start_button.innerHTML = "Next";
      start_button.style.display = "none";
    }
  } else {
    q_and_a_index = q_and_a_index + 1;
    if (q_and_a_index < q_contents.length) {
      q_contents[q_and_a_index - 1].style.display = "none";
      a_contents[q_and_a_index - 1].style.display = "none";

      q_contents[q_and_a_index].style.display = "list-item";
      answer_button.style.display = "inline-block";
      for (var i = 0; i < parent_boxes.length; i++) {
        checkBoxDisplay(parent_boxes[i]);
      }
      start_button.style.display = "none";
    }
    if (q_and_a_index === q_contents.length) {
      q_contents[q_and_a_index - 1].style.display = "none";
      a_contents[q_and_a_index - 1].style.display = "none";
      conclusion.style.display = "block";
      for (var i = 0; i < parent_boxes.length; i++) {
        checkBoxDisplay(parent_boxes[i]);
      }
      start_button.style.backgroundColor = "blue";
      start_button.innerHTML =
        "Let us now place the engine into a geometric setting and identify its stages.";
    }
    if (q_and_a_index === q_contents.length + 1) {
      window.location.replace("geometric_a.html");
    }
  }
});

answer_button.addEventListener("click", function () {
  for (var i = 0; i < parent_boxes.length; i++) {
    checkBoxDisplay(parent_boxes[i]);
  }
  a_contents[q_and_a_index].style.display = "list-item";
  a_contents[q_and_a_index].parentNode.style.display = "block";
  answer_button.style.display = "none";
  start_button.style.display = "inline-block";
});
