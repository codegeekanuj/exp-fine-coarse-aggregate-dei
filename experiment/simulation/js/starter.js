// ---------------------------board setup javascript--------------------------

let click = 0;

function showNextBtn(click) {
  if (click === 5) {
    myTimeout = setTimeout(() => {
      document.getElementById("next").style.visibility = "visible";
      document.getElementById("arrowatstart").style.visibility = "visible";
    }, 1000);
  }
}

window.addEventListener("load", function () {
  var loader = document.getElementById("loader");
  loader.style.display = "none";
});

document.getElementById("transbox").addEventListener("click", () => {
  document.getElementById("transbox").style.visibility = "hidden";
  document.getElementById("sheet").style.animationPlayState = "running";
  document.getElementById("sheet").style.animationIterationCount = "1";
  myTimeout = setTimeout(timedelay, 1300);
});

function timedelay() {
  document.getElementById("clip1").style.visibility = "visible";
  document.getElementById("clip2").style.visibility = "visible";
  document.getElementById("clip3").style.visibility = "visible";
  document.getElementById("clip4").style.visibility = "visible";
  document.getElementById("drafter-out").style.visibility = "visible";
  document.getElementById("substep").style.visibility = "hidden";
  document.getElementById("main1").style.visibility = "hidden";
  document.getElementById("main2").style.visibility = "visible";
  document.getElementById("substep1").style.visibility = "visible";
}

function clipmove1() {
  document.getElementById("boardclip1").style.visibility = "visible";
  document.getElementById("clip1").style.visibility = "hidden";
  document.getElementById("boardclip1").style.animationPlayState = "running";
  document.getElementById("boardclip1").style.animationIterationCount = "1";
  click += 1;
  showNextBtn(click);
}

function clipmove2() {
  document.getElementById("boardclip2").style.visibility = "visible";
  document.getElementById("clip2").style.visibility = "hidden";
  document.getElementById("boardclip2").style.animationPlayState = "running";
  document.getElementById("boardclip2").style.animationIterationCount = "1";
  click += 1;
  showNextBtn(click);
}

function clipmove3() {
  document.getElementById("boardclip3").style.visibility = "visible";
  document.getElementById("clip3").style.visibility = "hidden";
  document.getElementById("boardclip3").style.animationPlayState = "running";
  document.getElementById("boardclip3").style.animationIterationCount = "1";
  click += 1;
  showNextBtn(click);
}

function clipmove4() {
  document.getElementById("boardclip4").style.visibility = "visible";
  document.getElementById("clip4").style.visibility = "hidden";
  document.getElementById("boardclip4").style.animationPlayState = "running";
  document.getElementById("boardclip4").style.animationIterationCount = "1";
  click += 1;
  showNextBtn(click);
}

document.getElementById("drafter-out").addEventListener("click", () => {
  document.getElementById("drafter-out").style.visibility = "hidden";
  document.getElementById("drafter-in").style.visibility = "visible";
  document.getElementById("drafter-in").style.animationPlayState = "running";
  document.getElementById("drafter-in").style.animationIterationCount = "1";
  click += 1;
  showNextBtn(click);
});
