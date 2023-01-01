//set initial count
let count = 0;

// select value and button
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let currentBtn = e.target.classList;
    if(currentBtn.contains('decrease')){
        count--;
    }else if(currentBtn.contains('increase')){
        count++;
    }else if(currentBtn.contains('reset')){
        count = 0;
    }
    value.textContent = count;
  });
});
