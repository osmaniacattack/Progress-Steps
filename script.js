const progress = document.getElementById("progress"); //gets the progress bar
const prev = document.getElementById("prev"); //gets the prev button
const next = document.getElementById("next"); // gets the next button
const circles = document.querySelectorAll(".circle"); //gets all the circle divs

let currentActive = 1; // counter for progress bar

// increments progress counter and updates the class list for each circle based on
// increment count
next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');
    progress.style.width = ((actives.length -1) / (circles.length - 1)) * 100 + '%'; // sets the width property based on # of actives over total num of circles as a percentage

    if(currentActive === 1){
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}