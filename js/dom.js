// const btn = document.getElementById("myBtn");
// const btn = document.getElementsByClassName("btn");

// const btn = document.getElementsByTagName("button");

const btn = document.querySelector("#myBtn");
const reset = document.querySelector("#reset");
const box = document.querySelector(".box");

// console.log(btn);

// function myFun(){

// }

const addEventListener = (a, b) => {};

btn.addEventListener("click", () => {
  btn.style.display = "none";
  reset.style.display = "inline";
  //   box.style.backgroundColor = "black";
  box.style.marginLeft = "30rem";
});

reset.addEventListener("click", () => {
  btn.style.display = "inline";
  reset.style.display = "none";
  //   box.style.display = "none";
  // box.style.backgroundColor = "white";
  box.style.marginLeft = "0rem";
});
