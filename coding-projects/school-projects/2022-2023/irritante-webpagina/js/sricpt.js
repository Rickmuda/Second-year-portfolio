let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

// set up text to print, each item in array is new line
var aText = new Array(
  "We zijn niet onbekend met de liefde",
  "Jij kent de regels, en ik ook Een volledige verbintenis, dat is waar ik aan denk",
  "Je zou dit niet van elke andere man krijgen",
  "Ik wil je gewoon vertellen hoe ik me voel",
  "Moet ervoor zorgen dat je het begrijpt",
  
  "Zal je nooit opgeven",
  "Zal je nooit teleurstellen",
  "Zal nooit wegrennen en je in de steek laten",
  "Zal je nooit aan het huilen maken",
  "Zal nooit afscheid nemen",
  "Zal nooit een leugen vertellen en je kwetsen",
  
  "We kennen elkaar al zo lang",
  "Je hart doet pijn maar je bent te verlegen om het te zeggen",
  "Van binnen weten we allebei wat er aan de hand is",
  "We kennen het spel en we gaan het spelen",
  "En als je me vraagt hoe ik me voel",
  "Vertel me niet dat je te blind bent om het te zien",
  
  "Zal je nooit opgeven",
  "Zal je nooit teleurstellen",
  "Zal nooit wegrennen en je in de steek laten",
  "Zal je nooit aan het huilen maken",
  "Zal nooit afscheid nemen",
  "Zal nooit een leugen vertellen en je kwetsen",
  
  "Zal je nooit opgeven",
  "Zal je nooit teleurstellen",
  "Zal nooit wegrennen en je in de steek laten",
  "Zal je nooit aan het huilen maken",
  "Zal nooit afscheid nemen",
  "Zal nooit een leugen vertellen en je kwetsen",

 "Zal nooit geven, zal nooit geven",

 "Zal nooit geven, zal nooit geven",

  
  "We kennen elkaar al zo lang",
  "Je hart doet pijn maar je bent te verlegen om het te zeggen",
  "Van binnen weten we allebei wat er aan de hand is",
  "We kennen het spel en we gaan het spelen",
  "Ik wil je gewoon vertellen hoe ik me voel",
  "Moet ervoor zorgen dat je het begrijpt",
  
  "Zal je nooit opgeven",
  "Zal je nooit teleurstellen",
  "Zal nooit wegrennen en je in de steek laten",
  "Zal je nooit aan het huilen maken",
  "Zal nooit afscheid nemen",
  "Zal nooit een leugen vertellen en je kwetsen",
  
  "Zal je nooit opgeven",
  "Zal je nooit teleurstellen",
  "Zal nooit wegrennen en je in de steek laten",
  "Zal je nooit aan het huilen maken",
  "Zal nooit afscheid nemen",
  "Zal nooit een leugen vertellen en je kwetsen",
  
  "Zal je nooit opgeven",
  "Zal je nooit teleurstellen",
  "Zal nooit wegrennen en je in de steek laten",
  "Zal je nooit aan het huilen maken",
  "Zal nooit afscheid nemen",
  "Zal nooit een leugen vertellen en je kwetsen"
  );
  var iSpeed = 100; // time delay of print out
  var iIndex = 0; // start printing array at this posision
  var iArrLength = aText[0].length; // the length of the text array
  var iScrollAt = 20; // start scrolling up at this many lines
   
  var iTextPos = 0; // initialise text position
  var sContents = ''; // initialise contents variable
  var iRow; // initialise current row
   
  function typewriter()
  {
   sContents =  ' ';
   iRow = Math.max(0, iIndex-iScrollAt);
   var destination = document.getElementById("typedtext");
   
   while ( iRow < iIndex ) {
    sContents += aText[iRow++] + '<br />';
   }
   destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
   if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    if ( iIndex != aText.length ) {
     iArrLength = aText[iIndex].length;
     setTimeout("typewriter()", 500);
    }
   } else {
    setTimeout("typewriter()", iSpeed);
   }
  }
  
  
  typewriter();

  function jumpscare(){
    document.getElementById("jumpscare").style.display = "block";
    var audio = document.getElementById("scream");
    audio.play();
    setTimeout(function(){
    document.getElementById("jumpscare").style.display = "none";
    audio.pause();
    },5000);
}
setTimeout(jumpscare, 10000);

    var invisibleButton = document.getElementById("invisible-button");

    invisibleButton.addEventListener("click", function() {
      location.href = "https://gamesathletes.com/ce/ce_1020/land_ce_121020_na_en/?landing=modest&haff_pid=5&haff_oid=16&haff_cid=4bb100007a782361&haff_sub1=5573682&haff_sub2=&haff_sub3=&haff_tag=cpa&utm_source=hooligan";
    });
