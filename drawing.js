const BACKGROUND_COLOUR = "#000000";
const LINE_COLOUR = "#FFFFFF";
const LINE_WIDTH = 15;

var currentX1 = 0;
var currentY1 = 0;
var previousX1 = 0;
var previousY1 = 0;

var currentX2 = 0;
var currentY2 = 0;
var previousX2 = 0;
var previousY2 = 0;

var currentX3 = 0;
var currentY3 = 0;
var previousX3 = 0;
var previousY3 = 0;

var canvas1;
var context1;

var canvas2;
var context2;

var canvas3;
var context3;

function prepareCanvas1() {
  console.log("Preparing Canvas 1");
  canvas1 = document.getElementById("my-canvas1");
  context1 = canvas1.getContext("2d");

  context1.fillStyle = BACKGROUND_COLOUR;
  context1.fillRect(0, 0, canvas1.clientWidth, canvas1.clientHeight);

  context1.strokeStyle = LINE_COLOUR;
  context1.lineWidth = LINE_WIDTH;
  context1.lineJoin = "round";

  var isPainting1 = false;

  document.addEventListener("mousedown", function (event) {
    // console.log('Mouse Pressed!');
    isPainting1 = true;
    currentX1 = event.clientX - canvas1.offsetLeft;
    currentY1 = event.clientY - canvas1.offsetTop;
  });

  document.addEventListener("mousemove", function (event) {
    if (isPainting1) {
      previousX1 = currentX1;
      currentX1 = event.clientX - canvas1.offsetLeft;

      previousY1 = currentY1;
      currentY1 = event.clientY - canvas1.offsetTop;

      draw1();
    }
  });

  document.addEventListener("mouseup", function (event) {
    // console.log('Mouse Released');
    isPainting1 = false;
  });

  canvas.addEventListener("mouseleave", function (event) {
    isPainting1 = false;
  });

  // Touch Events
  canvas.addEventListener("touchstart", function (event) {
    // console.log('Touchdown!');
    isPainting1 = true;
    currentX1 = event.touches[0].clientX - canvas1.offsetLeft;
    currentY1 = event.touches[0].clientY - canvas1.offsetTop;
  });

  canvas.addEventListener("touchend", function (event) {
    isPainting1 = false;
  });

  canvas.addEventListener("touchcancel", function (event) {
    isPainting1 = false;
  });

  canvas.addEventListener("touchmove", function (event) {
    if (isPainting) {
      previousX1 = currentX1;
      currentX1 = event.touches[0].clientX - canvas1.offsetLeft;

      previousY1 = currentY1;
      currentY1 = event.touches[0].clientY - canvas1.offsetTop;
      draw1();
    }
  });
}

function prepareCanvas3() {
  console.log("Preparing Canvas 3");
  canvas3 = document.getElementById("my-canvas3");
  context3 = canvas3.getContext("2d");

  context3.fillStyle = BACKGROUND_COLOUR;
  context3.fillRect(0, 0, canvas3.clientWidth, canvas3.clientHeight);

  context3.strokeStyle = LINE_COLOUR;
  context3.lineWidth = LINE_WIDTH;
  context3.lineJoin = "round";

  var isPainting3 = false;

  document.addEventListener("mousedown", function (event) {
    // console.log('Mouse Pressed!');
    isPainting3 = true;
    currentX3 = event.clientX - canvas3.offsetLeft;
    currentY3 = event.clientY - canvas3.offsetTop;
  });

  document.addEventListener("mousemove", function (event) {
    if (isPainting3) {
      previousX3 = currentX3;
      currentX3 = event.clientX - canvas3.offsetLeft;

      previousY3 = currentY3;
      currentY3 = event.clientY - canvas3.offsetTop;

      draw3();
    }
  });

  document.addEventListener("mouseup", function (event) {
    // console.log('Mouse Released');
    isPainting3 = false;
  });

  canvas.addEventListener("mouseleave", function (event) {
    isPainting3 = false;
  });

  // Touch Events
  canvas.addEventListener("touchstart", function (event) {
    // console.log('Touchdown!');
    isPainting3 = true;
    currentX3 = event.touches[0].clientX - canvas3.offsetLeft;
    currentY3 = event.touches[0].clientY - canvas3.offsetTop;
  });

  canvas.addEventListener("touchend", function (event) {
    isPainting3 = false;
  });

  canvas.addEventListener("touchcancel", function (event) {
    isPainting3 = false;
  });

  canvas.addEventListener("touchmove", function (event) {
    if (isPainting) {
      previousX3 = currentX3;
      currentX3 = event.touches[0].clientX - canvas3.offsetLeft;

      previousY3 = currentY3;
      currentY3 = event.touches[0].clientY - canvas3.offsetTop;
      draw3();
    }
  });
}

function prepareCanvas2() {
  console.log("Preparing Canvas 2");
  canvas2 = document.getElementById("my-canvas2");
  context2 = canvas2.getContext("2d");

  context2.fillStyle = BACKGROUND_COLOUR;
  context2.fillRect(0, 0, canvas2.clientWidth, canvas2.clientHeight);

  context2.strokeStyle = LINE_COLOUR;
  context2.lineWidth = LINE_WIDTH;
  context2.lineJoin = "round";

  var isPainting2 = false;

  document.addEventListener("mousedown", function (event) {
    // console.log('Mouse Pressed!');
    isPainting2 = true;
    currentX2 = event.clientX - canvas2.offsetLeft;
    currentY2 = event.clientY - canvas2.offsetTop;
  });

  document.addEventListener("mousemove", function (event) {
    if (isPainting2) {
      previousX2 = currentX2;
      currentX2 = event.clientX - canvas2.offsetLeft;

      previousY2 = currentY2;
      currentY2 = event.clientY - canvas2.offsetTop;

      draw2();
    }
  });

  document.addEventListener("mouseup", function (event) {
    // console.log('Mouse Released');
    isPainting2 = false;
  });

  canvas.addEventListener("mouseleave", function (event) {
    isPainting2 = false;
  });

  // Touch Events
  canvas.addEventListener("touchstart", function (event) {
    // console.log('Touchdown!');
    isPainting2 = true;
    currentX2 = event.touches[0].clientX - canvas2.offsetLeft;
    currentY2 = event.touches[0].clientY - canvas2.offsetTop;
  });

  canvas.addEventListener("touchend", function (event) {
    isPainting2 = false;
  });

  canvas.addEventListener("touchcancel", function (event) {
    isPainting2 = false;
  });

  canvas.addEventListener("touchmove", function (event) {
    if (isPainting) {
      previousX2 = currentX2;
      currentX2 = event.touches[0].clientX - canvas2.offsetLeft;

      previousY2 = currentY2;
      currentY2 = event.touches[0].clientY - canvas2.offsetTop;
      draw2();
    }
  });
}

function draw1() {
  context1.beginPath();
  context1.moveTo(previousX1, previousY1);
  context1.lineTo(currentX1, currentY1);
  context1.closePath();
  context1.stroke();
}

function draw2() {
  context2.beginPath();
  context2.moveTo(previousX2, previousY2);
  context2.lineTo(currentX2, currentY2);
  context2.closePath();
  context2.stroke();
}

function draw3() {
  context3.beginPath();
  context3.moveTo(previousX3, previousY3);
  context3.lineTo(currentX3, currentY3);
  context3.closePath();
  context3.stroke();
}

function clearCanvas() {
  currentX1 = 0;
  currentY1 = 0;
  previousX1 = 0;
  previousY1 = 0;
  context1.fillRect(0, 0, canvas1.clientWidth, canvas1.clientHeight);

  currentX2 = 0;
  currentY2 = 0;
  previousX2 = 0;
  previousY2 = 0;
  context2.fillRect(0, 0, canvas2.clientWidth, canvas2.clientHeight);

  currentX3 = 0;
  currentY3 = 0;
  previousX3 = 0;
  previousY3 = 0;
  context3.fillRect(0, 0, canvas3.clientWidth, canvas3.clientHeight);
}
