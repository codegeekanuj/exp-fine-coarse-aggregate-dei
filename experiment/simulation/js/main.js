//Your JavaScript goes in here

window.addEventListener("load", function () {
  var loader = document.getElementById("loader");
  loader.style.display = "none";
  document.body.style.overflow = "auto"; // Re-enable scroll bar
});


function gif1() {
  document.getElementById("one").style.visibility = "hidden";
  document.getElementById("assembleStep1").style.visibility = "hidden";
  document.getElementById("gif1").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("next").style.visibility = "visible";
  document.getElementById("arrow").style.visibility = "visible";
  }, 11000);
}

function gif2() {
  document.getElementById("two").style.visibility = "hidden";
  document.getElementById("gif2").style.visibility = "visible"; 
  myTimeout = setTimeout(() => {
    document.getElementById("gif2").style.visibility = "hidden"; 
    document.getElementById("three").style.visibility = "visible";
    document.getElementById("transbox2").style.visibility = "hidden";
    document.getElementById("transbox3").style.visibility = "visible";
  }, 5400);
}


function gif3() {
  document.getElementById("three").style.visibility = "hidden";
  document.getElementById("gif3").style.visibility = "visible"; 
  myTimeout = setTimeout(() => {
    document.getElementById("gif3").style.visibility = "hidden"; 
    document.getElementById("four").style.visibility = "visible";
    document.getElementById("transbox4").style.visibility = "visible";
    document.getElementById("transbox3").style.visibility = "hidden";
  }, 4000);
}

function gif4() {
  document.getElementById("four").style.visibility = "hidden";
  document.getElementById("gif4").style.visibility = "visible"; 
  myTimeout = setTimeout(() => {
    document.getElementById("gif4").style.visibility = "hidden"; 
    document.getElementById("five").style.visibility = "visible";
    document.getElementById("transbox5").style.visibility = "visible";
    document.getElementById("transbox4").style.visibility = "hidden";
  }, 5000);
}

function gif5() {
  document.getElementById("five").style.visibility = "hidden";
  document.getElementById("gif5").style.visibility = "visible"; 
  myTimeout = setTimeout(() => {
    document.getElementById("gif5").style.visibility = "hidden"; 
    document.getElementById("six").style.visibility = "visible";
    document.getElementById("transbox6").style.visibility = "visible";
    document.getElementById("transbox5").style.visibility = "hidden";
  }, 5000);
}

function gif6() {
  document.getElementById("six").style.visibility = "hidden";
  document.getElementById("gif6").style.visibility = "visible"; 
  myTimeout = setTimeout(() => {
    document.getElementById("gif6").style.visibility = "hidden"; 
    document.getElementById("seven").style.visibility = "visible";
    document.getElementById("transbox6").style.visibility = "hidden";
    document.getElementById("next").style.visibility = "visible";
  }, 5000);
}

function gif7() {
  document.getElementById("eight").style.visibility = "hidden";
  document.getElementById("gif7").style.visibility = "visible"; 
  myTimeout = setTimeout(() => {
    document.getElementById("gif7").style.visibility = "hidden"; 
    document.getElementById("nine").style.visibility = "visible";
    document.getElementById("transbox7").style.visibility = "hidden";
    document.getElementById("transbox8").style.visibility = "visible";
  }, 5000);
}

function gif8() {
  document.getElementById("nine").style.visibility = "hidden";
  document.getElementById("gif8").style.visibility = "visible"; 
  myTimeout = setTimeout(() => {
    document.getElementById("gif8").style.visibility = "hidden"; 
    document.getElementById("ten").style.visibility = "visible";
    document.getElementById("transbox8").style.visibility = "hidden";
    document.getElementById("transbox9").style.visibility = "visible";
  }, 5500);
}

function gif9() {
  document.getElementById("ten").style.visibility = "hidden";
  document.getElementById("gif9").style.visibility = "visible"; 
  myTimeout = setTimeout(() => {
    document.getElementById("gif9").style.visibility = "hidden"; 
    document.getElementById("eleven").style.visibility = "visible";
    document.getElementById("transbox9").style.visibility = "hidden";
    document.getElementById("transbox10").style.visibility = "visible";
  }, 19000);
}

function gif10() {
  document.getElementById("eleven").style.visibility = "hidden";
  document.getElementById("gif10").style.visibility = "visible"; 
  myTimeout = setTimeout(() => {
    document.getElementById("transbox10").style.visibility = "hidden";
    document.getElementById("next").style.visibility = "visible";
  }, 25000);
}

function gif11() {
  document.getElementById("twelve").style.visibility = "hidden";
  document.getElementById("gif11").style.visibility = "visible"; 
  myTimeout = setTimeout(() => {
    document.getElementById("gif11").style.visibility = "hidden"; 
    document.getElementById("thirteen").style.visibility = "visible";
    document.getElementById("transbox11").style.visibility = "hidden";
    document.getElementById("next").style.visibility = "visible";
  }, 32500);
}

function gif12() {
  document.getElementById("fourteen").style.visibility = "hidden";
  document.getElementById("gif12").style.visibility = "visible"; 
  myTimeout = setTimeout(() => {
    document.getElementById("gif12").style.visibility = "hidden"; 
    document.getElementById("fifteen").style.visibility = "visible";
    document.getElementById("transbox12").style.visibility = "hidden";
    document.getElementById("next").style.visibility = "visible";
  }, 11500);
}

function gif13() {
  document.getElementById("seventeen").style.visibility = "hidden";
  document.getElementById("transbox23").style.visibility = "hidden";
  document.getElementById("arrow13").style.visibility = "hidden";
  document.getElementById("gif13").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("arrow13").style.visibility = "visible";
    document.getElementById("gif13").style.visibility = "hidden";
    document.getElementById("transbox24").style.visibility = "visible";
    document.getElementById("eighteen").style.visibility = "visible";
  }, 5750);
}

function gif14() {
  document.getElementById("transbox24").style.visibility = "hidden";
  document.getElementById("eighteen").style.visibility = "hidden";
  document.getElementById("arrow13").style.visibility = "hidden";
  document.getElementById("gif14").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("gif14").style.visibility = "hidden";
    document.getElementById("nineteen").style.visibility = "visible";
    document.getElementById("arrow").style.visibility = "visible";
    document.getElementById("next").style.visibility = "visible";
  }, 29000);
}

function gif15() {
  document.getElementById("twenty").style.visibility = "hidden";
  document.getElementById("arrow12").style.visibility = "hidden";
  document.getElementById("gif15").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("gif15").style.visibility = "hidden";
    document.getElementById("twentyone").style.visibility = "visible";
    document.getElementById("arrow").style.visibility = "visible";
    document.getElementById("next").style.visibility = "visible";
  }, 4300);
}

function gif16() {
  document.getElementById("twentytwo").style.visibility = "hidden";
  document.getElementById("arrow12").style.visibility = "hidden";
  document.getElementById("transbox26").style.visibility = "hidden";
  document.getElementById("gif16").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("gif16").style.visibility = "hidden";
    document.getElementById("twentythree").style.visibility = "visible";
    document.getElementById("next").style.visibility = "visible";
    document.getElementById("arrow").style.visibility = "visible";
  }, 7600);
}

function gif17() {
  document.getElementById("twentyfour").style.visibility = "hidden";
  document.getElementById("transbox25").style.visibility = "hidden";
  document.getElementById("arrow18").style.visibility = "hidden";
  document.getElementById("gif17").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("arrow12").style.visibility = "visible";
    document.getElementById("gif17").style.visibility = "hidden";
    document.getElementById("transbox19").style.visibility = "visible";
    document.getElementById("twentysix").style.visibility = "visible";
  }, 3750);
}

function gif18() {
  document.getElementById("transbox19").style.visibility = "hidden";
  document.getElementById("twentysix").style.visibility = "hidden";
  document.getElementById("arrow12").style.visibility = "hidden";
  document.getElementById("gif18").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("gif18").style.visibility = "hidden";
    document.getElementById("twentyseven").style.visibility = "visible";
    document.getElementById("next").style.visibility = "visible";
    document.getElementById("arrow").style.visibility = "visible";
  }, 9500);
}

function gif19() {
  document.getElementById("transbox19").style.visibility = "hidden";
  document.getElementById("twentyeight").style.visibility = "hidden";
  document.getElementById("arrow17").style.visibility = "hidden";
  document.getElementById("gif19").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("gif19").style.visibility = "hidden";
    document.getElementById("twentynine").style.visibility = "visible";
    document.getElementById("next").style.visibility = "visible";
    document.getElementById("arrow").style.visibility = "visible";
  }, 7900);
}

function gif20() {
  document.getElementById("arrow12").style.visibility = "hidden";
  document.getElementById("thirty").style.visibility = "hidden";
  document.getElementById("gif20").style.visibility = "visible";
  document.getElementById("transbox19").style.visibility = "hidden";
  myTimeout = setTimeout(() => {
    document.getElementById("gif20").style.visibility = "hidden";
    document.getElementById("thirtyone").style.visibility = "visible";
    document.getElementById("next").style.visibility = "visible";
    document.getElementById("arrow").style.visibility = "visible";
  }, 7500);
}

function gif21() {
  document.getElementById("twentysix").style.visibility = "hidden";
  document.getElementById("gif23").style.visibility = "visible"; 
  myTimeout = setTimeout(() => {
    document.getElementById("transbox18").style.visibility = "hidden";
    document.getElementById("transbox19").style.visibility = "visible";
    document.getElementById("gif23").style.visibility = "hidden"; 
    document.getElementById("twentysix").style.visibility = "visible";
  }, 9000);
}

function gif22() {
  document.getElementById("twentysix").style.visibility = "hidden";
  document.getElementById("gif24").style.visibility = "visible"; 
  myTimeout = setTimeout(() => {
    document.getElementById("transbox19").style.visibility = "hidden";
    document.getElementById("transbox20").style.visibility = "visible";
    document.getElementById("gif24").style.visibility = "hidden"; 
    document.getElementById("twentysix").style.visibility = "visible";
  }, 9000);
}

function gif23() {
  document.getElementById("twentysix").style.visibility = "hidden";
  document.getElementById("gif25").style.visibility = "visible"; 
  myTimeout = setTimeout(() => {
    document.getElementById("transbox20").style.visibility = "hidden";
    document.getElementById("transbox21").style.visibility = "visible";
    document.getElementById("gif25").style.visibility = "hidden"; 
    document.getElementById("twentysix").style.visibility = "visible";
  }, 9000);
}

function gif24() {
  document.getElementById("twentysix").style.visibility = "hidden";
  document.getElementById("gif26").style.visibility = "visible"; 
  myTimeout = setTimeout(() => {
    document.getElementById("transbox21").style.visibility = "hidden";
    document.getElementById("next").style.visibility = "visible";
  }, 10000);
}

function gif60() {
  document.getElementById("arrow19").style.visibility = "hidden";
  document.getElementById("gif23").style.visibility = "visible";
  document.getElementById("transbox31").style.visibility = "hidden";
  document.getElementById("thirtyfive").style.visibility = "hidden";
  myTimeout = setTimeout(() => {
    document.getElementById("gif23").style.visibility = "hidden";
    document.getElementById("arrow19").style.visibility = "visible";
    document.getElementById("transbox32").style.visibility = "visible";
    document.getElementById("thirtysix").style.visibility = "visible";
  }, 3600);
}

function gif61() {
  document.getElementById("arrow19").style.visibility = "hidden";
  document.getElementById("gif24").style.visibility = "visible";
  document.getElementById("transbox32").style.visibility = "hidden";
  document.getElementById("thirtysix").style.visibility = "hidden";
  myTimeout = setTimeout(() => {
    document.getElementById("gif24").style.visibility = "hidden";
    document.getElementById("arrow20").style.visibility = "visible";
    document.getElementById("transbox33").style.visibility = "visible";
    document.getElementById("thirtyseven").style.visibility = "visible";
  }, 3400);
}

function gif25() {
  document.getElementById("arrow20").style.visibility = "hidden";
  document.getElementById("gif25").style.visibility = "visible";
  document.getElementById("transbox33").style.visibility = "hidden";
  document.getElementById("thirtyseven").style.visibility = "hidden";
  myTimeout = setTimeout(() => {
    document.getElementById("thirtyeight").style.visibility = "visible";
    document.getElementById("arrow").style.visibility = "visible";
    document.getElementById("next").style.visibility = "visible";
  }, 7900);
}

function gif62() {
  document.getElementById("arrow20").style.visibility = "hidden";
  document.getElementById("gif25").style.visibility = "visible";
  document.getElementById("transbox33").style.visibility = "hidden";
  document.getElementById("thirtyseven").style.visibility = "hidden";
  myTimeout = setTimeout(() => {
    document.getElementById("next").style.visibility = "visible";
    document.getElementById("arrow").style.visibility = "visible";
  }, 8800);
}

function gif26() {
  document.getElementById("arrow12").style.visibility = "hidden";
  document.getElementById("gif26").style.visibility = "visible";
  document.getElementById("transbox34").style.visibility = "hidden";
  document.getElementById("thirtyeight").style.visibility = "hidden";
  myTimeout = setTimeout(() => {
    document.getElementById("arrow").style.visibility = "visible";
    document.getElementById("next").style.visibility = "visible";
  }, 9500);
}

function gif27() {
  document.getElementById("arrow22").style.visibility = "hidden";
  document.getElementById("gif27").style.visibility = "visible";
  document.getElementById("transbox35").style.visibility = "hidden";
  document.getElementById("fourty").style.visibility = "hidden";
  myTimeout = setTimeout(() => {
    document.getElementById("gif27").style.visibility = "hidden";
    document.getElementById("arrow22").style.visibility = "visible";
    document.getElementById("fourtyone").style.visibility = "visible";
    document.getElementById("transbox36").style.visibility = "visible";
  }, 4900);
}

function gif64() {
  document.getElementById("arrow15").style.visibility = "hidden";
  document.getElementById("gif27").style.visibility = "visible";
  document.getElementById("transbox41").style.visibility = "hidden";
  document.getElementById("fourty").style.visibility = "hidden";
  myTimeout = setTimeout(() => {
    document.getElementById("gif27").style.visibility = "hidden";
    document.getElementById("arrow15").style.visibility = "visible";
    document.getElementById("fourtyone").style.visibility = "visible";
    document.getElementById("transbox53").style.visibility = "visible";
  }, 5800);
}

function gif28() {
  document.getElementById("arrow22").style.visibility = "hidden";
  document.getElementById("gif28").style.visibility = "visible";
  document.getElementById("transbox36").style.visibility = "hidden";
  document.getElementById("fourtyone").style.visibility = "hidden";
  myTimeout = setTimeout(() => {
    document.getElementById("gif28").style.visibility = "hidden";
    document.getElementById("arrow").style.visibility = "visible";
    document.getElementById("fourtytwo").style.visibility = "visible";
    document.getElementById("next").style.visibility = "visible";
  }, 2100);
}

function gif65() {
  document.getElementById("arrow15").style.visibility = "hidden";
  document.getElementById("gif28").style.visibility = "visible";
  document.getElementById("transbox53").style.visibility = "hidden";
  document.getElementById("fourtyone").style.visibility = "hidden";
  myTimeout = setTimeout(() => {
    document.getElementById("gif28").style.visibility = "hidden";
    document.getElementById("arrow").style.visibility = "visible";
    document.getElementById("fourtytwo").style.visibility = "visible";
    document.getElementById("next").style.visibility = "visible";
  }, 2000);
}

function gif29() {
  document.getElementById("arrow21").style.visibility = "hidden";
  document.getElementById("gif29").style.visibility = "visible";
  document.getElementById("transbox34").style.visibility = "hidden";
  document.getElementById("fourtyfour").style.visibility = "hidden";
  myTimeout = setTimeout(() => {
    document.getElementById("gif29").style.visibility = "hidden";
    document.getElementById("transbox37").style.visibility = "visible";
    document.getElementById("fourtyfive").style.visibility = "visible";
    document.getElementById("arrow21").style.visibility = "visible";
  }, 19300);
}

function gif66() {
  document.getElementById("arrow18").style.visibility = "hidden";
  document.getElementById("gif66").style.visibility = "visible";
  document.getElementById("transbox54").style.visibility = "hidden";
  document.getElementById("ninetytwo").style.visibility = "hidden";
  myTimeout = setTimeout(() => {
    document.getElementById("gif66").style.visibility = "hidden";
    document.getElementById("transbox29").style.visibility = "visible";
    document.getElementById("ninetythree").style.visibility = "visible";
    document.getElementById("arrow19").style.visibility = "visible";
  }, 3700);
}

function gif30() {
  document.getElementById("arrow21").style.visibility = "hidden";
  document.getElementById("gif30").style.visibility = "visible";
  document.getElementById("transbox37").style.visibility = "hidden";
  document.getElementById("fourtyfive").style.visibility = "hidden";
  myTimeout = setTimeout(() => {
    document.getElementById("gif30").style.visibility = "hidden";
    document.getElementById("arrow21").style.visibility = "visible";
    document.getElementById("transbox38").style.visibility = "visible";
    document.getElementById("fourtysix").style.visibility = "visible";
  }, 6000);
}

function gif67() {
  document.getElementById("arrow19").style.visibility = "hidden";
  document.getElementById("gif67").style.visibility = "visible";
  document.getElementById("transbox29").style.visibility = "hidden";
  document.getElementById("ninetythree").style.visibility = "hidden";
  myTimeout = setTimeout(() => {
    document.getElementById("gif67").style.visibility = "hidden";
    document.getElementById("arrow25").style.visibility = "visible";
    document.getElementById("transbox55").style.visibility = "visible";
    document.getElementById("ninetyfour").style.visibility = "visible";
  }, 3900);
}

function gif68() {
  document.getElementById("arrow25").style.visibility = "hidden";
  document.getElementById("gif68").style.visibility = "visible";
  document.getElementById("transbox55").style.visibility = "hidden";
  document.getElementById("ninetyfour").style.visibility = "hidden";
  myTimeout = setTimeout(() => {
    document.getElementById("gif68").style.visibility = "hidden";
    document.getElementById("arrow12").style.visibility = "visible";
    document.getElementById("transbox56").style.visibility = "visible";
    document.getElementById("ninetyfive").style.visibility = "visible";
  }, 7900);
}

function gif69() {
  document.getElementById("arrow12").style.visibility = "hidden";
  document.getElementById("gif69").style.visibility = "visible";
  document.getElementById("transbox56").style.visibility = "hidden";
  document.getElementById("ninetyfive").style.visibility = "hidden";
  myTimeout = setTimeout(() => {
    document.getElementById("gif69").style.visibility = "hidden";
    document.getElementById("arrow12").style.visibility = "visible";
    document.getElementById("transbox57").style.visibility = "visible";
    document.getElementById("nientysix").style.visibility = "visible";
  }, 5700);
}

function gif70() {
  document.getElementById("arrow12").style.visibility = "hidden";
  document.getElementById("gif70").style.visibility = "visible";
  document.getElementById("transbox57").style.visibility = "hidden";
  document.getElementById("nientysix").style.visibility = "hidden";
  myTimeout = setTimeout(() => {
    document.getElementById("gif70").style.visibility = "hidden";
    document.getElementById("arrow").style.visibility = "visible";
    document.getElementById("next").style.visibility = "visible";
    document.getElementById("transbox58").style.visibility = "visible";
    document.getElementById("hundered").style.visibility = "visible";
  }, 15600);
}

function gif31() {
  document.getElementById("arrow21").style.visibility = "hidden";
  document.getElementById("gif31").style.visibility = "visible";
  document.getElementById("transbox37").style.visibility = "hidden";
  document.getElementById("fourtysix").style.visibility = "hidden";
  myTimeout = setTimeout(() => {
    document.getElementById("gif31").style.visibility = "hidden";
    document.getElementById("transbox38").style.visibility = "visible";
    document.getElementById("next").style.visibility = "visible";
    document.getElementById("fourtyseven").style.visibility = "visible";
  }, 18000);
}

function gif32() {
  document.getElementById("arrow15").style.visibility = "hidden";
  document.getElementById("gif32").style.visibility = "visible";
  document.getElementById("transbox23").style.visibility = "hidden";
  document.getElementById("fourtyeight").style.visibility = "hidden";
  myTimeout = setTimeout(() => {
    document.getElementById("gif32").style.visibility = "hidden";
    document.getElementById("arrow15").style.visibility = "visible";
    document.getElementById("transbox39").style.visibility = "visible";
    document.getElementById("fourtynine").style.visibility = "visible";
  }, 4000);
}

function gif33() {
  document.getElementById("arrow15").style.visibility = "hidden";
  document.getElementById("gif33").style.visibility = "visible";
  document.getElementById("transbox39").style.visibility = "hidden";
  document.getElementById("fourtynine").style.visibility = "hidden";
  myTimeout = setTimeout(() => {
    document.getElementById("gif33").style.visibility = "hidden";
    document.getElementById("arrow").style.visibility = "visible";
    document.getElementById("transbox39").style.visibility = "visible";
    document.getElementById("next").style.visibility = "visible";
    document.getElementById("fifty").style.visibility = "visible";
  }, 10000);
}

function gif34() {
  document.getElementById("gif34").style.visibility = "visible";
  document.getElementById("transbox23").style.visibility = "hidden";
  document.getElementById("arrow15").style.visibility = "hidden";
  document.getElementById("fiftyone").style.visibility = "hidden";
  myTimeout = setTimeout(() => {
    document.getElementById("gif34").style.visibility = "hidden";
    document.getElementById("arrow23").style.visibility = "visible";
    document.getElementById("transbox40").style.visibility = "visible";
    document.getElementById("fiftytwo").style.visibility = "visible";
  }, 11650);
}

function gif75() {
  document.getElementById("gif75").style.visibility = "visible";
  document.getElementById("transbox54").style.visibility = "hidden";
  document.getElementById("arrow18").style.visibility = "hidden";
  document.getElementById("fiftyone").style.visibility = "hidden";
  myTimeout = setTimeout(() => {
    document.getElementById("gif75").style.visibility = "hidden";
    document.getElementById("arrow26").style.visibility = "visible";
    document.getElementById("transbox57").style.visibility = "visible";
    document.getElementById("fiftytwo").style.visibility = "visible";
  }, 19500);
}

function gif35() {
  document.getElementById("arrow23").style.visibility = "hidden";
  document.getElementById("gif35").style.visibility = "visible";
  document.getElementById("transbox40").style.visibility = "hidden";
  document.getElementById("fiftytwo").style.visibility = "hidden";
  myTimeout = setTimeout(() => {
    document.getElementById("arrow15").style.visibility = "visible";
    document.getElementById("gif35").style.visibility = "hidden";
    document.getElementById("transbox41").style.visibility = "visible";
    document.getElementById("fiftythree").style.visibility = "visible";
  }, 9500);
}

function gif76() {
  document.getElementById("arrow26").style.visibility = "hidden";
  document.getElementById("gif76").style.visibility = "visible";
  document.getElementById("transbox57").style.visibility = "hidden";
  document.getElementById("fiftytwo").style.visibility = "hidden";
  myTimeout = setTimeout(() => {
    document.getElementById("arrow").style.visibility = "visible";
    document.getElementById("next").style.visibility = "visible";
    document.getElementById("gif76").style.visibility = "hidden";
    document.getElementById("fiftythree").style.visibility = "visible";
  }, 64500);
}

function gif36() {
  document.getElementById("gif36").style.visibility = "visible";
  document.getElementById("transbox41").style.visibility = "hidden";
  document.getElementById("arrow15").style.visibility = "hidden";
  document.getElementById("fiftythree").style.visibility = "hidden";
  myTimeout = setTimeout(() => {
    document.getElementById("gif36").style.visibility = "hidden";
    document.getElementById("arrow23").style.visibility = "visible";
    document.getElementById("transbox42").style.visibility = "visible";
    document.getElementById("fiftyfour").style.visibility = "visible";
  }, 7650);
}

function gif37() {
  document.getElementById("arrow23").style.visibility = "hidden";
  document.getElementById("gif37").style.visibility = "visible";
  document.getElementById("transbox42").style.visibility = "hidden";
  document.getElementById("fiftyfour").style.visibility = "hidden";
  myTimeout = setTimeout(() => {
    document.getElementById("gif37").style.visibility = "hidden";
    document.getElementById("transbox43").style.visibility = "visible";
    document.getElementById("arrow24").style.visibility = "visible";
    document.getElementById("fiftyfive").style.visibility = "visible";
  }, 9500);
}

function gif38() {
  document.getElementById("gif38").style.visibility = "visible";
  document.getElementById("transbox43").style.visibility = "hidden";
  document.getElementById("arrow24").style.visibility = "hidden";
  document.getElementById("fiftyfive").style.visibility = "hidden";
  myTimeout = setTimeout(() => {
    document.getElementById("gif38").style.visibility = "hidden";
    document.getElementById("arrow20").style.visibility = "visible";
    document.getElementById("transbox33").style.visibility = "visible";
    document.getElementById("fiftysix").style.visibility = "visible";
  }, 7650);
}

function gif39() {
  document.getElementById("arrow20").style.visibility = "hidden";
  document.getElementById("gif39").style.visibility = "visible";
  document.getElementById("transbox33").style.visibility = "hidden";
  document.getElementById("fiftysix").style.visibility = "hidden";
  myTimeout = setTimeout(() => {
    document.getElementById("gif39").style.visibility = "hidden";
    document.getElementById("transbox44").style.visibility = "visible";
    document.getElementById("arrow24").style.visibility = "visible";
    document.getElementById("fiftyseven").style.visibility = "visible";
  }, 9500);
}

function gif40() {
  document.getElementById("gif40").style.visibility = "visible";
  document.getElementById("transbox44").style.visibility = "hidden";
  document.getElementById("arrow24").style.visibility = "hidden";
  document.getElementById("fiftyseven").style.visibility = "hidden";
  myTimeout = setTimeout(() => {
    document.getElementById("gif40").style.visibility = "hidden";
    document.getElementById("arrow23").style.visibility = "visible";
    document.getElementById("transbox45").style.visibility = "visible";
    document.getElementById("fiftyeight").style.visibility = "visible";
  }, 7650);
}

function gif41() {
  document.getElementById("arrow23").style.visibility = "hidden";
  document.getElementById("gif41").style.visibility = "visible";
  document.getElementById("transbox45").style.visibility = "hidden";
  document.getElementById("fiftyeight").style.visibility = "hidden";
  myTimeout = setTimeout(() => {
    document.getElementById("gif41").style.visibility = "hidden";
    document.getElementById("transbox46").style.visibility = "visible";
    document.getElementById("arrow24").style.visibility = "visible";
    document.getElementById("fiftynine").style.visibility = "visible";
  }, 9500);
}

function gif42() {
  document.getElementById("arrow24").style.visibility = "hidden";
  document.getElementById("gif42").style.visibility = "visible";
  document.getElementById("transbox46").style.visibility = "hidden";
  document.getElementById("fiftynine").style.visibility = "hidden";
  myTimeout = setTimeout(() => {
    document.getElementById("gif42").style.visibility = "hidden";
    document.getElementById("arrow23").style.visibility = "visible";
    document.getElementById("transbox47").style.visibility = "visible";
    document.getElementById("sixty").style.visibility = "visible";
  }, 7650);
}

function gif43() {
  document.getElementById("arrow23").style.visibility = "hidden";
  document.getElementById("gif43").style.visibility = "visible";
  document.getElementById("transbox47").style.visibility = "hidden";
  document.getElementById("sixty").style.visibility = "hidden";
  myTimeout = setTimeout(() => {
    document.getElementById("gif43").style.visibility = "hidden";
    document.getElementById("transbox48").style.visibility = "visible";
    document.getElementById("arrow24").style.visibility = "visible";
    document.getElementById("sixtyone").style.visibility = "visible";
  }, 9500);
}

function gif44() {
  document.getElementById("arrow24").style.visibility = "hidden";
  document.getElementById("gif44").style.visibility = "visible";
  document.getElementById("transbox48").style.visibility = "hidden";
  document.getElementById("sixtyone").style.visibility = "hidden";
  myTimeout = setTimeout(() => {
    document.getElementById("gif44").style.visibility = "hidden";
    document.getElementById("arrow23").style.visibility = "visible";
    document.getElementById("transbox49").style.visibility = "visible";
    document.getElementById("sixtytwo").style.visibility = "visible";
  }, 7650);
}

function gif45() {
  document.getElementById("arrow23").style.visibility = "hidden";
  document.getElementById("gif45").style.visibility = "visible";
  document.getElementById("transbox49").style.visibility = "hidden";
  document.getElementById("sixtytwo").style.visibility = "hidden";
  myTimeout = setTimeout(() => {
    document.getElementById("gif45").style.visibility = "hidden";
    document.getElementById("transbox50").style.visibility = "visible";
    document.getElementById("arrow24").style.visibility = "visible";
    document.getElementById("sixtythree").style.visibility = "visible";
  }, 9500);
}

function gif46() {
  document.getElementById("arrow24").style.visibility = "hidden";
  document.getElementById("gif46").style.visibility = "visible";
  document.getElementById("transbox50").style.visibility = "hidden";
  document.getElementById("sixtythree").style.visibility = "hidden";
  myTimeout = setTimeout(() => {
    document.getElementById("gif46").style.visibility = "hidden";
    document.getElementById("arrow20").style.visibility = "visible";
    document.getElementById("transbox51").style.visibility = "visible";
    document.getElementById("sixtyfour").style.visibility = "visible";
  }, 7650);
}

function gif47() {
  document.getElementById("arrow20").style.visibility = "hidden";
  document.getElementById("gif47").style.visibility = "visible";
  document.getElementById("transbox51").style.visibility = "hidden";
  document.getElementById("sixtyfour").style.visibility = "hidden";
  myTimeout = setTimeout(() => {
    document.getElementById("gif47").style.visibility = "hidden";
    document.getElementById("next").style.visibility = "visible";
    document.getElementById("sixtyfive").style.visibility = "visible";
  }, 9500);
}

function gif48() {
  document.getElementById("arrow15").style.visibility = "hidden";
  document.getElementById("transbox23").style.visibility = "hidden";
  document.getElementById("sixtysix").style.visibility = "hidden";
  document.getElementById("gif48").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("arrow15").style.visibility = "visible";
    document.getElementById("gif48").style.visibility = "hidden";
    document.getElementById("transbox52").style.visibility = "visible";
    document.getElementById("sixtyseven").style.visibility = "visible";
  }, 5500);
}

function gif49() {
  document.getElementById("arrow15").style.visibility = "hidden";
  document.getElementById("transbox52").style.visibility = "hidden";
  document.getElementById("sixtyseven").style.visibility = "hidden";
  document.getElementById("gif49").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("arrow").style.visibility = "visible";
    document.getElementById("gif49").style.visibility = "hidden";
    document.getElementById("next").style.visibility = "visible";
    document.getElementById("sixtyeight").style.visibility = "visible";
  }, 31000);
}

function gif50() {
  document.getElementById("arrow21").style.visibility = "hidden";
  document.getElementById("transbox40").style.visibility = "hidden";
  document.getElementById("sixtynine").style.visibility = "hidden";
  document.getElementById("gif50").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("gif50").style.visibility = "hidden";
    document.getElementById("seventy").style.visibility = "visible";
    document.getElementById("next").style.visibility = "visible";
  }, 4400);
}

function gif79() {
  document.getElementById("arrow17").style.visibility = "hidden";
  document.getElementById("transbox54").style.visibility = "hidden";
  document.getElementById("sixtynine").style.visibility = "hidden";
  document.getElementById("gif79").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("arrow").style.visibility = "visible";
    document.getElementById("gif79").style.visibility = "hidden";
    document.getElementById("seventy").style.visibility = "visible";
    document.getElementById("next").style.visibility = "visible";
  }, 4400);
}

function gif51() {
  document.getElementById("arrow15").style.visibility = "hidden";
  document.getElementById("transbox23").style.visibility = "hidden";
  document.getElementById("seventyone").style.visibility = "hidden";
  document.getElementById("gif51").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("transbox41").style.visibility = "visible";
    document.getElementById("arrow15").style.visibility = "visible";
    document.getElementById("gif51").style.visibility = "hidden";
    document.getElementById("seventytwo").style.visibility = "visible";
  }, 5500);
}

function gif52() {
  document.getElementById("arrow15").style.visibility = "hidden";
  document.getElementById("transbox41").style.visibility = "hidden";
  document.getElementById("seventytwo").style.visibility = "hidden";
  document.getElementById("gif52").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("arrow").style.visibility = "visible";
    document.getElementById("gif52").style.visibility = "hidden";
    document.getElementById("next").style.visibility = "visible";
    document.getElementById("seventythree").style.visibility = "visible";
  }, 1500);
}

function gif53() {
  document.getElementById("arrow15").style.visibility = "hidden";
  document.getElementById("transbox23").style.visibility = "hidden";
  document.getElementById("seventyfour").style.visibility = "hidden";
  document.getElementById("gif53").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("arrow15").style.visibility = "visible";
    document.getElementById("gif53").style.visibility = "hidden";
    document.getElementById("seventyfive").style.visibility = "visible";
    document.getElementById("transbox24").style.visibility = "visible";
  }, 5700);
}

function gif53P() {
  document.getElementById("arrow15").style.visibility = "hidden";
  document.getElementById("transbox23").style.visibility = "hidden";
  document.getElementById("seventyfour").style.visibility = "hidden";
  document.getElementById("gif53").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("arrow24").style.visibility = "visible";
    document.getElementById("gif53").style.visibility = "hidden";
    document.getElementById("seventyfive").style.visibility = "visible";
    document.getElementById("transbox44").style.visibility = "visible";
  }, 5700);
}

function gif54() {
  document.getElementById("arrow15").style.visibility = "hidden";
  document.getElementById("transbox24").style.visibility = "hidden";
  document.getElementById("seventyfive").style.visibility = "hidden";
  document.getElementById("gif54").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("gif54").style.visibility = "hidden";
    document.getElementById("seventysix").style.visibility = "visible";
    document.getElementById("transbox58").style.visibility = "visible";
    document.getElementById("arrow28").style.visibility = "visible";
  }, 3700);
}

function gif54P() {
  document.getElementById("arrow24").style.visibility = "hidden";
  document.getElementById("transbox44").style.visibility = "hidden";
  document.getElementById("seventyfive").style.visibility = "hidden";
  document.getElementById("gif54").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("gif54").style.visibility = "hidden";
    document.getElementById("seventysix").style.visibility = "visible";
    document.getElementById("transbox33").style.visibility = "visible";
    document.getElementById("arrow20").style.visibility = "visible";
  }, 3700);
}

function gif55() {
  document.getElementById("transbox58").style.visibility = "hidden";
  document.getElementById("arrow28").style.visibility = "hidden";
  document.getElementById("seventysix").style.visibility = "hidden";
  document.getElementById("gif55").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("gif55").style.visibility = "hidden";
    document.getElementById("arrow").style.visibility = "visible";
    document.getElementById("seventyseven").style.visibility = "visible";
    document.getElementById("next").style.visibility = "visible";
  }, 5900);
}

function gif55P() {
  document.getElementById("arrow20").style.visibility = "hidden";
  document.getElementById("transbox33").style.visibility = "hidden";
  document.getElementById("seventysix").style.visibility = "hidden";
  document.getElementById("gif55").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("gif55").style.visibility = "hidden";
    document.getElementById("seventyseven").style.visibility = "visible";
    document.getElementById("next").style.visibility = "visible";
  }, 5900);
}

function gif56() {
  document.getElementById("arrow12").style.visibility = "hidden";
  document.getElementById("transbox22").style.visibility = "hidden";
  document.getElementById("seventyeight").style.visibility = "hidden";
  document.getElementById("gif56").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("arrow").style.visibility = "visible";
    document.getElementById("gif56").style.visibility = "hidden";
    document.getElementById("seventynine").style.visibility = "visible";
    document.getElementById("next").style.visibility = "visible";
  }, 7500);
}

function gif56P() {
  document.getElementById("arrow20").style.visibility = "hidden";
  document.getElementById("transbox33").style.visibility = "hidden";
  document.getElementById("seventyeight").style.visibility = "hidden";
  document.getElementById("gif56").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("gif56").style.visibility = "hidden";
    document.getElementById("seventynine").style.visibility = "visible";
    document.getElementById("next").style.visibility = "visible";
  }, 7500);
}

function gif57() {
  document.getElementById("arrow29").style.visibility = "hidden";
  document.getElementById("transbox22").style.visibility = "hidden";
  document.getElementById("eighty").style.visibility = "hidden";
  document.getElementById("gif57").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("gif57").style.visibility = "hidden";
    document.getElementById("arrow12").style.visibility = "visible";
    document.getElementById("eightyone").style.visibility = "visible";
    document.getElementById("next").style.visibility = "visible";
  }, 5600);
}

function gif57P() {
  document.getElementById("arrow20").style.visibility = "hidden";
  document.getElementById("transbox33").style.visibility = "hidden";
  document.getElementById("eighty").style.visibility = "hidden";
  document.getElementById("gif57").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("gif57").style.visibility = "hidden";
    document.getElementById("eightyone").style.visibility = "visible";
    document.getElementById("next").style.visibility = "visible";
  }, 5600);
}
