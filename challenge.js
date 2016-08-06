// challenge #1

var rng = document.getElementById("slidebar");
var textInput = document.getElementById("text-input");
var sliderListener = function() {
  window.requestAnimationFrame(function() {
    textInput.value = rng.value;
  });
};
var textInputListener = function() {
	window.requestAnimationFrame(function() {
	    rng.value = textInput.value;
	});

};

rng.addEventListener("mousedown", function() {
  sliderListener();
  rng.addEventListener("mousemove", sliderListener);
});
rng.addEventListener("mouseup", function() {
  rng.removeEventListener("mousemove", sliderListener);
});

textInput.addEventListener("keydown", function(event) {
    textInputListener();
    if (event.keyCode == 13) {
      event.preventDefault();
    }
});
textInput.addEventListener("change", function(event) {
    textInputListener();
});

//challenge #4
for (var i = 1; i > 0; i++) {
  for (var j = 1; j <= 10; j++) {
    if (i % j !== 0) break;
    if (j === 10) {
      document.getElementById("numbersearch").innerHTML = "the samllest that can be divided by 1-10 without remainder is: " + i;
      i = -1000;
    }
  }
}

//challenge #5
var fabonacciNumber = [1, 1];
for (var i = 2; fabonacciNumber[i-1] + fabonacciNumber[i-2] < 500; i++) {
  fabonacciNumber[i] = fabonacciNumber[i-1] + fabonacciNumber[i-2];
  document.getElementById("fabonaccinumber").innerHTML = "fabonacci numbers less than 500 are: " + fabonacciNumber;
}

//challenge #6
var sumOfSquares = 0, sum = 0, squareOfSum = 0;
for (var i = 1; i <= 10; i++) {
  sum += i;
  sumOfSquares += i * i;
}
squareOfSum = sum * sum;
document.getElementById("difference").innerHTML = "sum of squares is " + sumOfSquares + ", " + "square of sum is " + squareOfSum;

      